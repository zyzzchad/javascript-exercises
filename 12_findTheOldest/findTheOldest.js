const findTheOldest = function(people) {
   return people.reduce((oldestPeople,currentPeople)=>{
    let oldestAge=stillAlive(oldestPeople.yearOfDeath,oldestPeople.yearOfBirth)
    let currenAge=stillAlive(currentPeople.yearOfDeath,currentPeople.yearOfBirth)
    if(oldestAge>currenAge){
        return oldestPeople
       }
       else{
        return currentPeople
       }
   })
   
};
function stillAlive(death,birth){
    if(!death){
         death=new Date().getFullYear()
    }
    return death-birth
}

// Do not edit below this line
module.exports = findTheOldest;
