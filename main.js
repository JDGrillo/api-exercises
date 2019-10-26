async function fetchDoggo(element) {
    element.value = "Generating a Doggo"
    let response = await fetch("https://dog.ceo/api/breeds/image/random")
    let responseObject = await response.json()
    console.log(JSON.stringify(responseObject))
    renderDoggo(responseObject.message)
    element.value = "Fetch a Doggo"
}

async function fetchAllDoggo() {
    let response = await fetch("https://dog.ceo/api/breeds/list/all")
    let responseObject = await response.json()
    for (x in responseObject.message) {
        document.getElementById("dropdownOptions").innerHTML += `<option value="${x}">${x}</option>`
    }
    //console.log(JSON.stringify(responseObject.message))
}

async function fetchParticularDoggo() {
    let fetchString = "https://dog.ceo/api/breed/" + document.getElementById("dropdownOptions").value + "/images/random"
    let response = await fetch(fetchString)
    let responseObject = await response.json()
    substr = responseObject.message.substring(30,)
    document.getElementById("content").innerHTML = `<img src=${responseObject.message} width="300px"><br><p>The Breed of this Doggo is: ${substr.substring(0,substr.indexOf('/'))}</p>` + document.getElementById("content").innerHTML
    // console.log(response)
    // console.log(document.getElementById("dropdownOptions").value)
}

function renderDoggo(doggoURL) {
    substr = doggoURL.substring(30,)
    document.getElementById("content").innerHTML = `<img src=${doggoURL} width="300px"><br><p>The Breed of this Doggo is: ${substr.substring(0,substr.indexOf('/'))}</p>` + document.getElementById("content").innerHTML
}