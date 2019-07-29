import React from 'react'
import PropTypes from 'prop-types'

const DataElement = ({ isDisable, content }) => (
<input type="text" disabled={isDisable} value={content}>
  
</input>
)

DataElement.propTypes = {
  disable: PropTypes.bool.isRequired,
  content: PropTypes.string
}
export default DataElement
