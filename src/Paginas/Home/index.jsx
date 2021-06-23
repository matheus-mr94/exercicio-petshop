import './estilos.css'
import imagem from '../../Componentes/Imagens/petshop2.png'


const Home = () => {

    return (
        <div>
            <div className="imagem">
                <img src={imagem} className="img-fluid" alt="" />
            </div>
            <div className="container-fluid">
                <p className="text-center"> Cãopeão Petshop, tudo o que você precisa para o seu melhor cãopanheiro.</p> 
            </div>
            <footer>
                ReactJs - SERRATEC
            </footer>
        </div>
    )

}

export default Home;