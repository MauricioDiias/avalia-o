import { useState } from 'react';
import './App.css';
import Avaliação from './components/Avaliação';
import PrimeiraTela from './components/PrimeiraTela';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'

function App() {
  const [comment, setComment] = useState('');
  const [comment2, setComment2] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route exact path='/' element={<PrimeiraTela
              comment={comment}
              comment2={comment2}
              setComment={setComment}
              setComment2={setComment2} />} />


            <Route exact path='/avaliacao' element={<Avaliação
              comment={comment}
              comment2={comment2}
              setComment={setComment}
              setComment2={setComment2}
            />
            } />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
