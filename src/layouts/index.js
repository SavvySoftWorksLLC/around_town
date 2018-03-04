import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import Header from '../components/Header'
import Footer from '../components/Footer'
import './index.css'
import './round_town.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="ROUND TOWN"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div>
      {children()}
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
