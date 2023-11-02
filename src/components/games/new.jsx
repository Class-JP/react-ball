import React from "react";
import { GamesForm } from "./form";
import GamesService from "../../services/GamesService";

export const NewGame = () => {

  const service = new GamesService();

  const onSave = (fields) => {
    // We Can Create a new Object... {description: ..., teamHome: ..., }
    service
        .createGame(fields)
        .then((payload) => console.log(payload) )
        .catch((err) => {
        alert('Something went wrong!');
      })
  };

  return (
    <div className="games-new container">
      <h1>Add New Game</h1>
      <GamesForm onSave={onSave}/>
    </div>
  );
};
