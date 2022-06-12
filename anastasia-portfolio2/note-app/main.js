window.addEventListener('load', () => {
const form = document.querySelector("#content");
const input = document.querySelector("#note-input");
const listEl = document.querySelector("#main-content");
const modell = document.querySelector("#modell");
const modellPar = document.querySelector("#modell-par");
const modellBtn = document.querySelector("#modell-btn");
const seeAllBtn = document.querySelector("#see-all-btn");


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const note = input.value;

    if (!note) {
        alert("Please type something");
        return;
    }

    const noteCard = document.createElement('div');
    noteCard.classList.add('note-card');
    listEl.appendChild(noteCard);

    const noteCardContainer = document.createElement('div');
    noteCardContainer.classList.add('note-card-container');
    noteCard.appendChild(noteCardContainer);

    const noteCardPar = document.createElement('p');
    noteCardPar.classList.add('note-car-par');
    noteCardPar.innerHTML = note;
    noteCardContainer.appendChild(noteCardPar);

    const noteBtn = document.createElement('input')
    noteBtn.type = 'button';
    noteBtn.classList.add("note-btn");
    noteBtn.value = 'See All';
    noteCard.appendChild(noteBtn);

    const deleteNoteBtn = document.createElement('button');
    deleteNoteBtn.type = "button";
    deleteNoteBtn.classList.add('delete-note-btn');
    deleteNoteBtn.innerHTML = 'X';
    noteCard.appendChild(deleteNoteBtn);


    deleteNoteBtn.addEventListener('click', () => {
        listEl.removeChild(noteCard);
    })

    noteBtn.addEventListener('click', () => {
        modell.classList.add('is-active');
        modellPar.classList.add('is-active');
        modellBtn.classList.add('is-active');
        modellPar.innerHTML = note;    
    
    
        modellBtn.addEventListener('click', () => {
            modell.classList.remove('is-active');
            modellPar.classList.remove('is-active');
            modellBtn.classList.remove('is-active');  
        })
    })

})

})
