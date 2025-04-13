// ==========================================
// Opdracht 1. Bob staat erom bekend dat hij vaak vergaderingen mist, omdat hij zijn Outlook-agenda veel "gedoe" vindt.
// Hij print alles liever uit. Schrijf een script dat onderstaande lijst met vergaderingen doorloopt en voor iedere
// tijd "Vergadering om [tijd]" in de console logt.

// Verwachtte uitkomsten:
// Vergadering om 09:00
// Vergadering om 10:30
// Vergadering om 14:00
// Vergadering om 15:30
// Vergadering om 17:00


const meetingTimes = ['09:00', '10:30', '14:00', '15:30', '17:00'];

for (let i = 0; i < meetingTimes.length; i++) {
    console.log("Vergadering om " + meetingTimes[i]);
}

const answer1 = meetingTimes.map(time => console.log(`Vergadering om ${time}`));
// ==========================================

// ==========================================
// Opdracht 2. In tegenstelling tot Bob, werken de andere medewerkers van Loop-it Solutions wél hard.
// Alle medewerkers hebben daarom zojuist 5% salarisverhoging gekregen. Om te voorkomen dat Bob dit handmatig moet aanpassen,
// schrijf jij een script voor hem dat alle salarissen in onderstaande array met 5% verhoogd.
// Let op: hoewel we op dit moment slechts 5 medewerkers hebben, moet jouw script natuurlijk ook werken
// als de array wel 100 of 200 salarissen zou bevatten!

// Verwachtte uitkomst:
// console.log(salaries) geeft [3360, 2467.5, 2940, 3675, 2940]

const salaries = [3200, 2350, 2800, 3500, 2800];

// Solution 1
const answerTwoArray = [];
for (let i = 0; i < salaries.length; i++) {
    let increasedSalary = salaries[i] * 1.05;
    answerTwoArray.push(increasedSalary)
}
console.log(answerTwoArray)

// Solution 2

const answer2 = salaries.map(salary => salary * 1.05)
console.log(answer2);


// ==========================================
// Opdracht 3. Eén van Bob's taken is medewerkers feliciteren met hun "zoveelste" verjaardag.
// Daarvoor moet hij natuurlijk wel weten hoe oud iemand is geworden - en hoofdrekenen is niet zijn sterkste kant.
// Schrijf een script dat de array met geboortedata omzet naar een leeftijd, ervan uitgaande dat het huidige jaar 2025 is.

// Verwachte uitkomst:
// console.log(birthYears) geeft [30, 28, 35, 22, 43]

const birthYears = [1995, 1997, 1990, 2003, 1982];

for (let i = 0; i < birthYears.length; i++) {
    let age = 2025 - birthYears[i];
    console.log(age)
}

const answer3 = birthYears.map(year => new Date().getFullYear() - year)

console.log(answer3)
// ==========================================


// ==========================================
// Opdracht 4. Bob houdt bij hoeveel verlofuren medewerkers per maand opnemen. Nu wil hij voor het nieuwe jaar een bonusstructuur toepassen:
// - Even getallen (bijvoorbeeld 2, 4, 6 uur) worden vermenigvuldigd met 2, omdat medewerkers die hun verlof in nette blokken opnemen, worden beloond.
// - Oneven getallen (bijvoorbeeld 3, 5, 7 uur) worden vermenigvuldigd met 0.5, omdat Bob onregelmatig verlof wil ontmoedigen
// Schrijf een script dat de verlof-uren aanpast op basis van deze bonus-regeling.

// Verwachte uitkomst:
// console.log(leaveHours) geeft [12, 4.5, 4, 3.5, 1.5]

const leaveHours = [6, 9, 2, 7, 3];
const answer4 = leaveHours
    .map(number => {
        if (number % 2 === 0) {
            return number * 2;
        } else {
            return number * 0.5;
        }
    })
console.log(answer4)
// ==========================================


// ==========================================
// Opdracht 5 (BONUS). Na een dag bij Loop-it Solutions zit je er lekker in, tot je beseft dat één van de machines de
// productiecodes verkeerd genereert en Bob deze altijd met de hand verbetert. Geen wonder dat er zo weinig werk verzet wordt...
// Elke code bevat onnodige spaties en rare hoofdletters. Schrijf een script dat de codes in één keer corrigeert.

// Tip: je hebt hiervoor 2 verschillende methodes nodig. Deze heb je nog niet geleerd, dus bekijk hiervoor deze MDN-artikelen eens:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

// Verwachte uitkomst:
// console.log(productionCodes) geeft ['ABC123', 'DEF456', 'GHI789', 'JKL012']

// ==========================================

const productionCodes = [" abC123  ", "  DEF456", "ghi789  ", "JKL012"];

const answer5 = productionCodes
    .map(code => code
        .toUpperCase()
        .trim())

console.log(answer5);
