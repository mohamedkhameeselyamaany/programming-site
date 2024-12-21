function searchLanguage() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const cards = document.querySelectorAll('.language-card');
    let found = false;

    cards.forEach(card => {
        const language = card.getAttribute('data-name').toLowerCase();
        if (language.includes(searchInput)) {
            card.style.display = 'block';
            card.style.opacity = '1'; // إظهار البطاقات
            found = true;
        } else {
            card.style.display = 'none';
            card.style.opacity = '0'; // إخفاء البطاقات مع تأثير
        }
    });

    const noResultsMessage = document.getElementById('noResultsMessage');
    if (!found) {
        if (!noResultsMessage) {
            const message = document.createElement('p');
            message.id = 'noResultsMessage';
            message.textContent = 'No results found';
            message.style.textAlign = 'center';
            message.style.fontSize = '1.2rem';
            message.style.color = '#555';
            document.querySelector('#languages').appendChild(message);
        }
    } else {
        if (noResultsMessage) {
            noResultsMessage.remove();
        }
    }
}
