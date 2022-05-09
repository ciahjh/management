import React, {Component} from 'react';

class Customer extends Component {
    render() {
        return (
            <div>
                <CustomerPrifile id={this.props.id} img={this.props.img} name={this.props.name} />
                <CustomerInfo birth={this.props.birth} gender={this.props.gender} age={this.props.age} />
            </div>
        )

    }
}

class CustomerPrifile extends Component{
    render(){
        return(
            <div>
                <img src={this.props.img} alt="profile"/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class CustomerInfo extends Component{
    render(){
        return(
            <div>
                <p>{this.props.birth}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.age}</p>
            </div>
        )
    }
}
export default Customer;