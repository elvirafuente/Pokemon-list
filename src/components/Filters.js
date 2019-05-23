import React from 'react';

class Filters extends React.Component {
    render() {
        return (
            <div>
                <label htmlFor="name">
                    Filter by name
                <input type="text" id="name" name="name" onChange={this.props.method}/>
                </label>
            </div>
        )
    }
}

export default Filters;