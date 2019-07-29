
import React from 'react'
import PropTypes from 'prop-types'
import DataElement from './DataElement'

const TodoList = ({ row, isDisabled }) => (
  <div>
    <DataElement isDisable={isDisabled} content={row.field1}></DataElement>
    <DataElement isDisable={isDisabled} content={row.field2}></DataElement>
    <DataElement isDisable={isDisabled} content={row.field3}></DataElement>
  </div>
)

TodoList.propTypes = {
  row: PropTypes.shape({
    field1: PropTypes.string,
    field2: PropTypes.string,
    field3: PropTypes.string
  }).isRequired,
  isDisabled: PropTypes.bool.isRequired
}

export default TodoList
