import React, { Component } from 'react';
import { TableRow } from '@mui/material';
import { TableCell } from '@mui/material';

class Customer extends Component {
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.img} alt="profile" /></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.birth}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.age}</TableCell>
            </TableRow>
        )

    }
}


export default Customer;