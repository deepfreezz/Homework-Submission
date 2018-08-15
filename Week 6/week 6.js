1
function vehicle (color,code,age){
if (code==1){
  if(year>0){
    console.log(color,"used","car")
  }
  else if(age==0){
    console.log(color,"new","car")
  }
}
  else if(code==2){
  if(vyear>0){
    console.log(color,"used","motorbike")
  }
  else if(year==0){
    console.log(color,"new","motorbike")
  }
 }
}
 vehicle ("red",1,1);

      2
function vehicle (color,code,age){
  if (code==1){
    if(age>0){
    console.log(color,"used","car")
  }
  else if(age==0){
    console.log(color,"new","car")
  }
  else{
    console.log("negative number")
  }
}
else if(code==2){
  if(year>0){
    console.log(color,"used","motorbike")
  }
  else if(age==0){
    console.log(color,"new","motorbike")
  }
}
  else if(code==3){
    if(age>0){
      console.log(color,"used","caravan")
    }
    else if(age==0){
      console.log(color,"new","caravan")
    }
  }
 else if(code==4){
   if(age>0){
     console.log(color,"used","bike")
   }
   else if(age==0){
     console.log(color,"new","bike")
   }
 }
}
 vehicle ("blue",3,1);

3
var instractors = {Yousuf:"Git Bash",
                 Rajaie:"HTML&CSS",
                 Saad:"JavaScript"};
console.log(instractors.Yousuf)
