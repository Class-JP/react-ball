import Swal from "sweetalert2";
import GamesService from "../../../services/GamesService";

export const deleteGameAction = (id, afterDelete) => {
  const service = new GamesService();

  service
    .deleteGame(id)
    .then(() => afterDelete())
    .catch((err) => {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Delete has failed!",
      });
    });
};
