import React from 'react'

import savvy from '../../images/SavvySoftWorks_Logo.svg'

const Footer = () => (
    <div id="footer" className="footer container">
      <div className="row">
        <div className="col-sm-12">
          <p>Sponsered by:</p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <img className="footer--savvy-logo img-fluid center-block" src={savvy} alt="SavvySoftWorks" />
        </div>
      </div>
    </div>
)

export default Footer
