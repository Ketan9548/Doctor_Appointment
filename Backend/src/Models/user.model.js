import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
        default: "data:image/jpeg;base64,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"
    },
    address: {
        type: Object,
        required: true,
        default: { line1: '', line2: '' }
    },
    gender: {
        type: String,
        required: true,
        default: 'Not Selected'
    },
    dob: {
        type: String,
        required: true,
        default: 'Not Selected'
    },
    phone: {
        type: String,
        required: true,
        default: '0000000000'
    }
}, { timestamps: true, minimize: false });

const userModel = mongoose.models.user || mongoose.model('user', userSchema);

export default userModel