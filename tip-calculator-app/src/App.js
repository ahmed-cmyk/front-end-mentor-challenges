import React from 'react'
import Footer from './components/Footer';

const App = () => {
  return(
    <div className="card">
      <div className="cardContents">
        <div className="section bill">
          <div className="bill_header heading">Bill</div>
          <span className="bill_currencyInput form_input">
            $<input className="form_input" type="text" />
          </span>
        </div>

        <div className="section tip">
          <div className="tip_header heading">Select Tip %</div>
          <div className="tip_buttons">
            <button className="btn">5%</button>  
            <button className="btn">10%</button>  
            <button className="btn">15%</button>  
            <button className="btn">25%</button>  
            <button className="btn">50%</button>  
            <input className="form_input btn" type="text" placeholder="Custom" />
          </div>
        </div>

        <div className="section people">
          <div className="people_header heading">Number of People</div>
          <span className="people_peopleInput">
            $<input className="form_input" type="text" />
          </span>
        </div>

        <div className="section resultCard">
          Tip Amount
          / person

          Total
          / person

          <button className="btn">Reset</button>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App;
