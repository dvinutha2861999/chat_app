
import './App.css';
import { Route } from 'react-router-dom';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
     
    <Route path='/' component={Homepage}/>
    
    </div>
  );
}

export default App;
