'use strict';
let p=[{
    disCurrScore:document.querySelector('#current--0'),
    distotalScore:document.querySelector('#score--0'),
    totalScore:0
},
{
    disCurrScore:document.querySelector('#current--1'),
    distotalScore:document.querySelector('#score--1'),
    totalScore:0
}
];

let rollDice=document.querySelector('.btn--roll');
let diceImg=document.querySelector('.dice');
let disCurrScore_p1=document.querySelector('#current--1');
let holdScore=document.querySelector('.btn--hold');
let newGameBtn=document.querySelector('.btn--new');
let player=document.querySelectorAll('.player');
let currentScore_p=0;
let diceScore,player_active=0;
let playing=true;

//---------Reseting the player-----------
let reset_player=(player)=>{
    diceScore=0;
    currentScore_p=0;
    player.disCurrScore.textContent=0;
}


// --------switching players--------

let switchPlayer=()=>{
    player[player_active].classList.remove('player--active');
    player[Number(!player_active)].classList.add('player--active');
    reset_player(p[player_active]);
    player_active= Number(!player_active);
// console.log(`Active player is ${player_active}`);
}

//--------Rolling dice and showing img--------

rollDice.addEventListener('click',()=>{
    if (playing)
    {
        diceScore=Math.floor(Math.random()*6+1);
    if (diceScore===1){
        diceImg.src=`dice-1.png`;
        switchPlayer();
    }
    else if(p[0].totalScore<30 && p[1].totalScore<30)
    {
        currentScore_p+=diceScore;
        diceImg.classList.remove('hidden');
        diceImg.src=`dice-${diceScore}.png`;
    p[player_active].disCurrScore.textContent=currentScore_p;
    }
    else{
    playing=false;
    
    }
}
   });

//----------Hold Score Btn----------

holdScore.addEventListener('click',()=>{
   p[player_active].totalScore+=currentScore_p;
   p[player_active].distotalScore.textContent=p[player_active].totalScore;
   currentScore_p=0;
   p[player_active].disCurrScore.textContent=0;
   switchPlayer();
   });

// ---------New Game------------

newGameBtn.addEventListener('click',()=>{
    currentScore_p=0;
    diceScore=0;
    diceImg.classList.add('hidden');
for (let i = 0; i < p.length; i++) {
  
    p[i].disCurrScore.textContent=0;
    p[i].distotalScore.textContent=0;
    p[i].totalScore=0;
   
}
});


// -------------- Coding Challange -------
let players= {
    players:[[
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski'
    ],
  [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
        ]
    ]
    };
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players,
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
    team1: 1.93,
    x: 3.25,
    team2: 2.73,
    },
    };


//   Coding Challanges
const printGoals=(...goalScorers)=>{
console.log(`${goalScorers.length}:0`);
}
    const [players1,players2]=players.players;
    const [gk1,...fieldPlayers1]=players1;
    const [gk2,...fieldPlayers2]=players2;
    const allPLayers=[...players1,...players2];
    const players1Final=[...players1,'Thiago', 'Coutinho','Perisic'];
   let [team1,draw,team2]=[game.odds.team1,game.odds.x,game.odds.team2];
    printGoals(...game.scored);
    team1 > team2 && console.log("team2 is more likely to win" );
    team1 < team2 && console.log('Team 1 is more likely to win') || team1===team2 && console.log('Match is a Draw');
// for(let [i,items] of allPLayers.entries()){
//     console.log(`${i+1}: ${items}`);
// }

for(let [count,el] of game.scored.entries()){
    console.log(`Goal ${count+1}: ${el}`);
}
 
let sum=0;    
for(let x of Object.values(game.odds))
sum+=x;
console.log(sum/3);
console.log(`Odd of victory ${game.team1}: ${team1}`);
console.log(`Odd of victory Draw: ${draw}`);
console.log(`Odd of victory ${game.team2}: ${team2}`);
 let scorer={};
 for(let pl of game.scored){
    scorer[pl] ?scorer[pl]++:scorer[pl]=1;
 }
console.log(scorer);

const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🔶 Yellow card'],
    ]);
gameEvents.delete(64);
console.log(gameEvents);
const events= [...new Set(gameEvents.values())];

console.log(`An event happened, on average, every ${90/gameEvents.size} minutes`);
 for (const [keys,values] of gameEvents.entries()) {
    console.log(`[${keys<=45?"First Half":"Second Half"}] ${keys} : ${values}`);
 } 












// ---------Guess Number Game Using maps 

// let guess=new Map([
//    ['Number',Math.floor(Math.random()*6+1)],
//    [true,"Correct"],
//    [false,"Wrong"]
// ]);

// let guessNumber=Number(prompt('Guess The number from 1-6'));
// console.log(`Random Number was ${guess.get('Number')}`);
// console.log(guess.get('Number')===guessNumber);


// */

// ---------Copying objects---------
// const omerDetails={
// age:20,
// lastName: "Awan",
// family:['Haris','Atif'],
// };
// const hasnatDetails={...omerDetails};
// hasnatDetails.family.push('Abdullah','Abubakar');
// console.log(omerDetails);
// console.log(hasnatDetails);         
//  object is copied without reference but object in object(Array in object) is still not copied without reference so changing an array in one object will cause a change in other object..




// --------Destructuring-----------

//    let test1=(x,y)=>{
//     console.log("Test ",x1,y1);
//     return ['Omer','Awan'];
// }

// let [value1,value2]=test();
// console.log(value1,value2);

// let stringVal=['Omer','Awan'];
// let [a,b]=stringVal;
// console.log(a,b); 

// let nested=[2,3,[4,5]];
// let [x, ,[y,z]]=nested;
// console.log(x,y,z);
