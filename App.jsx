import Footer from "./Footer.jsx"
import Header from "./Header.jsx"
import Food from "./Food.jsx"
import Card from "./Card.jsx";
import Button from "./Button/Button.jsx";
import Student from "./Student.jsx";
import UserGreeting from "./Greeting.jsx";
import List from "./List.jsx";

function App() {
 const fruits = [{id:1,name:"apple",calories:50}, 
                        {id:2,name:"orange",calories:70},
                        {id:3,name:"banana",calories: 160},
                        {id:4,name:"pineapple",calories:85}];

  const vegetables = [];


  return(<>
  <List items = {fruits} category = 'Fruits'/>
  <List items = {fruits} category = 'Fruits'/>
 
 
  
  
  </>);
}

export default App
