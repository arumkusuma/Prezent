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
        }, 5000);
      });
    })
    .type("Aku kasi tau ya?")
    .go();

    new TypeIt("#typing2", {
        speed:50,
        waitUntilVisible: true,
      })
        .type("")
        .exec(async () => {
          //-- Return a promise that resolves after something happens.
          await new Promise((resolve, reject) => {
            setTimeout(() => {
              return resolve();
            }, 5000);
          });
        })
        .type("Minimal kalo mau ga ketauan, akun seccondnya ga follow first lah mas")
        .go();
  
    new TypeIt("#salah", {
      speed: 50,
      waitUntilVisible: true,
    })
      .type("Kamu  bingung ga si kenapa tiba tiba aku jauhin kamu...", { delay: 300 })
      .go();

      new TypeIt("#salah1", {
        speed: 50,
        waitUntilVisible: true,
      })
        .type("Akun akun arkan", { delay: 600 })
        .type(" banyak banget akunmu kan Ya Allah")
        .go();

        new TypeIt("#salah2", {
          speed: 50,
          waitUntilVisible: true,
        })
          .type("Aduh aku di maafin mas arkan", { delay: 600 })
          .break({delay:500})
          .type("makasi ya mas udah maafin aku :)")
          .go();

          new TypeIt("#salah3", {
            speed: 50,
            waitUntilVisible: true,
          })
            .type("Something about", { delay: 600 })
            .break({delay:500})
            .type("f")
            .pause(300)
            .type(" r")
            .pause(300)
            .type(" e")
            .pause(300)
            .type(" a ")
            .type("k")
            .pause(300)
            .type(" :)")
            .go();
});