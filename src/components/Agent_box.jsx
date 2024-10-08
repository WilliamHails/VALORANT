import React from 'react'

const Agent_box = ({ image, name }) => {
  return (
    <>
      <div class="flex border-2 border-solid h-36 w-80">
          <img src={image} alt={name} class=""/>
          <div >{name}</div>
      </div> 
    </>
  )
}

export default Agent_box
