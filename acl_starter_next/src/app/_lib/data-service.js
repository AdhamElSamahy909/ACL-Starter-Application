export async function getData() {
  try {
    const result = await fetch("http://localhost:4999/alldata");
    console.log("Result of fetching all data: ", result);
    return result;
  } catch (error) {
    console.log("Error from fetching all data: ", error);
  }
}
