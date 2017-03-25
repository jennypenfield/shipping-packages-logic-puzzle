// The purpose of this JavaScript program is to solve a logic puzzle, shown in the README.md file.
// Clues are given, which can be written as logical operators, and the array of people objects will
// be modified to give the person's name, relationship to Greg, event he/she celebrated, and the state of residence.

// Four people objects with six keys:
var firstNamesArr = ['Ellen', 'Heather', 'Rick', 'Walter']
var lastNamesArr = ['Bartley', 'DeForest', 'Fairview', 'Gray']
var statesArr = ['Ohio', 'Montana', 'Texas', 'Washington']
var holidaysArr = ['anniversary', 'birthday', 'house warming', 'wedding']
var relationshipsArr = ['cousin', 'father', 'friend', 'sister']
var dayOfWeekArr = ['Wednesday', 'Thursday', 'Friday', 'Saturday']
var heOrSheArr = ['he', 'she']

// create objects for all combinations:
var people = []
for (var i = 0; i < firstNamesArr.length; i++) {
  for (var j = 0; j < lastNamesArr.length; j++) {
    for (var k = 0; k < statesArr.length; k++) {
      for (var l = 0; l < holidaysArr.length; l++) {
        for (var m = 0; m < relationshipsArr.length; m++) {
          for (var n = 0; n < dayOfWeekArr.length; n++) {
            for (var p = 0; p < heOrSheArr.length; p++) {
              people.push({
                firstName: firstNamesArr[i],
                lastName: lastNamesArr[j],
                state: statesArr[k],
                holiday: holidaysArr[l],
                relationship: relationshipsArr[m],
                dayOfWeek: dayOfWeekArr[n],
                heOrShe: heOrSheArr[p]
              })
            }
          }
        }
      }
    }
  }
}

console.log(people.length)
