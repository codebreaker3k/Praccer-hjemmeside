console.log ("Halla Joakim")

let teamArray = ["MUTD, Liverpool, Swansea, MCITY, Arsenal, Tottenham, Wolves, NewCastle, Brentford, Fulham"]
console.log(teamArray)

teamArray.pop( )
console.log (teamArray)

teamArray.push ("Møkkalag1, Møkkalag2")
console.log(teamArray)

// teamArray= ArrayUtils.removeElement(teamArray[1])
// gi meg gjerne en linje og eksempel på å fjerne spesifikk array

const team = [{
teamName:" Tottenham"
}]
console.log(team)


const MUTD = team[1];
const Liverpool = team[2];
const Swansea = team [3];
const Arsenal = team[4];
const Tottenham = team[5];

console.log(teamArray[5]); "Dette er index 5"


let Topp2Array = ["MEG og DEG"]
console.log(Topp2Array)

const variabel3 = "Mot Verden"
console.log(`${Topp2Array} ${variabel3}`)


// const noyski = personer[1]
//const Tullegutten = personer[2]

//const personer = [
//      {
//      Fornavn: "noyski",
//      Etternavn: "oyski",
//      Alder: 300,
//      },
//      {
//    Fornavn: "Tullegutten",
//    Etternavn: "Tei",
//    Alder: 337 
//  } 
//  ]; 
//console.log

//const poyskiAlder = noyski.Alder
//const poyskiEtternavn = oyski.Etternavn
//const TulleguttenEtternavn = jättegammel.Etternavn
//const TulleguttenAlder = Tullegutten.Alder

//console.log (personer[1].Fornavn + personer.Etternavn, + personer.Alder);
//console.log(personer[2].Fornavn, + personer.Etternavn, + personer.Alder);


//simpleFunction()

function getRandomNumber(){
    return Math.floor(Math.random() * 5);
}

getRandomNumber(1-5 + 1)

console.log(getRandomNumber)

function giveCompliment(){
    const compliments = [
        "You're a wizard! Harry?",
        "What a strong Barbarian!",
        "Now that's sneaky, Rogue!",
        "I see nature has been kind to you, Druid",
        "THE BEST",
        "HAHA YOUR FUN",
        "KLARTE DU DET IGJEN?",
        "YOU MUST BE A GENIUS!",
        
    ]

const randomIndex = Math.round(Math.random() * (compliments.length -1));
const compliment = compliments[randomIndex]
return compliment 
}
console.log(giveCompliment())


/* IndexOff for å fjerne noe spesifikt ut fra et array*/

/* ' Single-line syntax: -- "untermined string literal - hvorfor? */

let Alder = 20
let Alder2 = 16-17
if (Alder>=18){
    console.log("\nDu kan kjøpe sprit \n")
}else{Alder2<=18
    console.log("'\nDu kan kjøpe øl\n")
}
//else if (Alder2) {"\nDrikkeru allerede?! \n"}
    