import React from 'react';

class Filters extends React.Component {
    render() {
        return (
            <form>
                <label htmlFor="name">
                    Filter by name
            <input type="text" id="name" name="name" />
                </label>
            </form>
        )
    }
}

export default Filters;