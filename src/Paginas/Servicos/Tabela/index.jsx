import { useEffect, useState } from "react";
import http from '../../../http'
import { Link } from "react-router-dom";

const Tabela = (props) => {

    const [servicos, setServicos] = useState([])

    useEffect(() => {
        http.get('servicos')
            .then(response => {
                setServicos(response.data)
            })
    }, [])

    return (
        <div className="container">

            <div className="col-8">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Servicos</th>
                            <th>Preços</th>
                            <th>Detalhes</th>
                        </tr>
                    </thead>

                    <tbody>
                        {servicos.map(servico => <tr key={servico.id}><td>{servico.nome}</td><td>{servico.preco}</td><td><Link to={`/servicos/${servico.id}`}>Detalhes</Link></td></tr>)}
                    </tbody>
                </table>
            </div>

        </div>

    )
}
export default Tabela;