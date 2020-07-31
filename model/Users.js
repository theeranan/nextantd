import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const userSchema = new Schema({
  id: { type: String },
  email: { type: String },
  hash: { type: String },
  createdAt: { type: Number },
  salt: { type: String },
});

const Users = mongoose.models.users || mongoose.model('users', userSchema);
module.exports = {
  Users,
};
