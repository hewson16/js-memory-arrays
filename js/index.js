const spellBook = ['Expelliarmus', 'Accio', 'Expecto Patronum', 'Wingardium Leviosa'];
let mp = 50;

const castSpell = () => {
    // keep constants outside of if-statement
    const spellElement = document.getElementById('spell');
    const manaElement = document.getElementById('mana-points');

    // if statement to stop when reach 0 mana
    if (mp > 0) {
        // choose a random spell from the array
        const randomIndex = Math.floor(Math.random() * spellBook.length);
        const randomSpell = spellBook[randomIndex];

        // show the user the spell on the screen
        const message = `You cast the ${randomSpell} spell`;
        spellElement.textContent = message;

        // subtract 5 mana points from the total
        mp = mp - 5;

        // show the user the new mana points on the screen
        manaElement.textContent = mp;
    } else {
        // Show a message if out of mana
        spellElement.textContent = "Sorry, you have run out of mana!";
    }
}
