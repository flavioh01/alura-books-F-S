function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
}

function toggleBackground() {
    document.body.classList.toggle('black-bg');
    document.body.classList.toggle('white-bg');
}

function showBook(bookId) {
    const bookDetails = {
        livro1: 'Sinopse do Livro 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id sapien vitae nunc faucibus dignissim.',
        livro2: 'Sinopse do Livro 2: Integer in diam ut ligula sodales elementum. Proin ac lectus ut nisi bibendum pharetra.',
        livro3: 'Sinopse do Livro 3: Suspendisse potenti. Phasellus viverra est sit amet libero dictum, a fermentum ligula convallis.',
        livro4: 'Sinopse do Livro 4: Nam et lorem a sapien lacinia elementum. Morbi ut orci at nulla lacinia tempor.',
        livro5: 'Sinopse do Livro 5: Duis sed lectus et odio scelerisque euismod. Curabitur euismod urna sed ligula euismod, vel sagittis purus gravida.'
    };

    document.getElementById('book-details').innerText = bookDetails[bookId];
}
