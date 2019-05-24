import React from 'react';
import Pokemon from './Pokemon';
import '../components/pokelist.css';

class PokeList extends React.Component {
    render() {
        const pokemons = this.props.data;
        const { inputName } = this.props;

            const filteredPokemons = pokemons.filter(item => item.name.includes(inputName))
            console.log(filteredPokemons);
            
            return (
                <ul className="Pokemon__list">
                   {filteredPokemons.map(item =>
                        <li key={item.id}>
                            <Pokemon data={item} key={`${item.id}`} method={this.props.method} favorites={this.props.favorites}/>
                        </li>
                    )}
                </ul>  
            )
       
        
    }
}

export default PokeList;