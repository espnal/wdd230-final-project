const templeDiv = document.querySelector(".temples-cards");
const urlTemples = "datas/temples.json"

function displayCards(temple) {
    // Create elements to add to the document
    let name = document.createElement('h2');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let history = document.createElement('p');
    let services = document.createElement('p');
    let ordinaceSch = document.createElement('p');
    let sessionSch = document.createElement('p');
    let templeClSch = document.createElement('p');
    let imgTemple = document.createElement('img');
    let like = document.createElement('span');
    let newDiv = document.createElement('div');
    newDiv.className = "individual-temple"
    let individualContent = document.createElement('div');
    individualContent.className = "individual-content"

    // Change the textContent property of the h2 element to contain the prophet's full name
    name.textContent = `${temple.name}`
    address.innerHTML = `<strong style="color:#b9f1da">Address: </strong> ${temple.address}`
    phone.innerHTML = `<strong style="color:#b9f1da">Phone number: </strong> ${temple.phonenumber}`
    history.innerHTML = temple.history
    services.innerHTML = `<strong style="color:#b9f1da">Services: </strong>${temple.services}`
    ordinaceSch.innerHTML = `<strong style="color:#b9f1da">Ordinace Schedule: </strong>${temple.ordinanceSchedule}`
    sessionSch.innerHTML = `<strong style="color:#b9f1da">Session Schedule: </strong>${temple.sessionSchedule}`
    templeClSch.innerHTML = `<strong style="color:#b9f1da">Temple closing Schedule: </strong>${temple.templeClosureSchedule}`
    like.innerHTML = `<i id="like" class="fa-solid fa-heart"></i>`
        // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    imgTemple.setAttribute('src', temple.imgTemple);
    imgTemple.setAttribute('alt', temple.name);
    imgTemple.setAttribute('loading', 'lazy');
    newDiv.appendChild(imgTemple)

    individualContent.appendChild(name)
    individualContent.appendChild(history)
    individualContent.appendChild(services)
    individualContent.appendChild(ordinaceSch)
    individualContent.appendChild(sessionSch)
    individualContent.appendChild(templeClSch)
    individualContent.appendChild(address)
    individualContent.appendChild(phone)
    individualContent.appendChild(like)

    newDiv.appendChild(individualContent)

    // Add/append the existing HTML div with the cards class with the section(card)
    templeDiv.appendChild(newDiv);

}
fetch(urlTemples)
    .then(response => response.json())
    .then((templesJson) => {
        console.log(templesJson);
        const temple = templesJson["temples"];
        temple.forEach(displayCards);
    })