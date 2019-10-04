import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { toast } from 'react-toastify';
import store from './store';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Auth from './components/Authentication';
import AppSpinnerContainer from './components/AppSpinnerContainer';
import LandingPageContainer from './containers/LandingPageContainer';
import '../node_modules/react-toastify/dist/ReactToastify.css';

toast.configure();
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
    <App />
  </Provider>,
   document.getElementById('App')
  );
