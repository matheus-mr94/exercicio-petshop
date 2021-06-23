import http from '../../../http'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './estilos.css'


const Servico = () => {

    const { id } = useParams()
    const [servico, setServico] = useState({})

    useEffect(() => {
        http.get('servicos/' + id)
            .then(response => setServico(response.data))
    }, [id])

    return (
        <div className="container">
            <div class="card border-warning mb-3" >
                <div class="card-header">R$ {servico.preco}</div>
                <div class="card-body">
                    <h5 class="card-title">{servico.nome}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    )
}

export default Servico;

