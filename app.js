// SECTION global variables
const locations = [
  '🏤', '🏥', '🏭', '🏢', '🏣', '🏫️', '🏰️', '🎪️', '🏦️'
]

const people = [{
  name: 'Jimbo',
  picture: '🤵',
  location: '🏤'
},
{
  name: 'Sammy',
  picture: '🙆‍♀️',
  location: '🏤'
},
{
  name: 'Michael',
  picture: '👷',
  location: '🏤'
},
{
  name: 'Robert',
  picture: '👷',
  location: '🏥'
},
{
  name: 'Terry',
  picture: '🤴',
  location: '🏥',
},
{
  name: 'Bill',
  picture: '🕵️',
  location: '🏥',
},
{
  name: 'Marie',
  picture: '👩‍🍳',
  location: '🏭',
},
{
  name: 'Mykeal',
  picture: '💂',
  location: '🏭',
},
{
  name: 'Phil',
  picture: '🧜‍♂️',
  location: '🏭',
},
{
  name: 'Wilson',
  picture: '🏐',
  location: '🏢',
},
{
  name: 'Wendy',
  picture: '👩‍⚕️',
  location: '🏢',
},
{
  name: 'Jeremy',
  picture: '🦹',
  location: '🏢',
},
{
  name: 'Richard',
  picture: '🤵️',
  location: '🏫️'
},
{
  name: 'Eugene',
  picture: '👨‍💻️',
  location: '🏫️'
},
{
  name: 'Tom',
  picture: '👨‍🌾️',
  location: '🏰️'
},
{
  name: 'Gandalf',
  picture: '🧙‍♂️️️',
  location: '🏰️'
},
{
  name: 'Connie',
  picture: '👩️',
  location: '🎪️'
},
{
  name: 'Katrina',
  picture: '👩‍🔬️',
  location: '🎪️'
},
{
  name: 'Morton',
  picture: '👩‍⚕️️',
  location: '🏦️'
}
]


let remainingHours = 12
let hunter = {}
let wonGame = false

// !SECTION


// SECTION function definitions

function drawPeople() {
  locations.forEach(emoji => {
    let peopleAtArea = people.filter(person => person.location == emoji)
    if (peopleAtArea.length > 0) {
      let filteredPeopleEmoji = ""
      peopleAtArea.forEach(person => filteredPeopleEmoji += person.picture)

      let areaElement = document.getElementById(emoji)
      areaElement.innerText = filteredPeopleEmoji
    }
  })
}

function Attack(emoji) {
  console.log(emoji)
  let peopleAtArea = people.filter(person => person.location == emoji)
  peopleAtArea.forEach(people => {
    if (people == hunter) {
      window.alert("You've been caught by the hunter!!")
      endGame()
    }
  })
  peopleAtArea.forEach(person => person.picture = "🦇️")
  remainingHours -= 1
  if (remainingHours == 0) {
    window.alert("It is dawn!  You perish!")
    endGame()
  } else {
    movePeople()
    drawPeople()
    checkEndGame()
    checkHunter()
  }
}

function endGame() {
  let endGameElement = document.getElementById("game")
  if (wonGame == false) {
    endGameElement.innerHTML = "<img class='img-size' src='https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80' alt='game over image'/>"
    document.getElementById("startOverButton").style.display = "static"
  } else {
    endGameElement.innerHTML = "<img class='img-size' src='https://images.unsplash.com/photo-1634454686481-dff1eaa44c21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80' alt='you won image'/>"
    let startOverButtonElement = document.getElementById("startOverButton")
    startOverButtonElement.innerText("Next Town")
  }
}

function checkEndGame() {
  let batPeople = []
  people.forEach(person => {
    if (person.picture == "🦇️") {
      batPeople.push(person)
    }
  })
  if (batPeople.length >= (people.length - 1)) {
    window.alert("Everyone is Bats!  You win the game!")
    wonGame = true
    endGame()
  }
}

function movePeople() {
  people.forEach(person => {
    let randomIndex = Math.floor(Math.random() * locations.length)
    person.location = locations[randomIndex]
  })
}

function chooseHunter() {
  let hunterIndex = Math.floor(Math.random() * people.length)
  hunter = people[hunterIndex]
}

function checkHunter() {
  let numberofBats = 0
  let batPeople = people.filter(person => person.picture == "🦇️")
  batPeople.forEach(person => {
    if (person.location == hunter.location) {
      numberofBats++
    }
  })
  if (numberofBats >= 1) {
    window.alert(`The hunter is with ${numberofBats} bat(s)!`)
  }
}


// !SECTION

// SECTION calling functions


drawPeople()
chooseHunter()
console.log(hunter)

// !SECTION