import { GrFormNext } from 'react-icons/gr';

import './App.css';

function App() {
  return (
    <div className='app'>
      <div className='header'>
        <h2>Vamos começar</h2>
      </div>
      <div className='form-container'>
        <form>
          <div className='inputs-container'></div>
          <div className='actions'>
            <button type='submit'>
              <span>Avançar</span>
              <GrFormNext />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
