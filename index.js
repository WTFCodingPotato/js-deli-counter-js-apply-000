var number = 0
function takeANumber(line, bool) {
  if(bool){
    number++
    line.push(number)
  }
  return `Welcome, ${name}. You are number ${line.length} in line.`
}
function currentLine(line) {
  if(!line.length){
    return "The line is currently empty."
  }
  var nameAndNumberList = []
  for (let i = 0; i < line.length; i++) {
    nameAndNumberList.push(`${i + 1}. ${line[i]}`)
  }
  return `The line is currently: ${nameAndNumberList.join(', ')}`
}
function nowServing (line) {
  if(!line.length){
    return "There is nobody waiting to be served!"
  }else{
    return `Currently serving ${line.shift()}.`
  }
}
