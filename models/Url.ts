import mongoose, { Document } from "mongoose";

interface IUrl {
    originalUrl: string;
    shortCode: string;
    clicks: number;
    createdAt: Date;
}

const UrlSchema = new mongoose.Schema<IUrl>({
    originalUrl: {
        type: String,
        required: true,
    },
    shortCode: {
        type: String,
        required: true,
        unique: true,
    },
    clicks: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Url =
    (mongoose.models.Url as mongoose.Model<IUrl>) ||
    mongoose.model<IUrl>("Url", UrlSchema);

export default Url;
