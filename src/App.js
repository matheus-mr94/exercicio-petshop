
import './App.css';
import Home from './Paginas/Home';
import Produtos from './Paginas/Produtos'
import Servicos from './Paginas/Servicos';
import Pagina404 from './Paginas/Pagina404';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Componentes/Navbar'
import Produto from './Paginas/Produtos/ProdutoDetalhe';
import Servico from './Paginas/Servicos/ServicoDetalhe';
import Cadastro from './Paginas/Cadastro';
import Login from './Paginas/Login'


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/produtos">
            <Produtos />
          </Route>
          <Route path="/produtos/:id">
            <Produto />
          </Route>
          <Route exact path="/servicos">
            <Servicos  />
          </Route>
          <Route path="/servicos/:id">
            <Servico />
          </Route>
          <Route path="/login">
            <Login className="login"/>
          </Route>
          <Route path="/cadastro">
            <Cadastro className="cadastro"/>
          </Route>
          <Route>
            <Pagina404 />
          </Route>
        </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;
