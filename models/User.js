const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username must be provided"]
    },
    email: {
        type: String,
        required: [true, "Email must be provided"],
        unique: true
    },
    password: {
        type: String,
        require: [true, "Password must be provided"]
    },
},
{
    timestamps: true
}
)

const User = mongoose.model("User",userSchema)

module.exports = User