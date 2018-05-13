import React from 'react'

export default(props) => {
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
