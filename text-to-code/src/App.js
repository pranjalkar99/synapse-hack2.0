import logo from './logo.svg';
import './App.css';
import response from './response.json';
import Test from './components/Test';
import Pranjal from './components/Pranjal';

function App() {

  const text = response.textAnnotations[1].boundingPoly.vertices;
  const width =  text[1].x - text[0].x
  const height = text[2].y - text[1].y

  return (
    <div className="App">
      {/* <div style={{ width: width, height: height, position: "absolute", left: text[0].x, top: text[0].y}}>
        {
          response.textAnnotations[1].description
        }
      </div> */}
      {/* <Test /> */}
      <Pranjal />
    </div>
  );
}

export default App;
