import React from 'react';
import Pokemon from './Pokemon';
import '../components/pokelist.css';

class PokeList extends React.Component {
    render() {
        const pokemons = this.props.data
        return (
            <ul className="Pokemon__list">
                {pokemons.map(item =>
                    <li key={item.id} className="Pokemon__card">
                        <Pokemon data={item} key={item.id} />
                    </li>
                )}
            </ul>
        );
    }
}

export default PokeList;