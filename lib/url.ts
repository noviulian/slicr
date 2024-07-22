import { v4 as uuidv4 } from "uuid";

export function generateShortCode(length = 8): string {
    const uuid = uuidv4();
    const base62 =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let shortCode = "";
    let num = parseInt(uuid.replace(/-/g, ""), 16);
    while (num > 0) {
        shortCode = base62[num % 62] + shortCode;
        num = Math.floor(num / 62);
    }
    return shortCode.slice(0, length); // Adjust length as needed
}
