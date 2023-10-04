//function to fetch data from the json file

export const fetchData = (setState) => {
  return fetch("/src/api/data.json")
    .then((response) => response.json())
    .then((response) => setState(response))
    .catch((error) => error);
};
