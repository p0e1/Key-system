import fetch from "node-fetch";

export default async function handler(req, res) {
    const GITHUB_JSON_URL = "https://raw.githubusercontent.com/p0e1/Key-system/refs/heads/main/9KQcjM848o.json";

    if (req.method === "GET") {
        const response = await fetch(GITHUB_JSON_URL);
        const data = await response.json();
        res.status(200).json(data);
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}
