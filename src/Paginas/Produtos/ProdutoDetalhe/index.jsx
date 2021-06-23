import http from '../../../http'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './estilos.css'




const Produto = () => {
    const { id } = useParams()
    const [produto, setProduto] = useState({})

    useEffect(() => {
        http.get('produtos/' + id)
            .then(response => setProduto(response.data))
    }, [id])

    return (
        <div className="container">
            <div className="row">                
                <div className="col-6">
                <div className="card border-warning mb-3" >
                    <div className="card-header">R$ {produto.preco}</div>
                    <div className="card-body">
                        <h5 className="card-title">{produto.nome}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default Produto