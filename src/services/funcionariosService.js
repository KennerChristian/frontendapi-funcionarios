import axios from "axios";

// Pega a URL da variável de ambiente
const REST_API_BASE_URL = process.env.REACT_APP_REST_API_BASE_URL

// Funções para trabalhar com a API
export const listFuncionarios = () => axios.get(REST_API_BASE_URL);

export const criarFuncionario = (funcionario) => axios.post(REST_API_BASE_URL, funcionario);

export const getFuncionario = (funcionarioId) => axios.get(`${REST_API_BASE_URL}/${funcionarioId}`);

export const updateFuncionario = (funcionarioId, funcionario) =>
  axios.put(`${REST_API_BASE_URL}/${funcionarioId}`, funcionario);

export const deletarFuncionario = (funcionarioId) =>
  axios.delete(`${REST_API_BASE_URL}/${funcionarioId}`);
