import React from 'react'

import logo from '../../images/round_town.svg'

const Bang = () => (
  <div className="bang jumbotron">
    <div className="row">
      <div className="col-sm-12 col-md-6">
        <img className="img-fluid center-block" src={logo} alt="ROUND TOWN" />
      </div>
      <div className="col-sm-12 col-md-6">
        <div className="bang--headline">
          <div className="bang--headline-inner">
            <h2>Welcome to Round Town.</h2>
            <h4>An interest driven event calendar for the community.</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Bang
