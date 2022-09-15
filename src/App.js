
import React from "react";
import { useState , useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

// usestate gives an array of two values 
// [value , setvalue]
// value is the value we want to store and setvalue is a function to set the value

const App = () => {
  const [searchField, setSearchField] = useState('');

  const [monsters, setMonsters] = useState([]);

  useEffect(()=>{
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=898")
    .then((Response) => Response.json())
    .then((users) => users.results)
    .then((val) => setMonsters(val));
  }, []);


  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };


  const filteredArray = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });

  return (
    <div className="App">
      <h1 className="title">Pokedex</h1>
      <SearchBox onChangeHandler={onSearchChange} placeHolder='Pokemon' />
      <CardList characters={filteredArray} />
    </div>
  );
}

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     console.log("component");
//     fetch("https://pokeapi.co/api/v2/pokemon/?limit=898")
//       .then((Response) => Response.json())
//       .then((users) => users.results)
//       .then((val) =>
//         // this.setstate(callback one , callback two)

//         this.setState(() => {
//           return { monsters: val };
//         })
//       );
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     const filteredArray = this.state.monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(this.state.searchField);
//     });

//     return (
//       <div className="App">

//         <h1 className="title">Pokedex</h1>
//         <SearchBox onChangeHandler={this.onSearchChange} placeHolder='Pokemon' />
//         <CardList characters={filteredArray} />
//       </div>
//     );
//   }
// }

export default App;
