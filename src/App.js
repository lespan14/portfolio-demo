//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './component/Header';
import About from './component/About';

function App() {
  return (
    <main>

      <Header />

      <About />
      <h1> Hello World! </h1>

      <a>Just line</a><br></br>

      <input type="text" id="Testtxt"></input>
      <button id="Testbtn">Button</button>
    </main>
  );
}

export default App;
