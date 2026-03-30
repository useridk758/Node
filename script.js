// Initialize Lucide icons
lucide.createIcons();

const form = document.getElementById('search-form');
const input = document.getElementById('url-input');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = input.value.trim();
    
    if (query) {
        // Since we are not using back-end scripts yet, 
        // this will just search Google in a new tab.
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
});
