import dao from './patient.dao';

exports.getAll=(req,res)=>{
    dao.get({},(err,patients)=>{
        res.send(patients);
    })
}

exports.create = (req,res)=>{
    var patient = req.body;
    dao.create(patient,(err,patient)=>{
        res.send(patient);
    })
}

exports.update = (req,res)=>{
    var patient = {
        "age":req.body.age
    }
    dao.update({_id:req.params.id},patient,(err,patient)=>{
        res.send("Patient Updated");
    })
}

exports.delete=(req,res)=>{
    dao.delete({_id:req.params.id},(err,results)=>{
        res.send(result);
    })
}