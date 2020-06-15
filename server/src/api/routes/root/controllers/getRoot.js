import path from "path";

export default async (request, response) => {
    const root = process.cwd();
    const indexHtml = path.join(root, "..", "client", "build", "index.html");
    response.sendFile(indexHtml);
};
