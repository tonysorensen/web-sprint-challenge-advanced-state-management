import React, { Component } from "react";
import axios from "axios";
import AddForm from "./components/AddForm";
import SmurfList from "./components/SmurfList";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { fetchSmurfs } from "./actions";


class App extends Component {

  componentDidMount(){
    fetchSmurfs();
    // console.log('fetch',)
    // axios.get("http://localhost:3333/smurfs")
    // .then((res)=>console.log(res.data))
    // .catch((err)=>console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList />
          <AddForm />
        </main>
      </div>
    );
  }
}

export default App;

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.

//testing push and codegrade stuff
////////
