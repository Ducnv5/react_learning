import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import DataRow from './data_field/DataRow'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <DataRow isDisabled={false} row={{field1: '123', field2: '5456', field3: 'sdfsdf'}}/>
    <Footer />
  </div>
)

export default App
