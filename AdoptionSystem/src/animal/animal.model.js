import mongoose from "mongoose";

const animalSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    race: {
        type: String,
        required: true
    },
    keeper: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },

})

export default mongoose.model('animal', animalSchema)
