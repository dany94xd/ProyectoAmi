const Usuario = require('../models/usuario');
const Persona = require('../models/persona');

const mobileAppCtrl = {};

mobileAppCtrl.getUsuarioData = async (req, res, next) => {
    
    const { id } = req.params;
    //const usuario = await Usuario.findById(id);
    //{ 'username': userName }
    //const usuarioData = await Usuario.find({where: {'user':id}, select: ['nroBotellas', 'saldoTotal','saldoActual']});
    //const usuarioData = await Usuario.find({ 'user': id });
    const usuarioData = await Usuario.find({ 'user': id });
    const dataUsuario={
        usuario:usuarioData.user,
        botellas:usuarioData.NroBotellas,
        saldoTotal:usuarioData.saldoTotal,
        saldoActual:usuarioData.saldoActual
    }

    console.log(usuarioData.id)
    //res.send({dataUsuario});
    res.json(usuarioData.NroBotellas);
    //res.json(usuarioData.user, usuarioData.nroBotellas, usuarioData.saldoTotal, usuarioData.saldoActual);


};
//la puta madre
mobileAppCtrl.getMatriculaData = async (req, res, next) => {
    const { id } = req.params;
    //const usuarioData = await Usuario.findOne({where: {idInstitucion:matricula}, select: ['nroBotellas', 'saldoTotal','saldoActual']});
    const usuarioData = await Usuario.findOne({ 'idInstitucion': id });
 //const personaData = await Persona.findOne({where: {idInstitucion:matricula}, select: ['nombre', 'apellido']});
 const personaData = await Persona.findOne({ 'idInstitucion': id });
    //res.json({nombre:personaData.nombre, apellido:personaData.apellido, nroBotellas:usuarioData.nroBotellas, saldoTotal:usuarioData.saldoTotal});
    res.json(personaData.nombre, personaData.apellido, usuarioData.nroBotellas, usuarioData.saldoTotal);
};

//mobileAppCtrl.getSaldoResponse = async (req, res, next) => {
//    const { matricula } = req.params;
//    const usuarioData = await Usuario.findOne({where: {idInstitucion:matricula}, select:['saldoTotal']});
//    res.json(usuarioData);
//};


module.exports = mobileAppCtrl;
