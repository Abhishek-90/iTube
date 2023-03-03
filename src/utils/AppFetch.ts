const appFetch = async (url: string, options: any) => {
  const response = await fetch(url, options);
  const json = await response.json();
  // console.log(json);
  return json;
};

export default appFetch;
