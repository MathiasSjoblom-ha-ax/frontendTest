import React from 'react'

const Item = ({text}) => {
  return (
    <div>
        <span className='itemContent' value={text}></span>
        <button className='deleteButton'>X</button>
    </div>
  )
}

export default Item