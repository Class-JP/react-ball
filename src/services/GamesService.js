import axios from "axios";

export default class GamesService {

  async getGames() {
    try {
      
      const { data } = await axios.get('http://localhost:3001/games');
      
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async createGame(data) {
    try {
      const response = await axios.post('http://localhost:3001/games', data);

      console.log(response);

      return response;
    } catch (error) {
      
      throw error;
    }
  }

  async getGame(id) {
    try {
      // ejemplo: http://localhost:3001/games/2
      const { data } = await axios.get(`http://localhost:3001/games/${id}`);
      
      return data;
    } catch (error) {
      console.log(error);

      throw error;
    }
  }
}
