'use strict'

class RaceAverage {
  avgMinutes(list_of_times) {
    return race_average
  }

  get_minutes(time_str) {
    let matches =
    time_str.match(/(\d\d):(\d\d) (\w\w), DAY (\d)/)
    let hh = parseInt(matches[1])
    let mm = parseInt(matches[2])
    let xM = matches[3]
    let d = parseInt(matches[4])

    let minutes = (hh%12)*60 + mm + d * (24*60)
    if (xM === 'PM')
      minutes += 12 * 60
    return minutes
  }
}

let string = ["02:00 PM, DAY 19",
 "02:00 PM, DAY 20",
 "01:58 PM, DAY 20"]

let start = ["08:00 AM, DAY 1"]
let sum = 0;
let race_average = new RaceAverage()
for(var i = 0; i < string.length; i++){
  sum += race_average.get_minutes(string[i]) - race_average.get_minutes(start[0])
}
console.log(sum);
race_average.minutes = Math.round(sum / string.length)

race_average.avgMinutes()
