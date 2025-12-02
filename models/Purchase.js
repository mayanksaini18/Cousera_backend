// models/Purchase.js
const mongoose = require('mongoose');

const PurchaseSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },

  course: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Course', 
    required: true 
  },


});

// Prevent duplicate purchases unless you want multiple orders
PurchaseSchema.index({ user: 1, course: 1 }, { unique: true });

module.exports = mongoose.model('Purchase', PurchaseSchema);
