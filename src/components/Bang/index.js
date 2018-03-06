import React from 'react'

import logo from '../../images/around_town.svg'

const Bang = () => (
  <div className="bang jumbotron container">
    <div className="row">
      <div className="col-sm-12 col-md-4">
        <img className="img-fluid" src={logo} alt="AROUND TOWN" />
      </div>
      <div className="col-sm-12 col-md-8">
        <div className="bang--headline">
          <div className="bang--headline-inner">
            <h2>Welcome to Around Town.</h2>
            <h4>An interest driven event calendar for the community.</h4>
            <h5>🚧 Excuse the mess, we are currently under construction 🚧</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Bang
