import mongoose, { Document, Model } from 'mongoose';

interface IUser extends Document {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  password: string;
  verified: boolean;
  role: 'user' | 'admin';
}

const userSchema = new mongoose.Schema<IUser>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    verified: { type: Boolean, default: false },
    role: { type: String, default: 'user', enum: ['user', 'admin'] },
  },
  { timestamps: true }
);

const User: Model<IUser> = mongoose.model<IUser>('User', userSchema);

export default User;
