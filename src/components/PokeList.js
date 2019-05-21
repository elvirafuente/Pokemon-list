import React from 'react';
import Pokemon from './Pokemon';
import '../components/pokelist.css';

class PokeList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            favorites: [],
        };
        this.handlerClickCard = this.handlerClickCard.bind(this);
        // this.handlerFavorites = this.handlerFavorites.bind(this);
    }

    handlerClickCard(event){
        const targetID = parseInt(event.currentTarget.id);
        
        this.setState(prevState => {
            if(this.state.favorites.includes(targetID)){
                return {favorites: prevState.favorites.filter(item => item !== targetID)}
            }else {
                return {favorites: prevState.favorites.concat(targetID)}
            }
            
        })

    }

 

    render() {
        const pokemons = this.props.data
        return (
            <ul className="Pokemon__list">
                {pokemons.map(item =>
                    <li key={item.id}>
                        <Pokemon data={item} key={`${item.id}`} method={this.handlerClickCard} favorites={this.state.favorites}/>
                    </li>
                )}
            </ul>
        );
    }
}

export default PokeList;