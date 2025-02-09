const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

let chaptersArray = getChapterList();
chaptersArray.forEach(chapter => displayList(chapter));

button.addEventListener('click', function() {
    const chapterText = input.value.trim();

    if (chapterText === "") {
        alert("Please enter a valid chapter.");
        input.focus();
        return;
    }

    displayList(chapterText);
    chaptersArray.push(chapterText);
    setChapterList();

    input.value = ""; 
    input.focus(); 
});

function displayList(item) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = item;  
    deleteButton.textContent = '❌';  

    li.appendChild(deleteButton); 
    list.appendChild(li); 


    deleteButton.addEventListener('click', function() {
        deleteChapter(item);
        list.removeChild(li);
    });
}

function setChapterList() {
    localStorage.setItem('bomChapters', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('bomChapters')) ?? []; 
}

function deleteChapter(chapter) {

    chaptersArray = chaptersArray.filter(item => item !== chapter);


    setChapterList();
}

