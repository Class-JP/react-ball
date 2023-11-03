import axios from "axios";

export default class GamesService {

  async getGames() {
    try {
      
      const { data } = await axios.get('http://localhost:3001/games');
      
      return data;
    } catch (error) {
      
      throw error;
    }
  }

  async createGame(data) {
    try {
      const response = await axios.post('http://localhost:3001/games', data);

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

      throw error;
    }
  }

  async updateGame(id, data) {
    try {
      await axios.put(`http://localhost:3001/games/${id}`, data);

      return { status: 'OK' };
    } catch (error) {
      
      throw error;
    }
  }

  async deleteGame(id) {
    try {
      
      await axios.delete(`http://localhost:3001/games/${id}`);
      
      return {status: 'OK'};
    } catch (error) {
      throw error;
    }
  }

}
