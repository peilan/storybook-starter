import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
  const { value, enabled = true, onClick } = props

  const styles = {
    border: '1px solid yellow'
  }

  const handleClick = e => {
    e.preventDefault()
    onClick && onClick()
  }

  return (
    <button style={styles} onClick={handleClick} disabled={!enabled}>{value}</button>
  )
}

Button.prototype = {
  value: PropTypes.string,
  enabled: PropTypes.bool,
  onClick: PropTypes.func
}

export default Button
