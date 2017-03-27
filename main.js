// The purpose of this JavaScript program is to solve a logic puzzle, shown in the README.md file.
// Clues are given, which can be written as logical operators, and the array of people objects will
// be modified to give the person's name, relationship to Greg, event he/she celebrated, and the state of residence.

// All possibilities:
var firstNamesArr = ['Ellen', 'Heather', 'Rick', 'Walter']
var lastNamesArr = ['Bartley', 'DeForest', 'Fairview', 'Gray']
var statesArr = ['Ohio', 'Montana', 'Texas', 'Washington']
var holidaysArr = ['anniversary', 'birthday', 'housewarming', 'wedding']
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

getAnswers(people)

// Clue #1: Greg's friend wasn't Ellen Fairview, who didn't live in Ohio. The birthday girl didn't have her party on Friday.
function isThePerson (arr) {
  // Remove obvious based on name and relationship given:
  if (arr.firstName === 'Ellen' && arr.heOrShe === 'he') return false
  if (arr.firstName === 'Heather' && arr.heOrShe === 'he') return false
  if (arr.firstName === 'Rick' && arr.heOrShe === 'she') return false
  if (arr.firstName === 'Walter' && arr.heOrShe === 'she') return false
  if (arr.firstName === 'Ellen' && arr.relationship === 'father') return false
  if (arr.firstName === 'Heather' && arr.relationship === 'father') return false
  if (arr.firstName === 'Walter' && arr.relationship === 'sister') return false
  if (arr.firstName === 'Rick' && arr.relationship === 'sister') return false
  // *************************************************************************
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

  // Determinations from above clues (all of the following may not be necessary to achieve the result, but they are shown for clarity).
  // We know Ellen is not the friend (Clue #1), not the father, and not the sister (Clue #5). Therefore, Ellen is the cousin.
  if (arr.firstName === 'Ellen' && arr.relationship !== 'cousin') return false
  if (arr.firstName !== 'Ellen' && arr.relationship === 'cousin') return false
  // Clue #5 states that the wedding was for Greg's cousin. Therefore, Ellen's event is the wedding.
  if (arr.firstName === 'Ellen' && arr.holiday !== 'wedding') return false
  if (arr.firstName !== 'Ellen' && arr.holiday === 'wedding') return false
  // Clue #1 states 'birthday girl,' so the birthday has to be either Ellen's or Heather's. Since above determined
  // Ellen had the wedding, then Heather had the birthday.
  if (arr.firstName === 'Heather' && arr.holiday !== 'birthday') return false
  if (arr.firstName !== 'Heather' && arr.holiday === 'birthday') return false
  // Since Heather's event did not take place Saturday (Clue #2, Rick), Wednesday (Clue #5), or Friday (Clue #1, birthday girl):
  // Therefore, Heather's event was on Thursday.
  if (arr.firstName === 'Heather' && arr.dayOfWeek !== 'Thursday') return false
  if (arr.firstName !== 'Heather' && arr.dayOfWeek === 'Thursday') return false
  // Clue #5 states Walter's event was one day earlier than DeForest, so his event cannot be on Wednesday. Walter's event is on
  // Friday.
  if (arr.firstName === 'Walter' && arr.dayOfWeek !== 'Friday') return false
  if (arr.firstName !== 'Walter' && arr.dayOfWeek === 'Friday') return false
  // It follows that Rick's last name is DeForest since Clue #6 states Walter's event was one day earlier than DeForest.
  if (arr.firstName === 'Rick' && arr.lastName !== 'DeForest') return false
  if (arr.firstName !== 'Rick' && arr.lastName === 'DeForest') return false
  // It follows that Walter's last name is Gray
  if (arr.firstName === 'Walter' && arr.lastName !== 'Gray') return false
  if (arr.firstName !== 'Walter' && arr.lastName === 'Gray') return false
  // It follows that Walter Gray is the father (Clue #3 states father's last name was Gray).
  if (arr.firstName === 'Walter' && arr.relationship !== 'father') return false
  if (arr.firstName !== 'Walter' && arr.relationship === 'father') return false
  // The anniversary was in Montana (Clue #6) and Walter's event was the anniversary.
  if (arr.holiday === 'anniversary' && arr.state !== 'Montana') return false
  if (arr.holiday !== 'anniversary' && arr.state === 'Montana') return false
  // Therefore, Heather's event was in Ohio.
  if (arr.firstName === 'Heather' && arr.state !== 'Ohio') return false
  if (arr.firstName !== 'Heather' && arr.state === 'Ohio') return false
  // Therefore, Rick's housewarming took place in Texas.
  if (arr.firstName === 'Rick' && arr.state !== 'Texas') return false
  if (arr.firstName !== 'Rick' && arr.state === 'Texas') return false

  return true
}

function getAnswers (arr) {
  var outputArr = []
  for (var i = 0; i < arr.length; i++) {
    if (isThePerson(arr[i])) {
      outputArr.push(arr[i])
    }
  }
  printAnswers(outputArr)
}

function printAnswers (arr) {
  for (var i = 0; i < arr.length; i++) {
    var outputStr = arr[i].firstName + ' ' + arr[i].lastName + ' lives in ' + arr[i].state + ' and is Greg\'s ' +
    arr[i].relationship + '. ' + arr[i].heOrShe[0].toUpperCase() + arr[i].heOrShe.substring(1) + ' had '
    var checkVowel = 'aeiou'
    if (checkVowel.search(arr[i].holiday[0].toLowerCase()) !== -1) {
      outputStr += 'an '
    } else {
      outputStr += 'a '
    }
    outputStr += arr[i].holiday + ' on ' + arr[i].dayOfWeek + '.'
    console.log(outputStr)
  }
}
