import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navegacion from './components/Navegacion';
import CrearUsuarios from './components/CrearUsuarios';
import ListaUsuarios from './components/ListaUsuarios';


function App() {
  return (
    <div className="">
      Helooooooo
      <Navegacion />
      <div className="container p-4">
        <Routes>
          <Route exact path="/" element={<ListaUsuarios />} />
          <Route path="/" element={<CrearUsuarios />} />
          <Route path="/edit/:id" element={<CrearUsuarios />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
