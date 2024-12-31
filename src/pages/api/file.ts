// src/pages/api/file.ts
import { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const { lang } = await request.json();  // Get the language from the request body

  try {
    // Make the API request to Uploadthing to get file details
    const cvUrl = await fetch("https://api.uploadthing.com/v6/listFiles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Uploadthing-Api-Key": `${import.meta.env.UPLOADTHING_SECRET}` // Ensure the secret key is available
      },
      body: JSON.stringify({})
    });

    const data = await cvUrl.json();

    if (data.files && data.files.length > 0) {
      let fileKey;

      // Adjust the file selection based on the language
      if (lang === "en") {
        fileKey = data.files[1]?.key;  // Select the second file for English
      } else if (lang === "fr") {
        fileKey = data.files[0]?.key;  // Select the first file for French
      } else {
        // Default fallback to the first file if the language is not recognized
        fileKey = data.files[0]?.key;
      }

      const fileUrl = `https://utfs.io/f/${fileKey}`;

      return new Response(
        JSON.stringify({
          message: 'File request processed successfully.',
          fileUrl: fileUrl,
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    } else {
      return new Response(
        JSON.stringify({ error: 'No files found for download.' }),
        {
          status: 404,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    }
  } catch (error) {
    console.error("Error fetching file data:", error);
    return new Response(
      JSON.stringify({ error: 'Failed to process the request' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
};
