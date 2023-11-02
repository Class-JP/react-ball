import React from "react";
import { GamesForm } from "./form";

export const NewGame = () => {


  const onSave = (fields) => {
    // We Can Create a new Object... {description: ..., teamHome: ..., }
  };

  return (
    <div className="games-new container">
      <h1>Add New Game</h1>
      <GamesForm onSave={onSave}/>
    </div>
  );
};
