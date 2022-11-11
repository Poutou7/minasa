import './App.css';
import './Framework.css'

import Know from './components/Know'
import Landing from './components/landing/Landing';
import Start from './components/Start';
import Choose from './components/choosing/Choose';
import Plans from './components/plans/Plans';
import Previews from './components/previews/Previews';

function App() {
  return (
    <div className='app'>
      <div className='overlay'>
        <div className='container'>
          <Landing />
        </div>
      </div>
      <div className='container'>
        <Know />
        <Start />
      </div>
      <div className='content container'>
        <Choose />
      </div>
      <div className='content container'>
        <Plans />
      </div>
      <Previews />
    </div>
  );
}

export default App;
