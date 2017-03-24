// The purpose of this JavaScript program is to solve a logic puzzle, shown in the README.md file.
// Clues are given, which can be written as logical operators, and the array of people objects will
// be modified to give the person's name, relationship to Greg, event he/she celebrated, and the state of residence.

// Four people objects with six keys:
var ellen = {
  firstName: 'Ellen',
  heOrShe: 'she'
}
var heather = {
  firstName: 'Heather',
  heOrShe: 'she'
}
var rick = {
  firstName: 'Rick',
  heOrShe: 'he'
}
var walter = {
  firstName: 'Walter',
  heOrShe: 'he'
}

// Place the object above into a 'people' array
var people = [ellen, heather, rick, walter]

// arrays of possible values for the four objects
var lastName = ['Bartley', 'DeForest', 'Fairview', 'Gray']
var state = ['Ohio', 'Montana', 'Texas', 'Washington']
var holiday = ['anniversary', 'birthday', 'house warming', 'wedding']
var relationship = ['cousin', 'father', 'friend', 'sister']
var dayOfWeek = ['Wednesday', 'Thursday', 'Friday', 'Saturday']

people.forEach(addAllProperties)

function addAllProperties (lastName, state, holiday, relationship, dayOfWeek) {
  for (var i = 0; i < lastName.length; i++) {
    for (var j = 0; j < state.length; j++) {
      for (var k = 0; k < holiday.length; k++) {
        for (var m = 0; m < relationship.length; m++) {
          for (var n = 0; n < dayOfWeek.length; n++) {
            people.push({
              lastName: lastName[i],
              state: state[j],
              holiday: holiday[k],
              relationship: relationship[m],
              dayOfWeek: dayOfWeek[n]
            })
          }
        }
      }
    }
  }
}

console.log(people)
