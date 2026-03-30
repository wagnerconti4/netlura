// Captura o clique nos perfis e armazena no localStorage
document.querySelectorAll('.profile').forEach(profile => {
    profile.addEventListener('click', (e) => {
        const img = profile.querySelector('img');
        const name = profile.querySelector('figcaption').textContent;
        const imageUrl = img.src;
        
        // Armazena no localStorage
        localStorage.setItem('activeProfile', JSON.stringify({
            name: name,
            image: imageUrl
        }));
    });
});
