import React, { useState } from "react";
import { GamesForm } from "./form";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const EditGame = () => {
  const [game, setGame] = useState({});

  const { id } = useParams();

  useEffect(() => {
    // Lets call the api here! then assign the new data
    console.log('Current ID:', id);
  }, [id]);

  const onSave = (fields) => {
    // We Can Create a new Object... {description: ..., teamHome: ..., }
  };

  return (
    <div className="games-new container">
      <h1>Edit Game</h1>
      <GamesForm onSave={onSave} game={game} />
    </div>
  );
};
