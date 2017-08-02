console.log(customers.results);

let newPerson = document.querySelector(".container");


for (let i = 0; i < customers.results.length; i++){

  let box = `
    <div class="person">
    <img src="${customers.results[i].picture.large}">
    <div class="name"><span>${customers.results[i].name.first} ${customers.results[i].name.last}</span></div>
    <div class="email">${customers.results[i].email}</div>
    <div class="address">${customers.results[i].location.street}
    <br>
    <span>${customers.results[i].location.city} ${customers.results[i].location.state} ${customers.results[i].location.postcode}</span></div>

    <div class="phone"> ${customers.results[i].phone}</div>
</div>
  `;
newPerson.innerHTML += box;
} /* i loop */
