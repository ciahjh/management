import React from "react";
import Customer from "./Components/customer";
import "./App.css";

const data = {
  name: "Hwang",
  birth: 850525,
  gender: "man",
  age: 25
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Customer
          name = {data.name}
          birth = {data.birth}
          gender = {data.gender}
          age = {data.age}
        />
      </div>
    );
  }
}

export default App;
