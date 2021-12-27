import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Authorization from './components/Authorization ';
import ProjectList from './components/ProjectList';
import store from './redux/store';

import './App.css';

axios.defaults.baseURL = 'https://gitlab.com/api/v4';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/project-list">
              <ProjectList />
            </Route>
            <Route path="/">
              <Authorization />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
