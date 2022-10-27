//uses if statements to assign a numerical value of compatibility

// test objects
const jazz = {
    lastName: [
        "stuart",
        "math",
        "person",
    ]
}

const ballet = {
    lastName: [
        "siu",
        "nick",
        "sadie"
    ]
}

const contemp = {
    lastName: [
        "stuart",
        "grace",
        "lindsey"
    ]
}

const hiphop = {
    lastName: [
        "siu",
        "no",
        "one"
    ]
}


function compatibility (order,clas){
    let score = 0;
    let arr = order;
  //iterates through class, then lastnames
    for( let i = 0; i< order.length - 3;i++){

        for(let j =0; j < order[i].lastName.length; j++){
    
      
    //compatibilty score
    if(order[i].lastName[j] == order[i+1].lastName[j]){
        score+= 3
    } else if (order[i].lastName[j] == order[i+2].lastName[j]){
        score += 2
    } else if (order[i].lastName[j] == order[i+3].lastName[j]){
        score += 1
    }
    
    
 
   
   
  }   
 } 
console.log(score)  
}



compatibility([jazz,ballet,contemp,hiphop])