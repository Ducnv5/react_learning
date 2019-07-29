import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active, children, onClick1 }) => (
    <button
       onClick={onClick1}
       disabled={active}
       style={{
           marginLeft: '4px',
       }}
    >
      {children} children
    </button>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick1: PropTypes.func.isRequired
}

export default Link
