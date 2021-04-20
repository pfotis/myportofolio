import React, { Component } from 'react';
import "./style.css";


class Footer extends Component {
  render() {
    return (
      <footer>
            <div className="row social" style={{ margin: 0 }}>
              <div className="col-lg-12">
                <ul>
                  <li><a href="mailto:pfotis@gmail.com" target="_blank"><i className="fa fa-envelope fa-fw fa-2x" /></a></li>
                  <li><a href="https://www.linkedin.com/in/peter-fotis-6a740a11a/" target="_blank"><i className="fa fa-linkedin fa-fw fa-2x" /></a></li>
                  <li><a href="https://github.com/pfotis" target="_blank"><i className="fa fa-github fa-fw fa-2x" /></a></li>
                  <li><a href="" target="_blank"><i className="fa fa-download fa-fw fa-2x" /></a></li>
                </ul>
                <br />
              </div>
            </div>
            <div className="row" id="copyright" style={{ margin: 0 }}>
              <div className="col-lg-12">
                <p className="small">© 2021 Peter Fotis</p>
              </div>
            </div>
      </footer>
        );
  }
}

export default Footer;
