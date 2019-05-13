import React from 'react';

class PokeList extends React.Component {
    render(){
        return (
            <ul>
            {pokemons.map(item => 
              <li key={item.id}>
                <img src= { item.url } alt={ item.name }/>
                <p>{ item.name } </p>
                <div>
                  { item.types.map ((typeTag, index) =>
                    <span key= {`p${index}`}>{ typeTag }</span>
                  )}
                </div>
              </li>)}
          </ul>
        );
    }
}

export default PokeList;