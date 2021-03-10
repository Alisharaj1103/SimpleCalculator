function clr() // clearing the screen
{
document.getElementById("inputScreen").value = ""
}
function display(val)
{
document.getElementById("inputScreen").value+=val
 }
//function for evaluation
function calculate()
{
let x = document.getElementById("inputScreen").value
let y = eval(x)
document.getElementById("inputScreen").value = y
}



