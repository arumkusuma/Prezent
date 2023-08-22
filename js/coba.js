document.addEventListener("DOMContentLoaded", function () {
new TypeIt(".salah", {
  Strings:['Spesial'],
  speed: 100,
})
  .type("Spesial", { delay: 300 })
  .move(-3)
  .delete(1)
  .type("c")
  .move(null, { to: "END" })
  .type(" for")
  .pause(300)
  .type("you")
  .move(-4)
  .type("o")
  .move(null, { to: "END" })
  .type("h of today.")
  .pause(500)
  .break({ delay: 500 })
  .break({ delay: 500 })
  .type("<em>- Will Rogers</em>")
  .go();
});