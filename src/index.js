import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { toast } from 'react-toastify';
import store from './store';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import AppSpinnerContainer from './components/AppSpinnerContainer';
import LandingPageContainer from './containers/LandingPageContainer';
import AboutContainer from './containers/AboutContainer';
import TestimonyContainer from './containers/TestimonyContainer';
import HiwContainer from './containers/HiwContainer';
import Item from './components/Item';
import '../node_modules/react-toastify/dist/ReactToastify.css';

toast.configure();
export class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount(){
    this.setState({ loading: false });
  }

  render () {
    return (
      <Fragment>
        <Navbar />
        <SearchBar />
        <LandingPageContainer history = { this.props.history }/>
        {this.state.loading && <AppSpinnerContainer />}
      </Fragment>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact render={ (props) => <App { ...props } />} />
        <Route path="/about" render={ () => <AboutContainer />} />
        <Route path="/testimonies" render = { () => <TestimonyContainer />} />
        <Route path="/howitworks" render = { () => <HiwContainer />} />
        <Route path="/item" render={ (props) => <Item { ...props } />} />
     </Switch>
    </Router>
  </Provider>,
   document.getElementById('App')
  );
