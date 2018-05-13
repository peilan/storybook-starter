import React from 'react'

export default(props) => {
  const { value, enabled = true } = props

  const styles = {
    border: '1px solid yellow'
  }

  return (
    <button style={styles} disabled={!enabled}>{value}</button>
  )
}
