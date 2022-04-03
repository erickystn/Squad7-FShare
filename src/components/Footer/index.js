import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="main-footer">
          <strong>Copyright © 2022 <a href="https://github.com/erickystn/TechnicalShare">Technical Share - Squad 7</a>.</strong>
          <div className="float-right d-none d-sm-inline-block">
            <b>Version</b> 1.0.0
          </div>
        </footer>

      </div>
    )
  }
}
