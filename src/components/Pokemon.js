import React from 'react';

class Pokemon extends React.Component {
    render(){
        const item = this.props.data

        
        return (
            <li key={item.id}>
                  <img src= { item.url } alt={ item.name }/>
                  <p>{ item.name } </p>
                  <div>
                    { item.types.map ((typeTag, index) =>
                      <span key= {`p${index}`}>{ typeTag }</span>
                    )}
                  </div>
            </li>
        )
    }
}

export default Pokemon