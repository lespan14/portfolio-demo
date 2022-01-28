//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './component/Header';
import About from './component/About';
import Projects from './component/Projects';

function App() {
  return (
    <main>

      <Header />

      <About />

      <Projects />
      <h1> Hello World! </h1>

      <a>Just line</a><br></br>

      <input type="text" id="Testtxt"></input>
      <button id="Testbtn">Button</button>
    </main>
  );
}

export default App;
