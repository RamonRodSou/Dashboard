import axios, { AxiosInstance } from 'axios';

class Api {
  private client: AxiosInstance;

  constructor(baseURL: string) {
    this.client = axios.create({ baseURL });
  }

  async get<T>(url: string): Promise<T | null> {
    try {
      const response = await this.client.get<T>(url);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Não deu certo:', error.message);
      } else {
        console.error('Aconteceu algo inesperado', error);
      }
      return null;
    }
  }
}

export default Api;
