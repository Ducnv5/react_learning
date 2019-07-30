import React from 'react'
import PropTypes from 'prop-types'

const DataElement = ({ isDisable, content, color }) => (
    
<p type="text" disabled={isDisable} value={content} style={{color:color}}>
  
</p>
)

DataElement.propTypes = {
  disable: PropTypes.bool,
  content: PropTypes.string,
  color: PropTypes.string
}
export default DataElement
