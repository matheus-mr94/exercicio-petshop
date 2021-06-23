import { useEffect, useState } from "react";
import http from '../../../http'
import { Link } from "react-router-dom";

const Tabela = (props) => {

    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        http.get('produtos')
            .then(response => {
                setProdutos(response.data)
            })
    }, [])

    return (
        <div className="container">
            <div className="col-8">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Produtos</th>
                            <th>Preços</th>
                            <th>Detalhes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.map(produto => <tr key={produto.id}><td>{produto.nome}</td><td>R$ {produto.preco}</td><td><Link to={`/produtos/${produto.id}`}>Detalhes do produto</Link></td></tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Tabela;