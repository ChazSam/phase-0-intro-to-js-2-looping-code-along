// Code your solutions in this file
const name = ["Guadalupe", "Ollie", "Aki"];

function writeCards(name){
    let message =[];
    for (let i=0; i<name.length; i++ ){
   message.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`);
}
    return message;
}

function countDown(){
for (let countDown = 10; countDown > -1; countDown--){
    console.log(countDown);
}};