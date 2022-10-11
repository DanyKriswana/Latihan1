import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/users' element={<Users/>}/>
      </Routes>
    </div>
  );
}

export default App;
