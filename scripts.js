// Function to search through the list
function searchItems() {
  const input = document.getElementById('searchInput');
  const filter = input.value.toUpperCase();
  const sections = document.querySelectorAll('.list');

  sections.forEach(section => {
    const items = section.getElementsByClassName('item');
    for (let i = 0; i < items.length; i++) {
      const title = items[i].getElementsByTagName('h3')[0];
      if (title) {
        const txtValue = title.textContent || title.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          items[i].style.display = "";
        } else {
          items[i].style.display = "none";
        }
      }
    }
  });
}

// Function to filter items by genre (for anime, manga, books)
function filterItems(type) {
  const input = document.getElementById(type + 'Filter');
  const filter = input.value.toUpperCase();
  const list = document.getElementById(type + 'List');
  const items = list.getElementsByClassName('item');

  for (let i = 0; i < items.length; i++) {
    const genre = items[i].getElementsByTagName('p')[2];  // Assuming genre is the 3rd <p> element
    if (genre) {
      const txtValue = genre.textContent || genre.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        items[i].style.display = "";
      } else {
        items[i].style.display = "none";
      }
    }
  }
}
