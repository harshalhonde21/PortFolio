const addbuton = document.getElementById("click-to-add");
const localStorageUpdate = () =>{
    const textArea = document.querySelectorAll('textarea');
    const information = [];
    console.log(textArea);

    textArea.forEach((info) =>{
        return information.push(info.value)
    })
    console.log(information);

    localStorage.setItem('information', JSON.stringify(information))
}
const addNewNote = (text = '') => {

    const create_note = document.createElement('div');
    create_note.classList.add('create_note');

    const htdat = `
    <div class="operate_me">
            <button class="edit_me"><i class="fa-solid fa-pen"></i></button>
            <button class="delete_me"><i class="fa-solid fa-trash"></i></button>
        </div>
        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class="${text ? "hidden" : ""}" cols="35" rows="14"></textarea>  `;

    create_note.insertAdjacentHTML('afterbegin',htdat);
    document.body.appendChild(create_note);


    // for deleteing edting and main js
    const editbtn = create_note.querySelector('.edit_me');
    const delbtn = create_note.querySelector('.delete_me');
    const div = create_note.querySelector('.main');
    const text_area = create_note.querySelector('textarea');

    // delete my node
    delbtn.addEventListener('click', () => {
        create_note.remove();
        localStorageUpdate();
    })

    //toggle my btn
    text_area.value = text;
    div.innerHTML = text;

    editbtn.addEventListener('click', () => {
        div.classList.toggle('hidden');
        text_area.classList.toggle('hidden');
    })

    text_area.addEventListener('change', (event) => {
        const userValue = event.target.value;
        div.innerHTML = userValue;

        localStorageUpdate();
    })
}

// to take my data from local storage
const notes = JSON.parse(localStorage.getItem('information'));
if(notes) {
    notes.forEach((note) => {
        addNewNote(note)
    })
}

addbuton.addEventListener("click" , () =>{
    addNewNote()
});