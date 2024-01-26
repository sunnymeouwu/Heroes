const heroesData = [
  ["Гарри Поттер","Волшебник"],
  ["Добби","Свободный Эльф"],
  ["Дадли","Магл"]
];

function displayHeroes() {
    const container = document.querySelector('.container');
    container.innerHTML = '';

    heroesData.forEach(hero => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.textContent = `${hero[0]} | ${hero[1]}`;
        container.appendChild(card);
    });
}

function addHero() {
    const nameInput = document.getElementById('heroName');
    const classInput = document.getElementById('heroClass');

    const newName = nameInput.value;
    const newClass = classInput.value;

    const newHero = [newName, newClass];
    heroesData.push(newHero);

    displayHeroes();

    
    nameInput.value = '';
    classInput.value = '';
}


displayHeroes();

document.getElementById('addButton').addEventListener('click', addHero);