import React, { Component } from "react";
import Customer from "./Components/customer";
import "./App.css";

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
    return (
      <div>
        {
          customers.map(arr => {
            return (
              <Customer
                key = {arr.id}
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
        })
      </div>
    );
  }
}

export default App;
