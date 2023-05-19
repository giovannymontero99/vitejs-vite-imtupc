import { Routes, Route } from 'react-router-dom';
import Tabla from './components/Tabla';
import NewUser from './components/NewUser';
import Btn from './components/Btn';
import './App.css';

function App() {
  return(
    <Routes>

      <Route path='/' element={ <> <Tabla /> <Btn /> </> } />
      <Route path='/new' element={ <> <NewUser /> <Btn /> </> } />
    </Routes>

  )
}

export default App;
