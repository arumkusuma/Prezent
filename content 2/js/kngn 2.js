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
      .go();
    
      new TypeIt("#salah", {
        speed: 50,
        waitUntilVisible: true,
      })
        .type("Awali Januari mu dengan...", { delay: 300 })
        .delete(3)
        .type(" bahagia")
        .pause(300)
        .delete(6)
        .type("erantem,")
        .pause(500)
        .type( " bergelut bersama ku ")
        .pause(300)
        .type(":(")
        .pause(500)
        .delete(2)
        .type(":)")
        .go();
  
        new TypeIt("#salah1", {
          speed: 50,
          waitUntilVisible: true,
        })
          .type("Akhirnya kita baikan ", { delay: 600 })
          .type("kamu bilang mau diemin aku 2 hari :)")
          .pause(500)
          .delete(36)
          .pause(500)
          .break()
          .type("ya udah lah makasih deh udah di kasianin :)")
          .pause(300)
          .move(5)
          .go();
  
          new TypeIt("#salah2", {
            speed: 50,
            waitUntilVisible: true,
          })
            .type("Siapa tukang bolos?")
            .pause(500)
            .break()
            .type("Mas Arkan Mas Arkan")
            .pause(300)
            .break()
            .type("Pak Amrin ni anaknya ni pak")
            .pause(100)
            .type(" T_T")
            .go();
  
            new TypeIt("#salah3", {
              speed: 50,
              waitUntilVisible: true,
            })
              .type("Kamu cerita ceritaa ><", { delay: 600 })
              .delete(2)
              .type("hehehe")
              .go();
  });


  document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#typing1", {
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
      .go();
    
      new TypeIt("#salah11", {
        speed: 50,
        waitUntilVisible: true,
      })
        .type("Lah kapan ya kamu ngetik kan?", { delay: 300 })
        .pause(500)
        .break()
        .type("kan lagi presentasi ya,")
        .pause(300)
        .type(" kok tiba tiba ada ya?")
        .go();
  
        new TypeIt("#salah111", {
          speed: 50,
          waitUntilVisible: true,
        })
          .type("Ini kita main sih, ", { delay: 600 })
          .type("tapi kamunya keluar keluar terus...")
          .pause(500)
          .go();
  
          new TypeIt("#salah21", {
            speed: 50,
            waitUntilVisible: true,
          })
            .type("first dm?")
            .go();
  
            new TypeIt("#salah31", {
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
            .break()
            .type("Part 2")
            .go();
  });