import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getTechnologyData = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/technologies.json`)
    .then((response) => {
      const demTechnologies = response.data;
      console.log('technologyData', demTechnologies);
      const technologies = [];
      Object.keys(demTechnologies).forEach((technologyId) => {
        demTechnologies[technologyId].id = technologyId;
        technologies.push(demTechnologies[technologyId]);
      });

      resolve(technologies);
    })
    .catch((error) => reject(error));
});

export default { getTechnologyData };
