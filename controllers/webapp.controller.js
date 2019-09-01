const Usuario = require('../models/usuario');
const Persona = require('../models/persona');

const webAppCtrl = {};

//Vamos jc
webAppCtrl.getMatriculaData = async (req, res, next) => {
    const { id } = req.params;    
    const usuarioData = await Usuario.find({ 'matricula': id});
    const personaData = await Persona.find({ 'matricula': id }).select({ nombre: 1, apellido: 1});
 
    const dataFinal= [await usuarioData, await personaData];
   
    res.json(dataFinal);
};

webAppCtrl.getUserData = async (req, res, next) => {
  const { id } = req.params;    
  const usuarioData = await Usuario.find({ 'user': id}).select({ idPersona: 1});  
  const persona = await Persona.findById(usuarioData.idPersona);  
  const dataFinal= [await usuarioData, await persona];  
  res.json(dataFinal);
};

//hugo
webAppCtrl.updateSaldo = async (req, res, next) => {
  const { id } = req.params;
  const usuario = {
      saldoActual: req.body.saldoActual      
  };
  await Usuario.findByIdAndUpdate(id, {$set :
		{			
			"saldoActual" : usuario.saldoActual,			
		}}, {new: true});
  res.json({status: 'Saldo Actualizado'});
};


webAppCtrl.getCedulaData = async (req, res, next) => {
    const { id } = req.params;
    const persona = await Persona.find({ 'cedula': id});
    res.json(persona);
};


module.exports = webAppCtrl;
