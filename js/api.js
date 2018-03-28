import axios from "axios";

var getApiData = url =>
  new Promise((resolve, reject) => {
    //start loader
    const baseUrl = "https://swapi.co/api";
    var reqUrl = `${baseUrl}${url}`;
    axios
      .get(reqUrl)
      .then(responce => {
        //stop loader
        resolve(responce.data.results);
      })
      .catch(err => {
        // stop loader
        reject(err);
        //reject error
      });
  });

export default getApiData;
