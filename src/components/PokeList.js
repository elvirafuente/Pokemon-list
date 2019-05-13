import React from 'react';
import Pokemon from './Pokemon';


class PokeList extends React.Component {
    render(){
        const pokemons = this.props.data
        console.log(pokemons)
        return (
            <ul>
            {pokemons.map(item => 
            < Pokemon data={item} key={item.id}/>
            )}  
            </ul>
        );
    }
}

export default PokeList;