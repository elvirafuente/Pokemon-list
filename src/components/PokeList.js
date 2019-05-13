import React from 'react';
import Pokemon from './Pokemon';

class PokeList extends React.Component {
    render(){
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