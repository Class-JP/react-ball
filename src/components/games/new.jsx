import React from "react";
import { GamesForm } from "./form";
import GamesService from "../../services/GamesService";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const NewGame = () => {

  const service = new GamesService();

  const navigate = useNavigate();

  const onSave = (fields) => {
    // We Can Create a new Object... {description: ..., teamHome: ..., }
    service
        .createGame(fields)
        .then((payload) => console.log(payload) )
        .catch((err) => {
        alert('Something went wrong!');
      })


      service
        .createGame(fields)
        .then(() => {
          Swal.fire({
            title: 'Success!',
            text: 'Game Created!',
            type: 'success'
          }).then(() => {
            navigate('/games');
          });
        }).catch(err => {
          console.error(err);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
      });
  };

  return (
    <div className="games-new container">
      <h1>Add New Game</h1>
      <GamesForm onSave={onSave} game={{}}/>
    </div>
  );
};
