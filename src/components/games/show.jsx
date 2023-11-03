import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import GamesService from "../../services/GamesService";

export const ShowGame = () => {

  // Statte para manejar mis datos del componente
  const [game, setGame] = useState({});


  const { id } = useParams();



  useEffect(() => { 
    // Lets call the api here! then assign the new data
    const service = new GamesService();

    service.getGame(id).then((data) => {
      
      setGame(data);

    }).catch((error) => {
      alert(error);
    });

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
