import {Component} from 'react'
import './index.css'

export default class LightDarkMode extends Component {
  state = {
    currentMode: 'Dark Mode',
  }

  onModeToggle = () => {
    let {currentMode} = this.state
    if (currentMode === 'Dark Mode') {
      currentMode = 'Light Mode'
    } else {
      currentMode = 'Dark Mode'
    }

    this.setState({currentMode})
  }

  render() {
    const {currentMode} = this.state

    return (
      <div className="light-dark-mode-bg-container">
        <div
          className={
            currentMode === 'Dark Mode'
              ? 'content-container'
              : 'content-container light-mode-content-container'
          }
        >
          <h1
            className={
              currentMode === 'Dark Mode'
                ? 'content-header'
                : 'content-header light-mode-content-header'
            }
          >
            Click To Change Mode
          </h1>
          <button
            type="button"
            className="mode-toggle-button"
            onClick={this.onModeToggle}
          >
            {currentMode === 'Dark Mode' ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    )
  }
}
