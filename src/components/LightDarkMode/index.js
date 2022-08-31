import {Component} from 'react'
import './index.css'

export default class LightDarkMode extends Component {
  state = {
    currentMode: 'Dark Mode',
  }

  onRender() {
    const {currentMode} = this.state

    return (
      <div className="light-dark-mode-bg-container">
        <div className="content-container">
          <h1 className="content-header">Click To Change Mode</h1>
          <button type="button" className="mode-toggle-button">
            {currentMode === 'Dark Mode' ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    )
  }
}
