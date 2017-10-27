import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import { Link } from 'react-router'
import styles from './Settings.css'

const sourceCodeURL = 'https://github.com/contentful/discovery-app-react'

class SettingsForm extends React.Component {

  constructor () {
    super()
    this.state = {detailsDisplay: {display: 'none'}}
  }

  toggleDetails (e) {
    e.preventDefault()
    const {detailsDisplay} = this.state
    const newDetailsDisplay = {display: detailsDisplay.display === 'none' ? 'block' : 'none'}
    this.setState({detailsDisplay: newDetailsDisplay})
  }
  render () {
    return (
      <div styleName='settings-container'>
        <form onSubmit={this.props.loadSpace} styleName='settings-form'>
          <div styleName='form-container'>
            <p styleName='error' style={this.props.errorDisplay}>
              {this.props.validationError}
            </p>
            <div>
              <h1>Enter the LifeView Access Informion</h1>
              
            </div>
            <div>
              <label htmlFor='space' styleName='label-title'>
                Space ID
              </label>
              <input
                styleName='spaceInput'
                id='space'
                type='text'
                defaultValue={this.props.space}
                onChange={this.props.handleChange} />
            </div>
            <div>
              <label htmlFor='deliveryAccessToken' styleName='label-title'>
                Delivery API key
              </label>
              <input
                id='deliveryAccessToken'
                type='text'
                defaultValue={this.props.deliveryAccessToken}
                onChange={this.props.handleChange} />
            </div>
            <button type='submit'>
              Load LifeView Content!
            </button>
          </div>
        </form>

      </div>
    )
  }
}

SettingsForm.propTypes = {
  space: PropTypes.string.isRequired,
  selectedAccessToken: PropTypes.string.isRequired,
  deliveryAccessToken: PropTypes.string.isRequired,
  previewAccessToken: PropTypes.string.isRequired,
  selectedApi: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  loadSpace: PropTypes.func.isRequired,
  validationError: PropTypes.string
}

export default CSSModules(SettingsForm, styles)
