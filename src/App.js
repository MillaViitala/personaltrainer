import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Customerlist from './components/Customerlist';
import Trainings from './components/Trainings';
import Navigator from './components/Navigator';
import Calendar from './components/Calendar';


function App() {

  return (
    <div className="App">

          <BrowserRouter>
          <Navigator />
            <Switch>
              <Route exact path="/" component={Customerlist}></Route>
              <Route path="/Customerlist" component={Customerlist}></Route>
              <Route path="/Trainings" component={Trainings}></Route>
              <Route path="/WorkoutCalendar" component={Calendar} />
            </Switch>
            </BrowserRouter>
      
      
    </div>
  );
}

export default App;
