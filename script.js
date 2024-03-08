const myLibrary = [];

function Book(name,author,chapters,chaptersRead,finished) {
    this.name = name;
    this.author = author;
    this.chapters = chapters;
    this.chaptersRead = chaptersRead;
    this.finished = finished;
}

const first = new Book("Naruto", "Kishimoto", 800, 300, false);

function addBookToLibrary() {
  // do stuff here
}

let cardBacks = document.querySelector('.card-back');

document.querySelectorAll('.card-front').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flip');
    card.nextElementSibling.classList.toggle('flip');
  });
});

document.querySelectorAll('.card-back').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flip');
  });
});