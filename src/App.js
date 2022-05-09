import React, { Component } from "react";
import Customer from "./Components/customer";
import "./App.css";
import { Table } from "@mui/material";
import { TableHead } from "@mui/material";
import { TableBody } from "@mui/material";
import { TableRow } from "@mui/material";
import { TableCell } from "@mui/material";
import { withStyles } from "@mui/material";
import { Paper } from "@mui/material";

const styles = (theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const customers = [
  {
    'id': 1,
    'img': 'http://placeimg.com/64/64/animals',
    'name': "Kim",
    'birth': '900101',
    'gender': "man",
    'age': '25'
  },
  {
    'id': 2,
    'img': 'http://placeimg.com/64/64/any',
    'name': "Lee",
    'birth': '950505',
    'gender': "man",
    'age': '25'
  },
  {
    'id': 3,
    'img': 'http://placeimg.com/64/64/nature',
    'name': "Park",
    'birth': '920707',
    'gender': "man",
    'age': '25'
  }
]

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>나이</TableCell>
          </TableHead>
          <TableBody>
            {
              customers.map(arr => {
                return (
                  <Customer
                    key={arr.id}
                    id={arr.id}
                    img={arr.img}
                    name={arr.name}
                    birth={arr.birth}
                    gender={arr.gender}
                    age={arr.age}
                  />
                )
              }
              )
            }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
