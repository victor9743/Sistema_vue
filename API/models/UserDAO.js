var knex = require('../database/db');
var crypto = require('bcrypt');

class UserDAO{

    async listarUsuario(){
        try{

            var result = await knex.select().table('usuarios');

            return result

        }catch(error){

            console.log(error);
        
        }

    }
    async buscaUsuario(user){

        try {
            
            var result = await knex.select().where({usuario: user}).table('usuarios');

            if(result.length > 0 ){

                return result;
            }else{
                return {msg: false};      
            }

        } catch (error) {
            
            return error;
        }

    }

    async newusuario(usuario, senha){
        
        console.log(usuario, senha);

        try {

            var hash = await crypto.hash(senha, 10);
            await knex.insert({usuario, senha: hash}).table('usuarios');
            
        

        } catch (error) {
            
            return {msg: error}
        }
    }
    async login(usuario,senha){
        console.log(usuario, senha);
       
        try {
            var result = await knex.select().where({usuario : usuario, senha : senha}).table('usuarios')

            if(result.length > 0){
             
                return true;

            
            }else{

                return {msg: "Usuário ou senha inválido(s)"}
            }
        } catch (error) {
            
            console.log(error);
            return error;
        }

    }

}
module.exports = new UserDAO();