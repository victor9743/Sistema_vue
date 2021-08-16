var userDAO = require('../models/UserDAO');
var crypto = require('bcrypt');

class Usuarios{

    async listarUsuarios(req, res){

        try{
            
            var conexao = await userDAO.listarUsuario();

            res.json(conexao);

        }catch(error){
            
            console.log(error);
        }



    }
    async login(req, res){

        var usuario = req.body.user;
        var senha = req.body.password;
       
    
        try {

            var result = await userDAO.buscaUsuario(usuario);      

            if(result.length > 0){

                var senhahash = await crypto.compare(senha, result[0].senha);
                
                if(senhahash){
                        
                    var result2= await userDAO.login(usuario, result[0].senha);
                    if(result2 === true){

                        res.json({msg : true})
    
                    }
                    else{
                        res.json({msg : false});
                    }
               
                }else{

                    res.json({msg: false});

                }
                
                
             

            }else{

               res.json({msg: false});
            }
            

          

                
                
              
        } catch (error) {
            
            res.json(error)
        }



    }

    async criarUsuario(req, res){

        var usuario = req.body.user;
        var senha = req.body.password;

        try {   

            if(usuario === undefined || usuario.length === 0 || senha === undefined || senha.length === 0){

                res.status(400);
                return res.json( {msg: "Usuário ou senha inválidos "})
                
            }else{

                var conexao = await userDAO.buscaUsuario(usuario);
                
                if(conexao.msg == true){

                    res.status(404);
                    return res.json({msg: "O usuário já existe"})
                }
                else{

                    var usuario = await userDAO.newusuario(usuario, senha);

                    res.status(200);
                    return res.json({msg: "Usuário Cadastrado com Sucesso"})
                }

               

            }      
    
        } catch (error) {

            res.json(error);
            
        }

    }
   
}

module.exports = new Usuarios();