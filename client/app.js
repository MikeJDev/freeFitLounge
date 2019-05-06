import React from "react";
import Button from "./components/Button";

class App extends React.Component {
  constructor(props) {
    super(props);
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
