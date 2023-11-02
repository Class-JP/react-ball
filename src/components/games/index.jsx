import React, { Component } from "react";
import { Button, ButtonGroup, Container, Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { objectIsEmpty } from '../utils/object.utils'
import GamesService from "../../services/GamesService";

export class Games extends Component {
  constructor() {
    super();

    this.state = {
      games: []
    };
  }

  async componentDidMount() {
    // intial mount
    // Assign Data Here!

    const service = new GamesService();

    const fetchedGames = await service.getGames();

    this.setState({
      games: fetchedGames
    });
  }

  componentDidUpdate() {
    console.log('Update!', this.state);
  }  

  render() {
    return (
      <div className="container game-list">

        <Container>
          <NavLink to='/games/new'>
              <Button>
                Create New Game!
              </Button>
            </NavLink>
        </Container>

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
                    <td>{ game.teamLocal }</td>
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
