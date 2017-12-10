import mongoose, { Schema } from 'mongoose';

const todoSchema = new Schema({
    title: String
});

export default mongoose.model('todo', todoSchema);