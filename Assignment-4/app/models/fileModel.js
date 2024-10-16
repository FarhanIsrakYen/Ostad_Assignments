import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
    imageName: {
        type: String,
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId
    }
}, {
    timestamps: true,
    versionKey: false
})

export const FileModel = mongoose.model('File', fileSchema);