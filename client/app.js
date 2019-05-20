import React from "react";
import Button from "./components/Button";
import axios from "axios"



class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.get('/')
      .then(function (results) {
        console.log(results.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }


  render() {
    return (
      <div>
        <h1>
          Welcome to FreeFitLounge Workout Generator
        </h1>
        <Button />
      </div>
    )
  }
}
export default App;
