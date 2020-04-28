const inputLeft = document.querySelector('#input-left');
const resultLeft = document.querySelector('#result-left');

async function fetchMovie(searchTerm) {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: '5cf6348e',
      s: searchTerm
    }
  });
  
  if(response.data.Error) {
    return response.data.Error;
  }

  return response.data.Search;
}

inputLeft.addEventListener('input', async e => {
  if(e.which !== 108) {
    const data = await fetchMovie(e.target.value);
    console.log(data);
    if(typeof data === 'string') {
      resultLeft.innerHTML = `
        <div>
          <p>${data}</p>
        </div>
      `;
    } else {
      resultLeft.innerHTML = `<div id="autocomplete"></div>`;
      const autocomplete = document.querySelector('#autocomplete');

      for (let movie of data) {
        const option = document.createElement('div');
        option.innerHTML = `
          <img src="${movie.Poster}" />
          <p>${movie.Title} (${movie.Year})</p>
        `;
        autocomplete.appendChild(option);
      }
    }
  } 
})

