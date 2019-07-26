const User =require('./auth.dao')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const SECRET_KEY ='secretkey94'


exports.createUser =(req,res,next)=>{
    const newUser={
        user:req.body.user,
        
        //password:req.body.passwordwoocommerce_after_shop_loop_item
        password: bcrypt.hashSync(req.body.password)
    }
    User.create(newUser,(err,user)=>{
        if(err & err.code ===11000) return res.status(409).send('el email ya existe')
        if(err)return res.status(500).send('server error');
        const expiresIn = 24*60*60;
        const accesToken = jwt.sign({id:user.id},
            SECRET_KEY,{
                expiresIn:expiresIn
            });
            const dataUser={
                user:user.user,
                accesToken:accesToken,
                expiresIn:expiresIn
            }

         //response
         //res.send({user});
         res.send({dataUser});

    })
}

exports.loginUser =(req,res,next)=>{
    const userData ={
        user: req.body.user,
        password:req.body.password
    }
User.findOne({user:userData.user},(err,user)=>{
    if(err)return res.status(500).send('error en servidor');
    if (!user){
        //email does not exist
        res.status(409).send({message:'somthing is worng'});

    }else {
        const resultPassword = bcrypt.compareSync(userData.password,user.password);
        if(resultPassword){
            const expiresIn=24*60*60;
            const accesToken = jwt.sign({id:user.id},SECRET_KEY,{
                expiresIn:expiresIn
            }); 

            const dataUser={
                user:user.user,
                accesToken:accesToken,
                expiresIn:expiresIn
            }
            res.send({dataUser})
        } else{
            //paswword wrong
            res.status(409).send({message:"error de password"});
        }
    }
})
}
