import { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
	const { lang } = await request.json(); 
	try {
		const cvUrl = await fetch("https://api.uploadthing.com/v6/listFiles", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"X-Uploadthing-Api-Key": `${import.meta.env.UPLOADTHING_SECRET}` 
			},
			body: JSON.stringify({})
		});

		const data = await cvUrl.json();

		if (data.files && data.files.length > 0) {
			let fileKey;

			if (lang === "en") {
				fileKey = data.files[1]?.key; 
			} else if (lang === "fr") {
				fileKey = data.files[0]?.key; 
			} else {
				fileKey = data.files[0]?.key;
			}

			const fileUrl = `https://utfs.io/f/${fileKey}`;

			return new Response(
				JSON.stringify({
					message: "File request processed successfully.",
					fileUrl: fileUrl
				}),
				{
					status: 200,
					headers: {
						"Content-Type": "application/json"
					}
				}
			);
		} else {
			return new Response(JSON.stringify({ error: "No files found for download." }), {
				status: 404,
				headers: {
					"Content-Type": "application/json"
				}
			});
		}
	} catch (error) {
		console.error("Error fetching file data:", error);
		return new Response(JSON.stringify({ error: "Failed to process the request" }), {
			status: 500,
			headers: {
				"Content-Type": "application/json"
			}
		});
	}
};
