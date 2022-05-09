import React, {Component} from 'react';

class Customer extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <p>{this.props.birth}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.age}</p>
            </div>
        )

    }
}

export default Customer;