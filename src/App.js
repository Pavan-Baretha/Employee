import logo from './logo.svg';
import './App.css';
import ListEmployeeComponenet from "./componenets/ListEmployeeComponenet"
import HeaderComponent from './componenets/HeaderComponent';
import FooterComponent from './componenets/FooterComponent';
import CreateEmployeeComponenet from './componenets/CreateEmployeeComponenet';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
          <div className="container">
            <Switch>
              <Route path="/" exact component = {ListEmployeeComponenet}></Route>
              <Route path="/employees" component = {ListEmployeeComponenet}></Route>
              <Route path="/add-employee" component = {CreateEmployeeComponenet}></Route>
            </Switch>
          </div>
          <FooterComponent />
      </Router>
    </div>

  );
}

export default App;
