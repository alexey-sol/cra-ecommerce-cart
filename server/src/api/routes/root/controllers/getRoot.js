import path from "path";

import sendResponse from "@utils/http/sendResponse";

export default async (request, response) => {
    const root = process.cwd();
    const indexHtml = path.join(root, "client", "build", "index.html");
    sendResponse(response, indexHtml);
};
