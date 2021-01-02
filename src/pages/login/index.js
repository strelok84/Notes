import React from "react"
import logged from "../../App"
import { Route, Switch, Redirect } from 'react-router-dom';

class Login extends React.Component {
  Handleclick(e) {
    logged=!logged
    e.preventDefault();
    console.log('По ссылке кликнули.');
  }

  render() {
    if(logged===true){
      return <Redirect to="/list" />;
    }
    return (
      <div className="App">
        <header className="App-header">
          <a href="./list" onClick={this.Handleclick}><h1>Логин</h1></a>
        </header>
        <body>

        </body>
        <footer>

        </footer>
      </div>
    )
  }
}

export default Login;
