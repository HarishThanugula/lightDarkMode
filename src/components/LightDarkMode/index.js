import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  stake = {isDark: 'Dark Mode'}

  lightModeToDark = () => {
    const {isDark} = this.stake
    this.setState({isDark})
  }

  render() {
    const {isDark} = this.stake
    const modeClassName = isDark ? 'Dark Mode' : 'Light Mode'
    const buttonText = isDark ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="bg-container">
        <div className={`container ${modeClassName}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" className="btn" onClick={this.lightModeToDark}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
