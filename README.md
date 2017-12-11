# reactabular-semantic-ui - Reactabular wrapper for semantic-ui-react

Helper for Reactabular to use Semantic-Ui-React table with it.
<br><br>Should be able to handle any properties specified in Semantic-UI-React documentation.
http://react.semantic-ui.com/collections/table
## Example

```jsx
import React, { Component } from "react";
import componentsWrapper from 'reactabular-semantic-ui';
import * as Table from "reactabular-table";

import "semantic-ui-css/semantic.min.css";



const rows = [
  {
    id: 100,
    name: 'John'
  },
  {
    id: 101,
    name: 'Jack'
  }
];

const columns = [
  {
    property: 'name',
    header: {
      label: 'Name'
    }
  }
];

// Define properties that you wnat to pass to corresponding components
// All of those are optional
const combinedProps = {
  //Semantic UI React <Table /> component props in object format
  tableProps: {
    striped: true,
    color: "red"
  },
  //Semantic UI React <Table.Header /> component props in object format
  headerProps: {
    fullWidth: true
  },
  //Header row props if you want to do something special there
  headerRowProps: {},
  //Semantic UI React <Table.HeaderCell /> component props in object format
  headerCellProps: {
    textAlign: "center"
  },
  //Semantic UI React <Table.Body /> component props in object format
  bodyProps: {
    className: "customtablebodyclass"
  },
  //Semantic UI React <Table.Row /> component props in object format
  bodyRowProps: {
    positive: true
  },
  //Semantic UI React <Table.Cell /> component props in object format
  bodyCellProps: {
    textAlign: "left",
    positive: true,
    icon: "folder",
    singleLine: true
  }
};

//Set your custom props
//componentsWrapper is possible to call without any parameters
const componentsWithProps = componentsWrapper(combinedProps)

const SemanticReactabular = () => {
  return (
    <Table.Provider
      columns={columns}
      components={componentsWithProps}
    >
      <Table.Header />

      <Table.Body rows={rows} rowKey="id" />
    </Table.Provider>
  );
};

```

## License

MIT. See LICENSE for details.

