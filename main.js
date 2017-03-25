// The purpose of this JavaScript program is to solve a logic puzzle, shown in the README.md file.
// Clues are given, which can be written as logical operators, and the array of people objects will
// be modified to give the person's name, relationship to Greg, event he/she celebrated, and the state of residence.

// Four people objects with six keys:
var lastNameArr = ['Bartley', 'DeForest', 'Fairview', 'Gray']
var stateArr = ['Ohio', 'Montana', 'Texas', 'Washington']
var holidayArr = ['anniversary', 'birthday', 'house warming', 'wedding']
var relationshipArr = ['cousin', 'father', 'friend', 'sister']
var dayOfWeekArr = ['Wednesday', 'Thursday', 'Friday', 'Saturday']

var ellen = {
  firstName: 'Ellen',
  lastName: lastNameArr,
  holiday: holidayArr,
  relationship: relationshipArr,
  dayOfWeek: dayOfWeekArr,
  state: stateArr,
  heOrShe: 'she'
}
var heather = {
  firstName: 'Heather',
  lastName: lastNameArr,
  holiday: holidayArr,
  relationship: relationshipArr,
  dayOfWeek: dayOfWeekArr,
  state: stateArr,
  heOrShe: 'she'
}
var rick = {
  firstName: 'Rick',
  lastName: lastNameArr,
  holiday: holidayArr,
  relationship: relationshipArr,
  dayOfWeek: dayOfWeekArr,
  state: stateArr,
  heOrShe: 'he'
}
var walter = {
  firstName: 'Walter',
  lastName: lastNameArr,
  holiday: holidayArr,
  relationship: relationshipArr,
  dayOfWeek: dayOfWeekArr,
  state: stateArr,
  heOrShe: 'he'
}

// Place the object above into a 'people' array
var people = [ellen, heather, rick, walter]

console.log(people)
