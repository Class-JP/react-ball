import React, { useState } from "react";
import { GamesForm } from "./form";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GamesService from "../../services/GamesService";
import Swal from "sweetalert2";

export const EditGame = () => {
  const [game, setGame] = useState({});

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const service = new GamesService();
    service
      .getGame(id)
      .then((data) => setGame(data))
      .catch(err => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Game cannot be loaded!',
        });
        console.error(err);
      });
  }, [id]);

  const onSave = (fields) => {
    const service = new GamesService();
    service.updateGame(id, fields).then(({status}) => {
      if (status === 'OK') {
        Swal.fire({
          title: 'Success!',
          text: 'Game Updated!',
          type: 'success'
        }).then(() => {
          navigate('/games');
        });
      } else {
        Swal.fire(
          'Cannot verify!',
          'was the game updated?',
          'question'
        )
      }
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
      <h1>Edit Game</h1>
      <GamesForm onSave={onSave} game={game} />
    </div>
  );
};
