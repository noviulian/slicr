"use server";
import { withMongoDB } from "@/lib/actions";
import Url from "@/models/Url";

export const createUrl = withMongoDB(async (prevState, formData: FormData) => {
    try {
        const url = formData.get("url");

        if (!url) {
            return { resetKey: prevState.resetKey, error: "URL is required" };
        }

        const newUrl = await Url.create({
            originalUrl: url,
        });
        return {
            error: null,
            resetKey: newUrl.id,
        };
    } catch (error) {
        console.error(error);
    }
});
