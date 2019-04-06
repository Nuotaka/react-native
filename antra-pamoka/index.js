let vardai = ["Liepa", "Nojus", "Joris", "Egle"];
console.log(vardai[2]);

let draugas1 = {
	vardas: "Joris",
	amzius: 12
}

let draugas2 = {
	vardas: "Liepa",
	amzius: 12
}

console.log(draugas1.vardas + draugas1.amzius);
console.log("-----------------------------");
console.log("Mano draugės vardas " + draugas1.vardas + ", jai yra " + draugas1.amzius + " metų.");
console.log(vardai.length);
for (var i = 0; i < vardai.length; i++) {
	console.log(vardai[i]);
}