import React from 'react'
import PropTypes from 'prop-types';

const Child = () => {
  
  return (
    <div>{`name + '  ' +  age`}</div>
  )
}

Child.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
  };
  

export default Child