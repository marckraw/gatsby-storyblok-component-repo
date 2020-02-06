import React from 'react'
import FocusPointImg from './focusPointImg'

const TestImage = props => {
  return (
    <>
      <h2>this is {props.blok.title}</h2>
      {props.blok.image && (
        <FocusPointImg
          focusPoint={props.blok.image}
          size={props.blok.image.imageSize}
          alt={props.blok.title}
        />
      )}
    </>
  )
}

export default TestImage
