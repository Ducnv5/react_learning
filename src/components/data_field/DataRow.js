
import React from 'react'
import PropTypes from 'prop-types'
import DataElement from './DataElement'

const DataRow = ({ row, isDisabled , color}) => (
  <div>
    <DataElement isDisable={isDisabled} content={row.field1} color={color}></DataElement>
    <DataElement isDisable={isDisabled} content={row.field2} color={color}></DataElement>
    <DataElement isDisable={isDisabled} content={row.field3} color={color}></DataElement>
  </div>
)

DataRow.propTypes = {
  row: PropTypes.shape({
    field1: PropTypes.string,
    field2: PropTypes.string,
    field3: PropTypes.string
  }),
  isDisabled: PropTypes.bool,
  color: PropTypes.string
}

export default DataRow
