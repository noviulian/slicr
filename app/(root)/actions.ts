"use server";
import { withMongoDB } from "@/lib/actions";
import { generateShortCode } from "@/lib/url";
import Url from "@/models/Url";

export const createUrl = withMongoDB(async (prevState, formData: FormData) => {
    const url = formData.get("url") as string;

    if (!url) {
        return { resetKey: prevState?.resetKey, error: "URL is required" };
    }

    try {
        let shortCode = generateShortCode();
        let isUnique = false;
        let attempts = 0;
        const MAX_ATTEMPTS = 10;

        while (!isUnique && attempts < MAX_ATTEMPTS) {
            const existingUrl = await Url.findOne({ shortCode });
            if (!existingUrl) {
                isUnique = true;
            } else {
                shortCode = generateShortCode();
            }
        }

        if (!isUnique) {
            return {
                resetKey: prevState?.resetKey,
                error: "Failed to generate a unique short code. Please try again.",
            };
        }

        const newUrl = await Url.create({
            originalUrl: url,
            shortCode: shortCode,
        });

        return {
            error: null,
            resetKey: newUrl.id,
            shortUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/${shortCode}`,
        };
    } catch (error) {
        console.error("Error creating URL:", error);
        return {
            resetKey: prevState?.resetKey,
            error: "An error occurred while creating the short URL. Please try again.",
        };
    }
});
