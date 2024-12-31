import { utapi } from "./uploadthing"; // Ensure this is on the server-side

export default async function handler(req, res) {
	const files = await utapi.listFiles();
	res.status(200).json({ files });
}
