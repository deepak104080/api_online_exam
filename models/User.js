// Mongoose - Library - ORM - ExpressJS

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = mongoose.Schema({
    userid: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
    // password: {
    //     type: String,
    //     required: true,
    //     unique: true
    // },
    // contact: {
    //     type: Number,
    //     required: true
    // },
    // city: {
    //     type: String
    // },
    // pincode: {
    //     type: Number
    // },
    // address: {
    //     type: String
    // },
    // gender: {
    //     type: String
    // },
    // dob: {
    //     type: Date
    // },
    // created: {
    //     type: Date,
    //     required: true
    // }
},{strict: true});

UserSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', UserSchema);