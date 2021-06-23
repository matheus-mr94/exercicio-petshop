import http from "../../http"
import { useState } from "react"
import { Link } from "react-router-dom"
import './estilos.css'



const Login = () => {

    const[email,setEmail] = useState('')
    const[senha,setSenha] = useState('')


    const logon = (evento)=>{
        evento.preventDefault()
        const usuario ={
            email:email,
            senha:senha
        }
        http.post('auth/login', usuario)
        .then(response => {            
            localStorage.setItem('token', response.data.access_token)
          })
        .catch(erro=>{
            console.log('Algo deu errado')
            console.log(erro);
        })
        
    }


    return (
        <div className="login">
        <div className ="container container1">
        <div className="formulario">
        <form onSubmit={logon}>
            <div>
                <label >Login</label>
                <input value={email} onChange={(evento)=>setEmail(evento.target.value)} className="form-control" type="text"/>
            </div>
            <div>
                <label>Senha</label>
                <input value={senha} type="password" onChange={(evento)=>setSenha(evento.target.value)} className="form-control"/>
            </div>
            <div>
                <button className="btn btn-warning">Entrar</button> 
                <Link className="link" to="/cadastro">Cadastrar</Link>
            </div>
        </form>
        </div>
        </div>
        </div>
    )
}

export default Login;