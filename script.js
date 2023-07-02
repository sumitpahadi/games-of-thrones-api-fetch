const url = "https://game-of-thrones1.p.rapidapi.com/Characters";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ae1cd46734msh5eedce6a817fec9p1e5048jsnb09ca729c2af",
    "X-RapidAPI-Host": "game-of-thrones1.p.rapidapi.com",
  },
};

let container = document.getElementsByClassName("container")[0];

fetch(url, options)
  .then((response) => response.json())
  .then((result) => {
    for (let index = 0; index < result.length; index++) {
      let img = document.createElement("div");
      
      container.appendChild(img);
      
      img.innerHTML = `<img src="${result[index].imageUrl}" alt=""> <h3>Family Name :</h3>  <h4> ${result[index].family}</h4> <h3> Name :</h3>   <h4> ${result[index].firstName}${result[index].lastName}</h4> <h3>Title :</h3> <h4> ${result[index].title}</h4>`;
     
      console.log(result);
    }
  })
  .catch((error) => {
    console.error(error);
  });
