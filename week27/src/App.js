import './App.css';
import Tarif from "./components/Tarif";

let tarifJSON = `[
{
  "tarif": "300",
  "speed": "10",
  "currency": "руб ",
  "period": "/мес",
  "classHeader": "blueHeader",
  "classBody": "blueBody",
  "classTarif": ""
},
{
  "tarif": "450",
  "speed": "50",
  "currency": "руб ",
  "period": "/мес",
  "classHeader": "greenHeader",
  "classBody": "greenBody",
  "classTarif": ""
},
{
  "tarif": "550",
  "speed": "100",
  "currency": "руб ",
  "period": "/мес",
  "classHeader": "redHeader",
  "classBody": "redBody",
  "classTarif": ""
},
{
  "tarif": "1000",
  "speed": "200",
  "currency": "руб ",
  "period": "/мес",
  "classHeader": "blackHeader",
  "classBody": "blackBody",
  "classTarif": ""
}
]
`

let tarifs = JSON.parse(tarifJSON);

function App() {
  return (
    <div className="App">
      {
        tarifs.map((tarif) =>
          <Tarif tarif={tarif.tarif} speed={tarif.speed} currency={tarif.currency} period={tarif.period} classHeader={tarif.classHeader} classBody={tarif.classBody} classTarif={tarif.classTarif}></Tarif>
          )
        }
    </div>
  );
}

export default App;
