import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Auth from './components/Authentication';
import Slides from './components/Slides';
import AppSpinnerContainer from './components/AppSpinnerContainer';
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
        <Slides />
        {this.state.loading && <AppSpinnerContainer />}
      </Fragment>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
   document.getElementById('App')
  );
