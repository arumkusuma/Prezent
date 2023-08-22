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
      .type("")
      .go();
    
      new TypeIt("#salah", {
        speed: 50,
        waitUntilVisible: true,
      })
      .type("Ramalan arum tidak meleset.")
      .pause(500)
      .break()
      .type("(Pake titik.)")
      .go();
  
        new TypeIt("#salah1", {
          speed: 50,
          waitUntilVisible: true,
        })
          .type("Sorry", { delay: 600 })
          .type(" im crying... idk")
          .pause(500)
          .delete(17)
          .pause(300)
          .type(", gimana cara aku lanjutin webnya")
          .pause(300)
          .type(" kamu jahat banget kayak tai.")
          .go();
  
          new TypeIt("#salah2", {
            speed: 50,
            waitUntilVisible: true,
          })
            .type("Maaf aku aneh?", { delay: 600 })
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
              .type(".")
              .go();
  });