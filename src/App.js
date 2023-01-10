import './App.css';
import { Piechart } from './components/charts/Piechart';
import { Polarchart } from './components/charts/Polarchart';
import { Radarchart } from './components/charts/Radarchart';
import { Bar, VerticalBar } from './components/charts/Verticalbarchart';
import Sample from './components/sample';
import Forecast from './components/Weather';

function App() {
  return (
    <>
    {/* <div className="App">
            <h1>Weather App</h1>
            <main>
<Forecast />
            </main>
<footer>
        Page created by Gokul
      </footer>
    </div> */}
<div >
<Piechart />
<Radarchart />
<Sample />
<Polarchart />
<VerticalBar />

<footer>
       Charts
      </footer>
</div>
</>
  );
}

export default App;
