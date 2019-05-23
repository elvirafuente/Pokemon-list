import React from 'react';
import Pokemon from './Pokemon';
import '../components/pokelist.css';

class PokeList extends React.Component {
    render() {
        const pokemons = this.props.data;
        console.log(pokemons)
        return (
            <ul className="Pokemon__list">
                {pokemons.map(item =>
                    <li key={item.id}>
                        <Pokemon data={item} key={`${item.id}`} method={this.props.method} favorites={this.props.favorites}/>
                    </li>
                )}
            </ul>
        );
    }
}

export default PokeList;