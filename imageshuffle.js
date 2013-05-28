$(document).ready(function(){

  var mainArray = $("#someDiv > p"); 
  var oddArray = []; 
  var evenArray = [];
  
  split = function (thisArray) {
    for (i=0; i<thisArray.length; i++){
      if (i===0) {
        evenArray.push(thisArray[i]);
      } else if (i%2===1) {
        oddArray.push(thisArray[i]);
      } else if (i%2===0){
        evenArray.push(thisArray[i]);
      }
    }
    thisArray.splice(0,thisArray.length);
  };  
    
  shuffle = function (thisArray) {
    var newValue = "";
    var r = Math.random();
    if ((r>0.5 && oddArray.length>0) || (r<=0.5 && evenArray.length===0 && oddArray.length>0)) {
      newValue = Math.floor(r * oddArray.length); 
      thisArray.push(oddArray[newValue]);
      oddArray.splice(newValue,1);
      shuffle(thisArray);
    } else if ((r<=0.5 && evenArray.length>0) || (r>0.5 && oddArray.length===0 && evenArray.length>0)) {
      newValue = Math.floor(r * evenArray.length);
      thisArray.push(evenArray[newValue]);
      evenArray.splice(newValue,1);
      shuffle(thisArray);
    } else if (evenArray.length===0 && oddArray.length===0) {
      return thisArray;
    }
  };
  
  var q = 0;
  animate = function (theArray) {
    theArray[q].className="current";
    $(".current")
      .slideDown(1000)
      .delay(5000)
      .slideUp(1500,function(){
        $(".current").removeClass("current");
        q++;
        if (q===theArray.length){q=0;} 
        animate(theArray);
      });
  };    
    
  split(mainArray);
  shuffle(mainArray);
  animate(mainArray);
  
});
