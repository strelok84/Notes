import React from 'react';
import './App.css';




import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/login';
import List from "./pages/list"
import newNote from "./pages/newNote"

let logged=false

class App extends React.Component {
  render() {
      return (
          <div className='app'>
              

              <main className='main'>
                  <Switch>
                      <Route path='/list' component={List} />
                      <Route path='/newNote' component={newNote} />
                      <Route exact path='/' component={Login} />
                      <Redirect to='/' />
                  </Switch>
              </main>
          </div>
      );
  }
}

export default App;
