const results = document.querySelector("#results");

async function asyncFetch(value) {
  //make sure promise is fulfilled before we go forward
  const res = await fetch(`https://swapi.dev/api/${value}/`);
  const data = await res.json();

  displayResults(data, value);
}

function displayResults(data, value) {
  let output = "";
  if (value === "films") {
    data.results.forEach((item) => {
      output += `
        <div class "card p-3 m-3 style = "opacity:.8">
        <h4 class="card-title text-center>${item.title}</h4>
        <div class = "card-content>
        <span styple = "text-decoration:underline">Producer</span>:${item.producer}<br>
        <span styple = "text-decoration:underline">Producer</span>:${item.director}<br>
        <span styple = "text-decoration:underline">Producer</span>:${item.release_date}<br>
        <p class="text-center"${item.opening_crawl}</p>  
      </div>
        </div>
        `;
    });
  }
  if (value === "people") {
    data.results.forEach((item) => {
      output += `
        <div class "card p-3 m-3 style = "opacity:.8">
        <h4 class="card-title text-center>${item.name}</h4>
        <div class = "card-content>
        <span styple = "text-decoration:underline">Name</span>:${item.name}<br>
        <span styple = "text-decoration:underline">Height</span>:${item.height}<br>
        <span styple = "text-decoration:underline">Birth Year</span>:${item.birth_year}<br>
        <span styple = "text-decoration:underline">Skin Color</span>:${item.skin_color}<br>
        <p class="text-center"${item.opening_crawl}</p>  
      </div>
        </div>
        `;
    });
  }
  if (value === "vehicles") {
    data.results.forEach((item) => {
      output += `
        <div class "card p-3 m-3 style = "opacity:.8">
        <h4 class="card-title text-center>${item.name}</h4>
        <div class = "card-content>
        <span styple = "text-decoration:underline">Capacity</span>:${item.cargo_capacity}<br>
        <span styple = "text-decoration:underline">Model</span>:${item.model}<br>
        <span styple = "text-decoration:underline">Manufacturer</span>:${item.manufacturer}<br>
        <span styple = "text-decoration:underline">Vehicel Class</span>:${item.vehicle_class}<br>
        <p class="text-center"${item.opening_crawl}</p>  
      </div>
        </div>
        `;
    });
  }
  results.innerHTML = output;
}

//trmming white pase and sending everyting to lower case for buttons
document.querySelector("#buttons").addEventListener("click", (e) => {
  asyncFetch(e.target.textContent.trim().toLowerCase());
});

//rooot target capture bubling
