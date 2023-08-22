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
      .type("MAMASSSS ARKANNNNNNNN KENAPA AKU JADI ORANG UTAN?! HA????")
      .go();
    
      new TypeIt("#salah", {
        speed: 50,
        waitUntilVisible: true,
      })
        .type("Malu banget nih", { delay: 300 })
        .break()
        .type("fotoku masuk album mamas T_T")
        .go();
  
        new TypeIt("#salah1", {
          speed: 50,
          waitUntilVisible: true,
        })
          .type("Kebodohan ica", { delay: 600 })
          .go();
  
          new TypeIt("#salah2", {
            speed: 50,
            waitUntilVisible: true,
          })
            .type("Ica push up??")
            .pause(500)
            .break()
            .type("huuu hp aku kena sita gara gara mamas")
            .go();
  
            new TypeIt("#salah3", {
              speed: 50,
              waitUntilVisible: true,
            })
              .type("Gelut ca? mood aku lagi naik turun kamu malah ikutan", { delay: 600 })
              .delete()
              .type("Maaf ya... aku beneran ga sengaja")
              .go();

      new TypeIt("#salah11", {
        speed: 50,
        waitUntilVisible: true,
      })
        .type("Kita ngapain?", { delay: 300 })
        .pause(500)
        .break()
        .type("Push Rank!")
        .pause(300)
        .type(" bentar aja abis itu jauhan,")
        .pause(600)
        .type(" jauhan dikit ga ngaruh wir")
        .go();
  
        new TypeIt("#salah111", {
          speed: 50,
          waitUntilVisible: true,
        })
          .type("ARKAN", { delay: 600 })
          .type(" STRESSSS")
          .delete()
          .type("ARKAN KRINJ")
          .pause(500)
          .go();
  
          new TypeIt("#salah21", {
            speed: 50,
            waitUntilVisible: true,
          })
            .type("Main Gitar?")
            .pause(500)
            .break()
            .type("Tidak, itu bukan bidang saya!")
            .go();
  
            new TypeIt("#salah31", {
              speed: 50,
              waitUntilVisible: true,
            })
            .type("Terakhir di bulan february", { delay: 600 })
            .break({delay:500})
            .type("...")
            .go();
  });