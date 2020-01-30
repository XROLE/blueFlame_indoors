import React, { Fragment } from 'react';
import {
  toastError
} from '../../utils/Toast/errorToast';
import {
  calYardsOfCurtain,
  calNoOfRings,
  calYardsOfInner,
  calLengthOfPole,
  calPairsOfCap,
  calSewingHours,
  calnormalTape,
  calHighLenghtTape,
} from '../../utils/Toast/calculators';
import './hiw.scss';

export default class Hiw extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      showResult: false,
      curtain: false,
      blind: false,
      windows:0,
      doors: 0,
      normalTape: false,
      highLenghtTape: false,
      send_copy:false,
    };
  }

  handleChange (e) {
    return this.setState({
      [e.target.name]: e.target.value.trim(),
    });
  }

  toggleEstimate(e){
    e.preventDefault();
    const { highLenghtTape, normalTape, windows, doors } = this.state;
    if(!windows && !doors ) {
      const errorMessage = 'Windows or Doors can not be empty';
     return toastError(errorMessage);
    }else if (!highLenghtTape && !normalTape) {
      const errorMessage = 'No style selected';
      return toastError(errorMessage);
    }else {
      return this.state.showResult ? this.setState({ showResult: false }) : this.setState({ showResult: true});
    }
  };

  setNormalTape (e) {
    return this.setState({
      normalTape: true,
      highLenghtTape: false,
    });
  }

  setHighlengthTape (e) {
    return this.setState({
      highLenghtTape: true,
      normalTape: false,
    });
  }

  handleCurtainChange (e) {
    return this.setState({
      curtain: true,
      blind: false,
    });
  }

  handleBlindChange (e) {
    return this.setState({
      curtain: false,
      blind: true
    });
  }

  handleSendCopy(e) {
    if(e.target.checked) {
       return this.setState({
         send_copy: true,
       });
      } else {
        return this.setState({
          send_copy: false,
        });
    }
  }

  render () {
    const {windows, doors, highLenghtTape, normalTape} = this.state;
    const numCurtain = calYardsOfCurtain(windows, doors, highLenghtTape, normalTape);
    const numRings = calNoOfRings(numCurtain);
    const yardsOfInner= calYardsOfInner(windows);
    const lengthOfpoles = calLengthOfPole(windows, doors).toFixed(2);
    const pairsOfCap = calPairsOfCap(windows, doors);
    const sewingHours = calSewingHours(windows, doors);
    const highLenght = calHighLenghtTape(windows, doors, highLenghtTape, normalTape);
    const normal = calnormalTape(windows, doors, highLenghtTape, normalTape);

   return(<div className="container hiw-container">
      <div className="hiw-container-title"><h2>HOW IT WORKS</h2></div>
      <div className="row mt-4">
        <div className="col-sm-6 col-md-6 col-lg-6">
          <div className="center-align">
            <h3>Select category, fill in details and hit the Estimate button</h3>
          </div>
          <form>
            {/* CATEGORY SECTION */}
            <div className="mt-3">
              <input type="radio" name="category" value="blind" onClick={ (e) => this.handleBlindChange()}/> Blind<br />
            </div>
            <div>
              <input  type="radio" name="category" value="curtain" onClick={ (e) => this.handleCurtainChange()} /> Curtain<br />
            </div>
              {/* QUANTITY SECTION */}
            {this.state.curtain &&
             <Fragment>
              <div>
                <label className="mr-3" name="windows" >Number of windows</label>
                <input type="number" name ="windows" onChange={(e) => this.handleChange(e)}/>
              </div>
              <div>
                <label className="mr-4" >Number of doors</label>
                <input type="number" name="doors" onChange={(e) => this.handleChange(e)}/>
              </div>

            {/* STYLE SECTION */}
            <h3 className="mt-2">What style will you like to sew</h3>
            <div>
            <input type="radio" name="style" value="normal-tape" onClick={(e) => this.setNormalTape(e)} /> Normal Tape<br />
            </div>
            <div>
              <input type="radio" name="style" value="highlenght-tape" onClick={(e) => this.setHighlengthTape(e)}/> High Lenght Tape<br />
            </div>
            <div>
              <input type="checkbox" name="send-copy" value="true" onChange={(e) => this.handleSendCopy(e)} /> Send me a copy<br />
            </div>
            <button className = "estimate-button" onClick={(e) => this.toggleEstimate(e)}> {!this.state.showResult && 'Show Estimate'} {this.state.showResult && 'Clear Estimate'} </button>
            </Fragment>
      }
          </form>
        </div>
          <div className="col-sm-6 col-md-6 col-lg-6 hiw-container-result">
          <h3>RESULT</h3>
          <div>
        {this.state.showResult &&
            <table className="result-table">
              <tr>
                <td>Yards of Curtain</td>
                <td> <input type="number" value={numCurtain}/></td>
              </tr>
              <tr>
                <td>Yards of inner</td>
                <td> <input type="number" value={yardsOfInner}/></td>
              </tr>
              <tr>
                <td>Yards of High lenght tape</td>
                <td> <input type="number" value={highLenght}/></td>
              </tr>
              <tr>
                <td>Yards of Normal tape</td>
                <td> <input type="number" value={normal}/></td>
              </tr>
              <tr>
                <td>Number of rings</td>
                <td> <input type="number" value={numRings}/></td>
              </tr>
              <tr>
                <td>Pairs of tieback</td>
                <td> <input type="number" value={windows}/></td>
              </tr>
              <tr>
                <td>Lenght of poles</td>
                <td> <input type="number" value={lengthOfpoles}/></td>
              </tr>
              <tr>
                <td>Pairs of cap</td>
                <td> <input type="number" value={pairsOfCap}/></td>
              </tr>
              <tr>
                <td>Estimated Sewing hours</td>
                <td> <input type="number" value={sewingHours} /></td>
              </tr>
          </table>
        }
          </div>
          <div className="button-container">
            {this.state.showResult && <button>Send Mail</button> }
          </div>
        </div>
     </div>
    </div>);
  }
}
