
// 1. Paskaičiuoti pinigų sumą.
// 2. Apskaičiuoti figurų plotą.
// 3. Visos skaičiavimo funkcijos turi būti atskiros.
// 4. Tvarka turi būti nesvarbi turi veikti, sukeitus duomenis vietomis
// 5. Išvesti visus duomenys į ekraną:
// 6. Panaudoti:
// Ciklus, Sąlygos sakinius, funkcijas, console.log()
// Jonas Basanavicius Turi pinigų: 50 eur, Figūra: pavadinimas figūros, jos plotas: 999 kvad. cm.
// 7. Sukelti į github repozitoriją.
// 8. Ir pristatyti prie mokytojo kompiuterio programą, kuria turėsite ištraukti iš Github.com




const vaikuMasyvas = [
    {
        name: 'Jonas',
        surname: 'Basanavicius',
        money: [5, 0.5, 7, 60],
        figure:{
            name: 'Apskritimas',
            r: 3,
        }
    },
    {
        name: 'Vytautas',
        surname: 'Didysis',
        money: [8, 0.75, 7.15, 100],
        figure:{
            name: 'Trikampis',
            a: 5,
            h: 7
        }
    },
    {
        name: 'Antanas',
        surname: 'Smetona',
        money: [8.25, 1.75, 6.15, 10],
        figure:{
            name: 'Stačiakampis',
            a: 55,
            b: 60,
        }
    },
    {
        name: 'Antanas',
        surname: 'Smetona',
        money: [8.25, 1.75, 6.15, 10],
        figure:{
            name: 'Stačiakampis',
            a: 55,
            b: 60,
        }
    }
]


function vardai(i) {
        return (vaikuMasyvas[i].name + " " + vaikuMasyvas[i].surname);
}

function suma(i) {
        var suma = 0;
        for (let f = 0; f < vaikuMasyvas[i].money.length; f++) {
            suma = suma + vaikuMasyvas[i].money[f];
        }
        return suma;
}

function plotas(i) {
        var plotas;
        if (vaikuMasyvas[i].figure.name == "Apskritimas") {
            plotas = Math.PI * vaikuMasyvas[i].figure.r * vaikuMasyvas[i].figure.r;
        } else if (vaikuMasyvas[i].figure.name == "Trikampis") {
            plotas = vaikuMasyvas[i].figure.a * vaikuMasyvas[i].figure.h / 2;
        } else if (vaikuMasyvas[i].figure.name == "Stačiakampis") {
            plotas = vaikuMasyvas[i].figure.a * vaikuMasyvas[i].figure.b;
        } else {
            plotas = ("Nepažįstu tokios figūros");
    }
    return vaikuMasyvas[i].figure.name + " " + plotas;
}

for(let i = 0; i < vaikuMasyvas.length; i++) {
    console.log(vardai(i) + " turi pinigų: " + suma(i) + " Eur , " + " Figūra: " + plotas(i) + " kadratiniai cm");
}