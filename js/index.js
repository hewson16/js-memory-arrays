const spellBook = ['Expelliarmus', 'Accio', 'Expecto Patronum', 'Wingardium Leviosa'];
let mp = 50;

const castSpell = () => {
    console.log('spell casted');
    // choose a random spell from the array
    const randomIndex = Math.floor(Math.random() * spellBook.length);
    const randomSpell = spellBook[randomIndex];

    //show the user the spell on the screen
    const spellElement = document.getElementById('spell');
    const message = `You cast the ${randomSpell} spell`;
    spellElement.textContent = randomSpell;

    // subtract 5 mana points from the total
    mp = mp - 5;
    console.log('Mana', mp);

    // show the user the new mana points on the screen
    const manaElement = document.getElementById('mana-points');
    manaElement.textContent = mp;
}
