import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    originalUrl: String,
    shortCode: String,
    createdAt: {type: Date, default: Date.now},
    clicks: {type: Number, default: 0},
});

const Url = mongoose.model('Url', urlSchema)

export default Url;