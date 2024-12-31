import { createUploadthing, type FileRouter } from "uploadthing/server";

const f = createUploadthing();

const auth = (req: Request) => ({ id: "fakeId" });

export const ourFileRouter = {
	PdfGetter: f({
		pdf: {
			maxFileCount: 2,
			maxFileSize: "4MB"
		}
	})
		.middleware(async ({ req }) => {
			const user = await auth(req);

			if (!user) throw new Error("Unauthorized");

			return { userId: user.id };
		})
		.onUploadComplete(async ({ metadata, file }) => {
			console.log("Upload complete for userId:", metadata.userId);

			console.log("file url", file.url);

			return { uploadedBy: metadata.userId };
		})
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
export const utapi = new UTApi({
	defaultKeyType: "fileKey"
});
