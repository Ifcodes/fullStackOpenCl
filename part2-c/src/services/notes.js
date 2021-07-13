import axios from "axios";

const baseUrl = "/api/notes";

const getAll = () => {
  return axios.get(baseUrl);
};

const createNew = (newObject) => {
  return axios.post(baseUrl, newObject);
};

const update = (id, obj) => {
  return axios.put(`${baseUrl}/${id}`, obj);
};

const del = (id, obj) => {
  const request = axios.delete(`${baseUrl}/${id}`, obj);
  return request.then((response) => response);
};

const noteService = {
  getAll,
  createNew,
  update,
  del,
};
export default noteService;
