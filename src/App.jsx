import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Aboutus from "./Components/Pages/About";
import Home from "./Components/Pages/Home";
import dummyText from "./Components/Pages/DummyText";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Section
          title="Home"
          subtitle={Home}
          dark={true}
          id="Home"
        />
        <Section
          title="About Us"
          subtitle={Aboutus}
          dark={false}
          id="AboutUs"
        />
        <Section
          title="Services"
          subtitle={dummyText}
          dark={true}
          id="Services"
        />
        <Section
          title="Pricing"
          subtitle={dummyText}
          dark={false}
          id="Pricing"
        />
        <Section
          title="Register"
          subtitle={dummyText}
          dark={true}
          id="Register"
        />
        <Section
          title="Contact"
          subtitle={dummyText}
          dark={false}
          id="Contact"
        />
      </div>
    );
  }
}

export default App;
