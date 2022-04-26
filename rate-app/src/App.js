
import './App.css';
import Card from './components/Card.jsx';


let cardJson = [{
  price: "300",
  speed: "10",
  description: "Объём включенного трафика не ограничен",
  firstColor: "blue",
  secondColor: "lightblue",
},{
  price: "450",
  speed: "50",
  description: "Объём включенного трафика не ограничен",
  firstColor: "green",
  secondColor: "lightgreen",
},{
  price: "550",
  speed: "100",
  description: "Объём включенного трафика не ограничен",
  firstColor: "red",
  secondColor: "lightred",
  isSelected: true,
},{
  price: "1000",
  speed: "200",
  description: "Объём включенного трафика не ограничен",
  firstColor: "black",
  secondColor: "lightblack",
}]

function App() {
  return (
    <div className="App">
      {
        cardJson.map((card) =>
        <Card price={card.price} speed={card.speed} description={card.description} firstColor={card.firstColor} secondColor={card.secondColor} isSelected={card.isSelected}></Card>
        )
      }
    </div>
  );
}

export default App;
