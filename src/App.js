import logo from './logo.svg';
import './App.css';
import Auto from './Auto.jsx'

function App() {
  return (
    <div className="App">
      <Auto auto='Niva' year='2020' color='White' country='Russia' src='1.jpg'/>
      <Auto auto='Bmw' year='2008' color='Orange' country='Germany' src='2.jpg'/>
      <Auto auto='Mercedes' year='2022' color='White' country='Germany' src='3.jpg'/>
      <Auto auto='Toyota' year='2015' color='White' country='Japan' src='4.jpg'/>
    </div>
  );
}

export default App;
