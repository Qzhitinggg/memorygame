console.log("This is a memory game");

$(() => {
  const $card = $(".card").on("click", (event) => {
    console.log($(event.currentTarget));
    $(event.currentTarget).toggleClass("card-back");
  });
});
