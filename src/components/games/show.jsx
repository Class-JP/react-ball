import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";

export const ShowGame = () => {

  const [game, setGame] = useState({});

  const { id } = useParams();

  useEffect(() => {
    // Lets call the api here! then assign the new data
    console.log('Current ID:', id);
  }, [id]);


  return (
    <div className="games-show container">
      <Table>
        <tbody>
          <tr>
            <th scope="row">Description</th>
            <td>{ game.description }</td>
          </tr>
          <tr>
            <th scope="row">Home Team</th>
            <td>{ game.teamLocal }</td>
          </tr>
          <tr>
            <th scope="row">Visit Team</th>
            <td>{ game.teamVisit }</td>
          </tr>          
        </tbody>
      </Table>
    </div>
  );
};
