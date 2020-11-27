import React from 'react'

export default function Column (
  {width, children, alignItems}:
  {width:string, children:React.ReactNode, alignItems:string}
  ) {
  return (
    <div
      className='column'
      style={{
        width,
        alignItems
      }}
      >
        {children}

    </div>
  )
}