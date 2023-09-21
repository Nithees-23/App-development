import logo from './logo.svg';
import './App.css';
import Login from './login';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Signup from './signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/s' element={<Signup/>}/>

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
