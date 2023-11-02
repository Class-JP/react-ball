import React, { Component } from "react";
import { Button, ButtonGroup, Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { objectIsEmpty } from '../utils/object.utils'
export class Games extends Component {
  constructor() {
    super();

    this.state = {
      games: []
    };
  }

  componentDidMount() {
    // intial mount
    // Assign Data Here!
    this.setState({
      games: [        {id: 1, description: 'UCL', teamHome: 'Man U', teamVisit: 'RealMadrid'}]
    })
  }

  componentDidUpdate() {
    console.log('Update!', this.state);
  }

  

  render() {
    return (
      <div className="container game-list">
        <Table className="table-striped">
          <thead>
            <tr>
              <th scope="col">Description</th>
              <th scope="col">Home Team</th>
              <th scope="col">Visit Team</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              !objectIsEmpty(this.state.games) && this.state.games.map((game, index) => {

                return (
                  <tr key={`games-table-row-${index}`}>
                    <td>{ game.description }</td>
                    <td>{ game.teamHome }</td>
                    <td>{ game.teamVisit }</td>
                    <td>
                      <ButtonGroup>
                        <NavLink to={`/games/${game.id}`}>
                          <Button>
                            Show
                          </Button>
                        </NavLink>
                        <NavLink to={`/games/${game.id}/edit`}>
                          <Button className="btn-light">
                            Edit
                          </Button>
                        </NavLink>
                        <Button className="btn-danger">
                          Delete
                        </Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </Table>
      </div>
    );
  }
}
