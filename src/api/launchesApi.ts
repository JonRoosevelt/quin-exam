export const launchesApi = async () => {
  let results = [];
  try {
    results = await fetch("http://localhost:3000/results").then((response) =>
      response.json()
    );
  } catch (error) {
    console.log(error);
  }
  return results;
};
