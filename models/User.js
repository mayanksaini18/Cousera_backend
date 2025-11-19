// models/user.js

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name:{ type : String, required : true},
    email:{ type : String, required : true, unique : true},
    password:{ type : String, required : true}
});

//hash the password
 userSchema.pre('save' , async function (next){
    if(!this.isModified('password')){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();

 })

 //instance method to compare pwd 
 userSchema.methods.matchPassword = function ( enteredPassword){
    return bcrypt.compare(enteredPassword , this.password)
 }

 const User = mongoose.model('User', userSchema);

 module.exports = User;