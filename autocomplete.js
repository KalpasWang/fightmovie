async function autocomplete(searchTerm) {
  const data = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: '5cf6348e',
      s: searchTerm
    }
  });

  if(data.Error) {}

};
