const result = document.querySelector('.result');

const fetchData = async () => {
  try {
    const { data } = await axios.get('api/1-hello'); // redirect (api) siehe netlify.toml
    result.textContent = data;
  } catch (error) {
    // console.log(error.response);
    result.textContent = error.response.data;
  }
};

fetchData();
