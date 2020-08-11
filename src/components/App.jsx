import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./Contact";
import {
  forgetMeNot,
  noteTaker,
  seeFood,
  toDoList,
  weatherApp,
  workDayCalendar,
} from "../images/";

class App extends Component {
  state = {
    allProjects: [
      {
        name: "Forget Me Not",
        src: "https://secret-journey-60945.herokuapp.com/",
        gH: "https://github.com/rrsalerno21/project-2",
        img: forgetMeNot,
        desc:
          "Securly keep track of your to-do lists while viewing current COVID data by state.",
      },
      {
        name: "seeFood",
        src: "https://goodbyetonto.github.io/first-project/",
        gH: "https://github.com/goodbyetonto/first-project",
        img: seeFood,
        desc:
          "Out of recipe ideas? Type in the ingredients from your fridge to view some recipes.",
      },
      {
        name: "To-Do List",
        src: "https://safe-crag-88630.herokuapp.com/",
        gH: "https://github.com/rrsalerno21/to-do-list-app",
        img: toDoList,
        desc:
          "Got a lot on your mind? Add your To-Do list with ease with this full stack web app.",
      },
      {
        name: "Note Taker App",
        src: "https://desolate-coast-15731.herokuapp.com/",
        gH: "https://github.com/rrsalerno21/note-taker-app",
        img: noteTaker,
        desc:
          "Need to jot down a quick idea? Use the note taker app to store your ideas locally to your browser.",
      },
      {
        name: "Weather App",
        src: "https://rrsalerno21.github.io/weather-app/",
        gH: "https://github.com/rrsalerno21/weather-app",
        img: weatherApp,
        desc:
          "Need a quick 5 day forecast? Check out the weather with a quick search and feel prepared for the day.",
      },
      {
        name: "Workday Calendar App",
        src: "https://rrsalerno21.github.io/calendar-app/",
        gH: "https://github.com/rrsalerno21/calendar-app",
        img: workDayCalendar,
        desc:
          "Schedule out your day quickly with a workday calendar app that'll save locally to your browser",
      },
    ],
  };
  render() {
    const hiLightProjs = this.state.allProjects.slice(0, 3);
    return (
      <Router>
        <header>
          <NavBar />
        </header>
        <main>
          <Route
            exact
            path="/"
            render={() => <Home projects={hiLightProjs} />}
          />
          <Route
            exact
            path="/portfolio"
            render={() => <Portfolio projects={this.state.allProjects} />}
          />
        </main>
        <Contact />
      </Router>
    );
  }
}

export default App;
