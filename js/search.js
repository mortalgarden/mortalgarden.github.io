function smallFilter() {

  var input, filter, cards, cardContainer, title, number, i;
  input = document.getElementById("smallFilter");
  filter = input.value.toUpperCase();
  cardContainer = document.getElementById("cardsel");
  cards = cardContainer.getElementsByClassName("cardwrap");

  for (i = 0; i < cards.length; i++) {

    title = cards[i].querySelector("div.cardwrap a .cards .cards-item .card-content .card-text h5.ds");
    number = cards[i].querySelector("div.cardwrap a .cards .cards-item .card-content .card-text span.nmbr");

    if (title.innerText.toUpperCase().indexOf(filter) > -1) {
      cards[i].style.display = "";
    } else if (number.innerText.toUpperCase().indexOf(filter) > -1) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
}
function bigFilter() {

  var input, filter, cards, cardContainer, title, number, i;
  input = document.getElementById("bigFilter");
  filter = input.value.toUpperCase();
  cardContainer = document.getElementById("cardsel");
  cards = cardContainer.getElementsByClassName("cardwrap");

  for (i = 0; i < cards.length; i++) {

    title = cards[i].querySelector("div.cardwrap a .cards .cards-item .card-content .card-text h5.ds");
    number = cards[i].querySelector("div.cardwrap a .cards .cards-item .card-content .card-text span.nmbr");

    if (title.innerText.toUpperCase().indexOf(filter) > -1) {
      cards[i].style.display = "";
    } else if (number.innerText.toUpperCase().indexOf(filter) > -1) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
}