var mongoose = require('mongoose');
var schema=require('./schema');

mongoose.connect('mongodb://localhost:27017/test');

var Libro=mongoose.model('Libro',schema,'libro');
function insert(titulo,autor,editorial) {
    var libro1 = new Libro({
        titulo: titulo,
        autor: autor,
        editorial: editorial
    }); 

    Libro.create(libro1, err => {
        if (err) {
            console.log(err);
            process.exit(1);
        }
        console.log("Saved!!");
        process.exit(0);
    });
}
function find(autor) {
    Libro.find({autor:autor}, (err, docs) => {
        if (err) {
            console.log(err);
            process.exit(1);
        } else {
            //console.log("Consulta general");
            console.log(docs);
            process.exit(0);
        }
    });
}

function put(id,editorial){
    Libro.update({_id:id},{$set:{editorial:editorial}},err=>{
        if (err){
            console.log(err);
            process.exit(1);
        }
        console.log("Editorial actualizada");
        process.exit(0);
    });
}
function del(id){
    Libro.findByIdAndRemove({_id:id},(error)=>{
        if (error){
            console.log(error);
            process.exit(1);
        }
        else{
            console.log("Se eliminó correctamente");
            process.exit(0);
        }
    });
}

//insert("Las ventajas de ser invisible","Red John","Trillas");
find("Red John");
//put('5d155fc8594a1e21f405554b',"Plantille");
//del('5d155fc8594a1e21f405554b');