import React from 'react';
import PropTypes from 'prop-types';
import '../components/pokemon.css';

class Pokemon extends React.Component {
  render() {
    const item = this.props.data
    const {favorites} =this.props;
    console.log(item);
    
    return (
      <div className={`${favorites.includes(item.id) ? `pokemon__card--selected` : ``} Pokemon__card`} data-id={item.id}>
        <img src={item.url} alt={item.name} className="card__img" />
        <div  className="card__title">
          <h2>{item.name} </h2>
          <i className={`${favorites.includes(item.id) ? `fas` : `far`} fa-star favorite__pokemon`} id={`${item.id}`} onClick={this.props.method}></i>
        </div>
        <ul className="card__info">
          {item.types.map((typeTag, index) =>
            <li key={`p${index}`}>{typeTag}</li>
          )}
        </ul>
      </div>
    )
  }
}

// Pokemon.propTypes = {
//   data: PropTypes.shape({
//     id: PropTypes.number,
//     name: PropTypes.string,
//     types: PropTypes.array
//   }).isRequired,
// }


export default Pokemon