import React from 'react';

import { Table } from 'semantic-ui-react'

const tableWrapper = (props) => ({children}) => (
  <Table {...props}>
    {children}
  </Table>
)
tableWrapper.propTypes = {
  children: React.PropTypes.any
};

const tableHeaderWrapper = (props) => ({children}) => (
  <Table.Header {...props}>
    {children}
  </Table.Header>
)
tableHeaderWrapper.propTypes = {
  children: React.PropTypes.any
};

const tableHeaderCellWrapper = (props) => ({children}) => (
  <Table.HeaderCell {...props}>
    {children}
  </Table.HeaderCell>
)
tableHeaderCellWrapper.propTypes = {
  children: React.PropTypes.any
};

const tableBodyWrapper = (props) => ({children}) => (
  <Table.Body {...props}>
    {children}
  </Table.Body>
)
tableBodyWrapper.propTypes = {
  children: React.PropTypes.any
};

const tableRowWrapper = (props) => ({children}) => (
  <Table.Row {...props}>
    {children}
  </Table.Row>
)
tableRowWrapper.propTypes = {
  children: React.PropTypes.any
};

const tableCellWrapper = (props) => ({children}) => (
  <Table.Cell {...props}>
    {children}
  </Table.Cell>
)
tableCellWrapper.propTypes = {
  children: React.PropTypes.any
};

const semanticTableComponents = (props = {}) => {
  return ({
    table: tableWrapper(props.tableProps),
    header: {
      wrapper: tableHeaderWrapper(props.tableHeader),
      row: tableRowWrapper(props.tableHeaderRow),
      cell: tableHeaderCellWrapper(props.tableHeaderCell),
    },
    body: {
      wrapper: tableBodyWrapper(props.tableBody),
      row: tableRowWrapper(props.tableBodyRow),
      cell: tableCellWrapper(props.tableBodyCell),
    },
  })
}

export default semanticTableComponents;
