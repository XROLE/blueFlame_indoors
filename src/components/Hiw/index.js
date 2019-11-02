import React from 'react';
import './hiw.scss';

export default function Hiw (){
  return(<div className="container hiw-container">
    <div className="hiw-container-title"><h2>HOW IT WORKS</h2></div>
    <div className="row mt-4">
      <div className="col-lg-6">
        <h3>Select category, fill in details and hit the Estimate button</h3>
        <form>
          {/* CATEGORY SECTION */}
          <div className="mt-3">
            <input type="radio" name="category" value="blind" /> Blind<br />
          </div>
          <div>
            <input  type="radio" name="category" value="curtain" /> Curtain<br />
          </div>
            {/* QUANTITY SECTION */}
          <div>
            <label className="mr-3">Number of windows</label>
            <input type="number" />
          </div>
          <div>
            <label className="mr-4">Number of doors</label>
            <input type="number" />
          </div>
          {/* STYLE SECTION */}
          <h3 className="mt-2">What style will you like to sew</h3>
          <div>
          <input type="radio" name="style" value="normal-tape" /> Normal Tape<br />
          </div>
          <div>
            <input type="radio" name="style" value="highlenght-tape" /> High Lnght Tape<br />
          </div>
          <div>
            <input type="checkbox" name="send-copy" value="true" /> Send me a copy<br />
          </div>
          <button> Show Estimate </button>
        </form>
      </div>
      <div className="col-lg-6 mt-2 hiw-container-result">
        <h3>RESULT</h3>
        <div>
          <table>
            <tr>
              <td>Yards of Curtain</td>
              <td> <input type="number" value="25"/></td>
            </tr>
            <tr>
              <td>Yards of inner</td>
              <td> <input type="number" value="25"/></td>
            </tr>
            <tr>
              <td>Yards of High lenght tape</td>
              <td> <input type="number" value="18"/></td>
            </tr>
            <tr>
              <td>Yards of Normal tape</td>
              <td> <input type="number" value="16"/></td>
            </tr>
            <tr>
              <td>Number of rings</td>
              <td> <input type="number" value="245"/></td>
            </tr>
            <tr>
              <td>Pairs of tieback</td>
              <td> <input type="number" value="4"/></td>
            </tr>
            <tr>
              <td>Lenght of poles</td>
              <td> <input type="number" value="1.5"/></td>
            </tr>
            <tr>
              <td>Pairs of cap</td>
              <td> <input type="number" value="4"/></td>
            </tr>
            <tr>
              <td>Estimated Sewing hours</td>
              <td> <input type="number" value="16"/></td>
            </tr>
        </table>
        </div>
        <button>Send Mail</button>
      </div>
    </div>
  </div>)
}
