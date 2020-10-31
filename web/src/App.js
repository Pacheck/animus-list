import { BrowserRouter } from 'react-router-dom';
import Navigator from './components/Navigator/';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigator />
        <p>Uau, como meu site é belo e organizado...</p>
      </div>
    </BrowserRouter>
  );
}

export default App;
