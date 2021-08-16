<template>
    <div>
        <div v-if="erro != undefined" style="z-index: 100" class="columns">
            <div class="notification is-danger mb-0 container column is-half" style="margin-top:50px">
            <button class="delete" @click="fechar"></button>
            <li>{{erro}}</li>
        </div>

        </div>
     
        <div class="columns">
                <div class="field column is-two-fifths" id="login_area">
                        <h3>Login</h3>
                    
                    <div class="control" style="margin-top: 25px">
                        <input class="input container column is-half" type="text" placeholder="Usuário" v-model="usuario">

                    </div>

                     <div class="control" style="margin-top: 25px">
                        <input class="input container column is-half" type="password" placeholder="Senha" v-model="senha">

                    </div>
                    <div style="text-align: center; margin-top:25px; margin-bottom:25px">  

                        <button class="button is-link is-outlined" @click="logar">Login</button>

                    </div>
                    
                </div>
        </div>

    
    
    </div>    
</template>
<script>
import axios from 'axios';
export default {

    data(){
        return {

            usuario : '',
            senha: '',
            erro: undefined
        }
    },
    methods:{
        logar(){
           
           axios.post("http://localhost:3000/login",{
               user: this.usuario,
               password: this.senha
           }).then(res=>{
             
                if(res.data.msg === false){
                    return this.erro = "Usuário ou senha inválido(s)";
               }else{
                   this.$router.push({name: 'principal'});
               }
               
               
           })
        },
        fechar(){    
                this.erro = undefined;
        }
    }
    
}
</script>
<style scoped>
#login_area{
  

    margin: auto;
    margin-top:230px;

    background-color: #e6f2ff;
    border-radius: 15px;
    
 
 
}

#login_area h3{
    font-size: 200%;
    text-align: center;
}

</style>