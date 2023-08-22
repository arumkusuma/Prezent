document.addEventListener("DOMContentLoaded", function () {
  new TypeIt("#typing", {
    speed:50,
    waitUntilVisible: true,
  })
    .type("")
    .exec(async () => {
      //-- Return a promise that resolves after something happens.
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          return resolve();
        }, 5500);
      });
    })
    .break({delay:500})
    .type("Kira kira, di bulan apa kita ketemu??")
    .go();
  
    new TypeIt("#salah", {
      speed: 50,
      waitUntilVisible: true,
    })
      .type("Spesial", { delay: 300 })
      .move(-3)
      .delete(1)
      .type("c")
      .move(null, { to: "END" })
      .type(" for you")
      .pause(300)
      .move(-7)
      .type(" just ")
      .move(7)
      .pause(500)
      .type( " hehe <3")
      .pause(300)
      .delete(2)
      .type(":)")
      .go();

      new TypeIt("#salah1", {
        speed: 50,
        waitUntilVisible: true,
      })
        .type("Tau Anggita? ", { delay: 600 })
        .type("Iya yang waktu itu ngambek gara gara kamu")
        .pause(300)
        .move(-5)
        .pause(300)
        .delete(9)
        .pause(500)
        .type("pas main sama")
        .pause(300)
        .move(5)
        .go();

        new TypeIt("#salah2", {
          speed: 50,
          waitUntilVisible: true,
        })
          .type("Tebak siapa yang suka fitnah", { delay: 600 })
          .break({delay:500})
          .type("Betul banget Mamas ni kang fitnah ya?")
          .pause(300)
          .move(-11)
          .delete(7)
          .type("ga sengaja")
          .pause(300)
          .move(1)
          .type("nge")
          .pause(150)
          .move(7)
          .type("fahri ")
          .move(3)
          .go();

          new TypeIt("#salah3", {
            speed: 50,
            waitUntilVisible: true,
          })
            .type("Something about", { delay: 600 })
            .break({delay:500})
            .type("C")
            .pause(300)
            .type(" U")
            .pause(300)
            .type(" T")
            .pause(300)
            .type(" E ")
            .type("><")
            .pause(300)
            .delete(2)
            .type(":)")
            .go();
});