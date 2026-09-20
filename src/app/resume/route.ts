import { readFile } from "node:fs/promises";
import path from "node:path";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "assets", "documents", "resume.pdf");
  const file = await readFile(filePath);

  return new Response(new Uint8Array(file), {
    headers: {
      "Content-Disposition": 'inline; filename="Anson Chan\'s Resume.pdf"',
      "Content-Type": "application/pdf"
    }
  });
}
