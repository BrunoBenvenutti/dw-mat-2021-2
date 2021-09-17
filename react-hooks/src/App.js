import { BrowserRoute, BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Teste1 from './exercicios/Teste1';
import Teste2 from './exercicios/Teste2';
import Exercicio01 from './exercicios/01'
import Exercicio02 from './exercicios/02';
import Exercicio05 from './exercicios/05';
import Exercicio06 from './exercicios/06';

function App() {
  return (
    <>
      <h1>React Hooks</h1>
      <blockquote>
        <em>Hooks</em> são funções especiais do React
        que podem ser usadas dentro de componentes
        para armazenar dados ou para realizar ações
        atreladas ao ciclo de vida do componente
        (efeitos colaterais). Essas funções incluem
        <code> useState</code>, <code>useEffect </code>
        e <code> useRef</code>.
      </blockquote>

      <BrowserRouter>
        <ul>
          <li>
            <Link to="teste1">Primeiro teste</Link>
          </li>
          <li>
            <Link to="teste2">Segundo teste</Link>
          </li>
          <li>
            <Link to="ex01">Exercicio 01</Link>
          </li>
          <li>
            <Link to="ex02">Exercicio 02</Link>
          </li>
          <li>
            <Link to="ex05">Exercicio 05</Link>
          </li>
          <li>
            <Link to="ex06">Exercicio 06</Link>
          </li>
        </ul>


        <Switch>
          <Route path="/teste1">
            <Teste1 />
          </Route>
          <Route path="/teste2">
            <Teste2 />
          </Route>
          <Route path="/ex01">
            <Exercicio01 />
          </Route>
          <Route path="/ex02">
            <Exercicio02 />
          </Route>
          <Route path="/ex05">
            <Exercicio05 />
          </Route>
          <Route path="/ex06">
            <Exercicio06 />
          </Route>
        </Switch>

      </BrowserRouter>
    </>

  );
}

export default App;
