import React from 'react'

const Contact = () => (
  <div id="contact" className="contact">
    <div className="container">
      <div className="row">
        <div className="col-md-4 hide-sm-down"></div>
        <div className="col-md-4 col-sm-12">
          <h5>Join out mailing list or ask a question...</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 hide-sm-down"></div>
        <form className="serializableForm col-md-4 col-sm-12" method="post" action="https://remailer.savvysoftworks.com">
          <input type="hidden" name="public_token" value="" />
          <input type="hidden" name="after_success" value=""/>
          <input type="hidden" name="after_failure" value=""/>

          <div className="row">
            <div className="col-sm-12">
              <div className="input-field">
                <input id="name" placeholder="Name" name="name" type="text" className="validate" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <div className="input-field">
                <input id="email" placeholder="Email" name="email" type="email" className="validate" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <div className="input-field">
                <input id="comment" placeholder="Comment" name="comment" type="text" className="" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <button id="submit" className="float-right btn submit submit-btn" type="submit">SEND</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
)

export default Contact
