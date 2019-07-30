import { connect } from 'react-redux'
import DataRow from '../components/data_field/DataRow'

const COLORS = ['BLACK', 'AQUA', 'CORAL', 'BROWN'];

const getColor = (todos) => {
    console.log("VisibleDataRow getColor", todos);
    if(todos.length > 1) {
        console.log("VisibleDataRow getColor", todos);
        return COLORS[todos[0].color_id];
    } else {
        return COLORS[1];
    }
}

const mapStateToProps = state => ({
    color: getColor(state.todos),
    row: {field1: '123', field2: '5456', field3: 'sdfsdf'},
    isDisabled: false
})

export default connect(
  mapStateToProps
)(DataRow)
