
import { useState } from "react";
import http from "../../http";
import './estilos.css'


const Cadastro = ()=>{

    const[nome,setNome] = useState('')
    const[email,setEmail] = useState('')
    const[senha,setSenha] = useState('')


    const cadastrar =(evento) =>{
        evento.preventDefault();
        const usuario = {
            nome: nome,
            email: email,
            senha: senha
        }

        http.post('auth/register',usuario)
            .then(response=>(response.data))

        
            
    }   

    return(
        <div className="cadastro">
        <div className="container container1">
            <form onSubmit={cadastrar}> 
                <div>
                    <label>Nome</label>
                    <input className="form-control" required type="text" onChange={(evento)=>setNome(evento.target.value)}/>
                </div>
                <div>
                    <label>Email</label>
                    <input  className="form-control" required type="email" onChange ={(evento)=>setEmail(evento.target.value)}/>
                </div>
                <div>
                    <label>Senha</label>
                    <input  className="form-control" required type="password" onChange={(evento)=>setSenha(evento.target.value)}/>
                </div>
                <div>
                    <button className="btn btn-warning">Cadastrar</button>
                </div>
            </form>
        </div>
        </div>
    )
    
}
export default Cadastro;