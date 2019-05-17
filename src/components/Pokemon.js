import React from 'react';
import PropTypes from 'prop-types';
import '../components/pokemon.css';

class Pokemon extends React.Component {
  render() {
    const item = this.props.data
    console.log(item)

    return (
      <React.Fragment>
        <img src={item.url} alt={item.name} className="card__img" />
        <h2 className="card__title">{item.name} </h2>
        <ul className="card__info">
          {item.types.map((typeTag, index) =>
            <li key={`p${index}`}>{typeTag}</li>
          )}
        </ul>
      </React.Fragment>
    )
  }
}

Pokemon.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    types: PropTypes.array
  }).isRequired,
}


export default Pokemon