var mongoose=require('mongoose');
module.exports=new mongoose.Schema({
    titulo:{
        type:String,
        required:true
    },
    autor:{
        type:String,
        required:true
    },
    editorial:{
        type:String,
        required:true
    }
}); 