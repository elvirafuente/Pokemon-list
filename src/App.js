import React from 'react';
import './App.css';
import PokeList from './components/PokeList';
import Filters from './components/Filters'

const pokemons = [
  { "id": 1, "name": "bulbasaur", "types": ["poison", "grass"], "evolution": null, "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" },
  { "id": 2, "name": "ivysaur", "types": ["poison", "grass"], "evolution": "bulbasaur", "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" },
  { "id": 3, "name": "venusaur", "types": ["poison", "grass"], "evolution": "ivysaur", "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" },
  { "id": 4, "name": "charmander", "types": ["fire"], "evolution": null, "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" },
  { "id": 5, "name": "charmeleon", "types": ["fire"], "evolution": "charmander", "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png" },
  { "id": 6, "name": "charizard", "types": ["flying", "fire"], "evolution": "charmeleon", "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" },
  { "id": 7, "name": "squirtle", "types": ["water"], "evolution": null, "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" },
  { "id": 8, "name": "wartortle", "types": ["water"], "evolution": "squirtle", "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png" },
  { "id": 9, "name": "blastoise", "types": ["water"], "evolution": "wartortle", "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png" },
  { "id": 10, "name": "caterpie", "types": ["bug"], "evolution": null, "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png" }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
      inputName: '',
    };
    this.handlerClickCard = this.handlerClickCard.bind(this);
    this.handleInputName = this.handleInputName.bind(this);
 }


  handlerClickCard(event) {
    const targetID = parseInt(event.currentTarget.id);

    this.setState(prevState => {
      if (this.state.favorites.includes(targetID)) {
        return {
          ...prevState,
          favorites: prevState.favorites.filter(item => item !== targetID)
        }
      } else {
        return {
          ...prevState,
          favorites: prevState.favorites.concat(targetID)
        }
      }
    })
  }

  handleInputName(event) {
    const { value } = event.currentTarget;
    this.setState(prevState => {
      return {
        ...prevState,
        inputName: value,
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="app__title">My pokemon collection</h1>
        <Filters data={pokemons} method={this.handleInputName} />
        <PokeList data={pokemons} method={this.handlerClickCard} inputName={this.state.inputName} favorites={this.state.favorites} />
      </React.Fragment>
    );
  }
}

export default App;
