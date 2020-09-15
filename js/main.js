const url =
  "https://noroffcors.herokuapp.com/https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/breakingbad";

const resultContainer = document.querySelector(".resultcontainer");

async function getApi() {
  try {
    const response = await fetch(url);
    const json = await response.json();
    makeHTML(json.data);
  } catch (error) {
    console.log(error);
  }
}

getApi();

function makeHTML(data) {
  resultContainer.innerHTML = "";

  for (let i = 0; i < 7; i++) {
    resultContainer.innerHTML += `<div class="result">
                                        <h4>${data[i].name}</h4>
                                        <p>Birthday: ${data[i].birthday}</p>
                                        <p>Nickname: ${data[i].nickname}</p>
                                         <img class="pic" src="${data[i].img}" alt="picture">
                                        <div>Occupations: <br>                                        
                                           <span> ${data[i].occupation[0]} </span>
                                           <br>
                                           <span> ${data[i].occupation[1]} </span>
                                        </div>
                                    </div>`;
  }
}
