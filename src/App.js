import { useState } from 'react';
import './App.css';
import Avaliacao from './components/Avaliacao';
import PrimeiraTela from './components/PrimeiraTela';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'

function App() {
  const [question_text, setQuestion_text] = useState('');
  const [feedback_text, setFeedback_text] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route exact path='/' element={<PrimeiraTela
              question_text={question_text}
              feedback_text={feedback_text}
              setQuestion_text={setQuestion_text}
              setFeedback_text={setFeedback_text} />} />


            <Route exact path='/avaliacao' element={<Avaliacao
              question_text={question_text}
              feedback_text={feedback_text}
              setQuestion_text={setQuestion_text}
              setFeedback_text={setFeedback_text}
            />
            } />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
