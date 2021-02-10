import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  ProjectPage,
  InfoPage,
  AlarmTalkPage,
  ReservationPage,
  OptionPage,
} from "../pages";

export const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ProjectPage} />
        <Route path="/info" component={InfoPage} />
        <Route path="/alarmtalk" component={AlarmTalkPage} />
        <Route path="/reservation" component={ReservationPage} />
        <Route path="/option" component={OptionPage} />
      </Switch>
    </Router>
  );
};
