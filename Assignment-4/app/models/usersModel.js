import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    institution: {
        type: String,
    },
    className: {
        type: String,
    },
    section: {
        type: String,
    },
    roll: {
        type: String,
    }
}, {
    timestamps: true,
    versionKey: false,
})

export const User = mongoose.model('User', userSchema);