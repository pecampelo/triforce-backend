import { Schema, model } from 'mongoose';

const UserSchema = new Schema({}, {
  timestamps: true,
});

export default model('User', UserSchema);
