const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener('click', function() {

    const chapterText = input.value.trim();

    if (chapterText === "") {
        alert("Please enter a valid chapter.");
        input.focus();
        return;
    }

    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = chapterText; 
    deleteButton.textContent = '❌'; 

    li.appendChild(deleteButton); 

    list.appendChild(li); 

    deleteButton.addEventListener('click', function() {
        list.removeChild(li); 
        input.focus(); 
    });

    input.value = ""; 
    input.focus(); 
});
