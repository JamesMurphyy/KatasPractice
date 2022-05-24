
const talkingCalendar = function(date) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  let arr = date.split("/")
  let year = arr[0]
  let month = months[arr[1]-1]
  let day = arr[2]

  if (day.substring(0,1) === '0') {
    day = day.substring(1)
  }
  
  if (day === '1' || day === '21' || day === '31') {
    day  += 'st'
  } else if (day === '2' || day === '22') {
    day  += 'nd'
  } else if (day === '3' || day === '23') {
    day  += 'rd'
  } else {
    day += 'th'
  }
  return `${month} ${day}, ${year}`
};


console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));