import React from 'react';
import '../components/filters.css';

class Filters extends React.Component {
    render() {
        return (
            <div>
                <label htmlFor="name">
                    <h3 className="filter__title">Filter by name</h3>
                <input type="text" id="name" name="name" onChange={this.props.method}/>
                </label>
            </div>
        )
    }
}

export default Filters;