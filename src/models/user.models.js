import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true , 'email required']
        },
        password: {
            type: String,
            required: [true , 'password required']
        },
        username: {
            type: String,
            required: [true , 'username required'],
            unique: true
        }
    },
    {
        timestamps: true
    }
)

userSchema.pre("save", async function name(next) {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10);
    next();
})


export default mongoose.model("User", userSchema);
