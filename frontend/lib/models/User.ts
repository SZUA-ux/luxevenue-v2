import mongoose, { Schema, Document } from 'mongoose'

export interface IUser extends Document {
  id: string
  username: string
  email: string
  password: string
  role: 'admin' | 'staff'
  firstName?: string
  lastName?: string
  resetPasswordToken?: string
  resetPasswordExpires?: Date
  createdAt: Date
  updatedAt: Date
}

const UserSchema = new Schema<IUser>(
  {
    id: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true, lowercase: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'staff'], default: 'staff' },
    firstName: { type: String },
    lastName: { type: String },
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date },
  },
  { timestamps: true }
)

// Note: username index is already created via 'unique: true' above
// Removed duplicate: UserSchema.index({ username: 1 })

export const User = mongoose.models.User || mongoose.model<IUser>('User', UserSchema)
