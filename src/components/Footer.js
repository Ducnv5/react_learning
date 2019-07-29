import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    {/* <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </FilterLink> */}
    <FilterLink filter={VisibilityFilters.AQUA}>
    AQUA
    </FilterLink>
    <FilterLink filter={VisibilityFilters.BLACK}>
    BLACK
    </FilterLink>
    <FilterLink filter={VisibilityFilters.BROWN}>
    BROWN
    </FilterLink>
    <FilterLink filter={VisibilityFilters.CORAL}>
    CORAL
    </FilterLink>
  </div>
)

export default Footer
