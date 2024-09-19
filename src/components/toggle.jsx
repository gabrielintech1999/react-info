import React from 'react'

export default function toggle({ onToggle}) {

  




  return (
    <div>
      <input type="checkbox" name="toggle" id="toggle" className='toggle' onClick={onToggle} />
    </div>
  )
}
