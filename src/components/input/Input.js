import React from 'react'

export default(props) => {
  const { placeholder, enabled = true } = props

  return (
    <input type='text' placeholder={placeholder} disabled={!enabled} />
  )
}
