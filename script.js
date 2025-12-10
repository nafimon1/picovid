 document.addEventListener('DOMContentLoaded', function() {
      const pinsContainer = document.getElementById('pinsContainer');
      const pinData = [
        { id: 9, imageUrl: './images/wayanad.jpg', title: 'Wayanad'},
         { id: 8, imageUrl: './images/shelby.png', title: 'Thomas Shelby'},
         { id: 7, imageUrl: './images/porsche.png', title: 'Porsche'},
         { id: 6, imageUrl: './images/teatalk3.png', title: 'Tea Talk'},
         { id: 5, imageUrl: './images/suicide.png', title: 'Suicide Death'},
        { id: 4, imageUrl: './images/teatalk.png', title: 'Tea Talk'},
        { id: 3, imageUrl: './images/pepsi.png', title: 'Pepsi'},
        { id: 2, imageUrl: './images/teatalk2.jpg', title: 'Tea Talk'},
        { id: 1, imageUrl: './images/lamborghini.png', title: 'Lamborghini'}
      ];

      const renderPins = (pins) => {
        pinsContainer.innerHTML = pins.map(pin => `
          <div class="pin">
            <img src="${pin.imageUrl}" alt="${pin.title}">
            <p>${pin.title}</p>
          </div>
        `).join('');
      };

      renderPins(pinData);
     const searchInput = document.getElementById('searchInput');
      searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const filteredPins = pinData.filter(pin => pin.title.toLowerCase().includes(searchTerm));
        renderPins(filteredPins);
      });
    });
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
const pinsContainer = document.getElementById("pinsContainer");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("fullImage");
const captionText = document.getElementById("caption");
const closeSpan = document.getElementsByClassName("close")[0];

if (pinsContainer) {
  pinsContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
      modal.style.display = "block";
      modalImg.src = e.target.src;
      captionText.innerText = e.target.alt;
    }
  });
}

closeSpan.onclick = function () {
  modal.style.display = "none";
};

modal.addEventListener("click", function (e) {
  if (e.target === modal) modal.style.display = "none";
});