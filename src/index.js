import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Table } from "semantic-ui-react";

export const TableWrapper = props =>
  class extends PureComponent {
    static propTypes = {
      children: PropTypes.any
    };

    render() {
      return <Table {...props}>{this.props.children}</Table>;
    }
  };

export const RowWrapper = props =>
  class extends PureComponent {
    static propTypes = {
      children: PropTypes.any
    };

    render() {
      return <Table.Row {...props}>{this.props.children}</Table.Row>;
    }
  };

export const HeaderWrapper = props =>
  class extends PureComponent {
    static propTypes = {
      children: PropTypes.any
    };

    render() {
      return <Table.Header {...props}>{this.props.children}</Table.Header>;
    }
  };

export const HeaderCellWrapper = props =>
  class extends PureComponent {
    static propTypes = {
      children: PropTypes.any
    };

    render() {
      return (
        <Table.HeaderCell {...props}>{this.props.children}</Table.HeaderCell>
      );
    }
  };

export const BodyWrapper = props =>
  class extends PureComponent {
    static propTypes = {
      children: PropTypes.any
    };

    render() {
      return <Table.Body {...props}>{this.props.children}</Table.Body>;
    }
  };

export const BodyCellWrapper = props =>
  class extends PureComponent {
    static propTypes = {
      children: PropTypes.any
    };

    render() {
      return <Table.Cell {...props}>{this.props.children}</Table.Cell>;
    }
  };

export default (props = {}) => {
  return {
    table: TableWrapper(props.tableProps),
    header: {
      wrapper: HeaderWrapper(props.headerProps),
      row: RowWrapper(props.headerRowProps),
      cell: HeaderCellWrapper(props.headerCellProps)
    },
    body: {
      wrapper: BodyWrapper(props.bodyProps),
      row: RowWrapper(props.bodyRowProps),
      cell: BodyCellWrapper(props.bodyCellProps)
    }
  };
};
