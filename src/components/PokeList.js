import React from 'react';
import Pokemon from './Pokemon';
import '../App.css';

class PokeList extends React.Component {
    render(){
        const pokemons = this.props.data
        return (
            <ul className ="Pokemon__list">
            {pokemons.map(item => 
            < Pokemon data={item} key={item.id}/>
            )}  
            </ul>
        );
    }
}

export default PokeList;