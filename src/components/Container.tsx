import React from 'react'

export default function Container({children}:{children:React.ReactNode}) {
  return (
    <div
      style={containerStyle}
    className='container'>
      {children}
    </div>
  )
}

const containerStyle={
  height: window.innerHeight
}