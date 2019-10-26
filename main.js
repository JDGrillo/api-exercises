async function fetchDoggo(element) {
    element.value = "Generating a Doggo"
    let response = await fetch("https://dog.ceo/api/breeds/image/random")
    let responseObject = await response.json()
    console.log(JSON.stringify(responseObject))
    renderDoggo(responseObject.message)
    element.value = "Fetch a Doggo"
}

async function fetchAllDoggo(element) {
    let response = await fetch("https://dog.ceo/api/breeds/list/all")
    let responseObject = await response.json()
    console.log(JSON.stringify(responseObject.message))
}

function renderDoggo(doggoURL) {
    substr = doggoURL.substring(30,)
    document.getElementById("content").innerHTML += `<img src=${doggoURL} max-width=600px max-height=450px><br><p>The Breed of this Doggo is: ${substr.substring(0,substr.indexOf('/'))}</p>`
}