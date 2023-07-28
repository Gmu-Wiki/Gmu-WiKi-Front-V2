const serverApi = path =>
  new URL(path, process.env.REACT_APP_GMUWIKI_SERVER_URL).toString();

export default serverApi;
