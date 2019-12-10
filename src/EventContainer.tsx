import React from 'react';
import Table from './TableView';

interface FormProps {
  data: {
    evt?: string,
    src?: string,
    dest?: string,
    value?: string
  }[]
}

export default class EventContainer extends React.Component<FormProps> {

  render() {
    return (
      <div>
        <Table items={this.props.data} tableName="Knx Log" />
      </div>
    )
  }
}