[![build status](https://secure.travis-ci.org/reactabular/reactabular-material-ui.svg)](http://travis-ci.org/reactabular/reactabular-material-ui) [![bitHound Score](https://www.bithound.io/github/reactabular/reactabular-material-ui/badges/score.svg)](https://www.bithound.io/github/reactabular/reactabular-material-ui) [![codecov](https://codecov.io/gh/reactabular/reactabular-material-ui/branch/master/graph/badge.svg)](https://codecov.io/gh/reactabular/reactabular-material-ui)

# reactabular-semantic-ui - Reactabular wrapper for semantic-ui-react

Assistant wrapper for Reactabular to use Semantic-Ui-React table with it.
<br><br>Should be able to handle any properties specified in Semantic-UI-React documentation.
http://react.semantic-ui.com/collections/table
## Example

```jsx

import * as Table from 'reactabular-table';
import componentsWrapper from 'reactabular-material-ui';



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
      color: {red},
    }
    //Semantic UI React <Table.Header /> component props in object format
    tableHeader: { 
      fullWidth: true,
    }
    //Header row props if you want to do something special there
    tableHeaderRow: { 
    }
    //Semantic UI React <Table.HeaderCell /> component props in object format
    tableHeaderCell: { 
      textAligmne: {ascending},
    }
    //Semantic UI React <Table.Row /> component props in object format
    tableRow: { 
      disabled: true,
    }
    //Semantic UI React <Table.Body /> component props in object format
    tableBody: { 
      className: 'customtablebodyclass',
    }
    //Semantic UI React <Table.Body /> component props in object format
    tableBody: { 
      className: 'customtablebodyclass',
    }
    //Semantic UI React <Table.Row /> component props in object format
    tableBodyRow: { 
      positive: true,
    }
    //Semantic UI React <Table.Cell /> component props in object format
    tableBodyCell: { 
      positive: true,
      icon: 'folder',
      singleLine: true,
    }
}

//Set your custom props
//componentsWrapper is possible to call without any parameters
const componentsWithProps = componentsWrapper(combinedProps)

<Table.Provider
  columns={columns}
  //Pass it to table provider and you are all good
  components={componentsWithProps}
>
  <Table.Header />

  <Table.Body rows={rows} rowKey="id" />
</Table.Provider>

```

## License

MIT. See LICENSE for details.

