import { Component } from "react";
import './App.css';
import 'remixicon/fonts/remixicon.css'
import SignupForm from "./Components/SignupForm";
// import TodoApp from "./Components/TodoApp/";
// import PalettColor from "./Components/PaletteColor";
// import Counter from "./Components/Counter";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter /> */}
        {/* <PalettColor /> */}
        {/* <TodoApp /> */}
        <SignupForm />
      </div>
    );
  }
}

export default App;
