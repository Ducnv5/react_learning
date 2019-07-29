import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, color_id, text }) => (
  <li
    onClick={onClick}
    style={{
      color: COLORS[color_id]
    }}
  >
    {text}: {COLORS[color_id]}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  color_id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
}
const COLORS = ['BLACK', 'AQUA', 'CORAL', 'BROWN'];
export default Todo
