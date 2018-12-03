const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
    email:{
        type: String,
        required:false,
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    lenguage:{
        type:String,
        required:true,
        enum: ['Español', 'English']
    },
    firstName:{
        type: String,
        required: false,
        default:'Nombre de Contacto'
    },
    lastName:{
        type: String,
        required: true,
        default:'Codigo QR'
    },
    age:{
        type:Number,
        required:false,
    },
    interests:{
      type:[String],
      required:false
    },
    country:{
      type:String,
      required:false
    },
},{
    timestamps:{
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});


module.exports = mongoose.model('User', userSchema);