import dbConnect from "./mongodb";

export function withMongoDB(action) {
    return async (...args) => {
        await dbConnect();
        return action(...args);
    };
}
