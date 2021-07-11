import React from 'react'
import PropTypes from 'prop-types'


const Rating = ({ value, text, }) => {
  return (
    <div className='rating'>
<span>
    {[...Array(5)].map((_, i) => {
        const cls = value >= i + 1
            ? 'fas fa-star'                 //full star
            : value >= i + .5
                ? 'fas fa-star-half-alt'    //half star
                : 'far fa-star'             //empty star
        return <i key={'Star' + i} style={{ color:'green' }} className={cls}> </i>
    })}
    <span> {text}</span>
</span>
    </div>
  )
}

Rating.propTypes = {
  value: PropTypes.number,
  text: PropTypes.string.isRequired,
  color:  PropTypes.string
}

export default Rating