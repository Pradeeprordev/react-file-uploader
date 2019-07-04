import React from 'react';
import { Table } from 'semantic-ui-react'

class TablePage extends React.Component {
  render() {
    const users = this.props.users;

    return (
        <div>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Firstname</Table.HeaderCell>
                <Table.HeaderCell>Lastname</Table.HeaderCell>
                <Table.HeaderCell>Age</Table.HeaderCell>
                <Table.HeaderCell>Sex</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
            {users.map((user, index) =>
              <Table.Row key={user.id}>
                <Table.Cell>{user.firstname}</Table.Cell>
                <Table.Cell>{user.lastname}</Table.Cell>
                <Table.Cell>{user.age}</Table.Cell>
                <Table.Cell>{user.sex}</Table.Cell>
              </Table.Row>
            )}
            </Table.Body>
          </Table>
        </div>
    )
  }
}
export { TablePage };