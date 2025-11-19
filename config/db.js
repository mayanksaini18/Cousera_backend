//config/db.js
 const mongoose = require("mongoose");

 const connectdb = async ( mongoURI)=> {
    try {
         const conn = await mongoose.connect(mongoURI , {

         })
         console.log(`MongoDB connected: ${conn.connection.host}`)
        }catch(err){
             console.error('MongoDB connection error:', err.message);
             process.exit(1);
        }
 };

 module.exports= connectdb;