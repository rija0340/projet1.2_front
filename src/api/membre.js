import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
});
//get all membres
export const getMembres = async () => {
    const response = await api.get('/membres');
    return response.data;
};

//create membre 
export const createMembre = async (membre) => {
    const response = await api.post('/membres', membre);
    return response.data;
};

//update membre
export const updateMembre = async (id, membre) => {
    const response = await api.put(`/membres/${id}`, membre);
    return response.data;
};

//delete membre

export const deleteMembre = async (id) => {
    const response = await api.delete(`/membres/${id}`);
    return response.data;
};

//get membre by id
export const getMembreById = async (id) => {
    const response = await api.get(`/membres/${id}`);
    return response.data;
};
