// The purpose of this JavaScript program is to solve a logic puzzle, shown in the README.md file.
// Clues are given, which can be written as logical operators, and the array of people objects will
// be modified to give the person's name, relationship to Greg, event he/she celebrated, and the state of residence.

// All possibilities:
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

console.log(finalOutput(people).length)
console.log(people.length)

// Clue #1: Greg's friend wasn't Ellen Fairview, who didn't live in Ohio. The birthday girl didn't have her party on Friday.
function isThePerson (arr) {
  if (arr.firstName === 'Ellen' && arr.heOrShe === 'he') return false
  if (arr.firstName === 'Heather' && arr.heOrShe === 'he') return false
  if (arr.firstName === 'Rick' && arr.heOrShe === 'she') return false
  if (arr.firstName === 'Walter' && arr.heOrShe === 'she') return false
  if (arr.relationship === 'friend' && arr.firstName === 'Ellen') return false
  if (arr.firstName === 'Ellen' && arr.lastName !== 'Fairview') return false
  if (arr.firstName !== 'Ellen' && arr.lastName === 'Fairview') return false
  if (arr.relationship === 'Ellen' && arr.state === 'Ohio') return false
  if (arr.heOrShe === 'he' && arr.holiday === 'birthday') return false
  if (arr.holiday === 'birthday' && arr.dayOfWeek === 'Friday') return false

  // Clue #2: Rick's last name wasn't Bartley, but his event was on Saturday night.
  if (arr.firstName === 'Rick' && arr.lastName === 'Bartley') return false
  if (arr.firstName === 'Rick' && arr.dayOfWeek !== 'Saturday') return false
  if (arr.firstName !== 'Rick' && arr.dayOfWeek === 'Saturday') return false

  // Clue #3: Greg's father wasn't getting married, but his last name was Gray.
  if (arr.relationship === 'father' && arr.holiday === 'wedding') return false
  if (arr.relationship === 'father' && arr.lastName !== 'Gray') return false
  if (arr.relationship !== 'father' && arr.lastName === 'Gray') return false

  // Clue #4: The friend having a housewarming didn't live in Ohio.
  if (arr.relationship === 'friend' && arr.holiday !== 'housewarming') return false
  if (arr.relationship !== 'friend' && arr.holiday === 'housewarming') return false
  if (arr.relationship === 'friend' && arr.state === 'Ohio') return false

  // Clue #5: The wedding was for Greg's cousin. Heather, who didn't live in Texas, was
  // Greg's sister, but her event wasn't on Wednesday.
  if (arr.holiday === 'wedding' && arr.relationship !== 'cousin') return false
  if (arr.holiday !== 'wedding' && arr.relationship === 'cousin') return false
  if (arr.firstName === 'Heather' && arr.state === 'Texas') return false
  if (arr.firstName === 'Heather' && arr.relationship !== 'sister') return false
  if (arr.firstName !== 'Heather' && arr.relationship === 'sister') return false
  if (arr.firstName === 'Heather' && arr.dayOfWeek === 'Wednesday') return false

  // Clue #6: Walter’s event was one day earlier than the person whose last name was DeForest
  // but after the person who lived in Washington. The anniversary was held in Montana.
  if (arr.firstName === 'Walter' && arr.lastName === 'DeForest') return false
  if (arr.firstName === 'Walter' && arr.dayOfWeek === 'Wednesday') return false
  if (arr.firstName === 'Walter' && arr.dayOfWeek === 'Saturday') return false // (already given Rick is Saturday)
  if (arr.holiday === 'anniversary' && arr.state !== 'Montana') return false
  if (arr.holiday !== 'anniversary' && arr.state === 'Montana') return false
  if (arr.firstName === 'Walter' && arr.state === 'Washington') return false

  if (arr.state === 'Washington' && arr.dayOfWeek === 'Friday') return false
  if (arr.state === 'Washington' && arr.dayOfWeek === 'Saturday') return false
  if (arr.lastName === 'DeForest' && arr.dayOfWeek === 'Wednesday') return false
  if (arr.lastName === 'DeForest' && arr.dayOfWeek === 'Thursday') return false

  return true
}

function finalOutput (arr) {
  var outputArr = []
  for (var i = 0; i < arr.length; i++) {
    if (isThePerson(arr[i])) {
      outputArr.push(arr[i])
    }
  }
  return outputArr
}
