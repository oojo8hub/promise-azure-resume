window.addEventListener("DOMContentLoaded", (event) => {
  getVisitCount();
});

const functionApiUrl =
  "https://resumecounterapp.azurewebsites.net/api/GetResumeCounter?code=KkqJzyWAuZxIGNJlvml9xHYwa-WiWUlcstACjRW9q2Q_AzFuFWWpTg%3D%3D";

const localfunctionApi = "http://localhost:7071/api/GetResumeCounter";

const getVisitCount = () => {
  let count = 30;
  fetch(functionApiUrl)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log("Website called function API.");
      count = response.count;
      document.getElementById("counter").innerText = count;
    })
    .catch(function (error) {
      console.error();
    });

  return count;
};
