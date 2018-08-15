var myObject = {input:"Hello",
  output:"Hi! How are you"
}
// console.log(myObject)
function reply(){
  var question = document.getElementById("input").value;
  if (question==myObject.input){
    document.getElementById('output').value=myObject.output;
  }
else {
document.getElementById('output').value= "error";
}
}
