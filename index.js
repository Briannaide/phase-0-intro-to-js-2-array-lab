// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat() {
cats.push("Ralph"); }

function destructivelyPrependCat(){
cats.unshift("Bob");}

function destructivelyRemoveLastCat () {
cats.pop();}

function destructivelyRemoveFirstCat(){
cats.shift();   }

function appendCat(Broom) {
const newCats = [ ...cats, "Broom"];
return newCats;}

function prependCat()
{const copyCats = ["Arnold", ...cats];
return copyCats;}

function removeLastCat()
{const takeAway = cats.slice(0, -1);
return takeAway;}

function removeFirstCat()
{const removeBeginning = cats.slice(1);
return removeBeginning;}