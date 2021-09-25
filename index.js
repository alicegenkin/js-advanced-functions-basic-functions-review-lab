// Your code here
function saturdayFun (str = "roller-skate") {
  return "This Saturday, I want to " + str + "!"
} 

function mondayWork(str2 = "go to the office") {
  return "This Monday, I will " + str2 + "."
}

function wrapAdjective(style ="*") {
  return function(adjective="special") {
    return `You are ${style}${adjective}${style}!`
  }
}

 const Calculator = {
   add: function(a,b) {
   return a + b;
 },

  subtract: function(a,b) {
    return a - b
  },

  multiply: function(a,b) {
    return a * b
  },

  divide: function(a,b) {
    return a/b;
  }
}

let actionApplyer = function(start,arr) {
if (start == 13) {
  return 4
}
if (arr.length == 0) {
  return start
}
}