import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import store from './store';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Auth from './components/Authentication';
import AppSpinnerContainer from './components/AppSpinnerContainer';
import LandingPageContainer from './containers/LandingPageContainer';
export class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidMount(){
    this.setState({ loading: false })
  }

  render () {
    return (
      <Fragment>
        <Navbar />
        <SearchBar />
        <Auth />
        <LandingPageContainer />
        {this.state.loading && <AppSpinnerContainer />}
      </Fragment>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
     <Route path="/" exact component={App} />
     <Route path="/about" component={Navbar} />
     <Route path="/testimonies" component={Navbar} />
     <Route path="/howitworks" component={Navbar} />
    </Router>
  </Provider>,
   document.getElementById('App')
  );
