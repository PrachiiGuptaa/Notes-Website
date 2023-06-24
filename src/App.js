import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Atoms/Navbar/Navbar';
import HomePage from './Pages/HomePage/HomePage';
import NotesPage from './Pages/NotesPage/NotesPage';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/addnotes' element={<NotesPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
