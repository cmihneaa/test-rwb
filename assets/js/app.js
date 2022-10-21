// An object literal
let app = {
  init: function () {
    app.functionOne();
  },
  functionOne: function () {
    const cards = [
      {
        round: "Kampagne",
        button: "Jke Design - Stensballe",
        newPrice: "16.495 DKK",
        avatar: "../assets/img/foto.png",
        oldPrice: "21.595 KR",
      },
      {
        round: "Demo Pris",
        button: "Hb4 Taglejlighed",
        newPrice: "36.495 DKK",
        avatar: "../assets/img/foto2.png",
        oldPrice: "41.995 KR",
      },
      {
        round: "Nyhed",
        button: "Multiform, mettes kokken",
        newPrice: "116.495 DKK",
        avatar: "../assets/img/foto3.png",
        oldPrice: "121.795 KR",
      },
      {
        round: "Kampagne",
        button: "Jke Design - Stensballe",
        newPrice: "16.495 DKK",
        avatar: "../assets/img/foto.png",
        oldPrice: "21.595 KR",
      },
      {
        round: "Demo Pris",
        button: "Hb4 Taglejlighed",
        newPrice: "36.495 DKK",
        avatar: "../assets/img/foto2.png",
        oldPrice: "41.995 KR",
      },
      {
        round: "Nyhed",
        button: "Multiform, mettes kokken",
        newPrice: "116.495 DKK",
        avatar: "../assets/img/foto3.png",
        oldPrice: "121.795 KR",
      },
    ];

    document.getElementById("items").innerHTML = cards
      .map(
        (item) =>
          `<div class='card'>
        <div class='card-top'>
         <img style="border-top-left-radius: 5px; border-top-right-radius: 5px;" src=${
           item.avatar
         } alt=''/>
          <div class='circle-description'>${item.round.toUpperCase()}</div>
          <button class='button-description'>${item.button.toUpperCase()} ></button>
        </div>
        <div class="card-body">
          <div class="card-text">
            <span class='new-price'>${item.newPrice}</span>
            <span class='old-price'>${item.oldPrice}</span>
          </div>
        </div>
      </div>`
      )
      .join("");

    const peopleImages = [
      { id: 0, img: "../assets/img/poza5.png", alt: "img0" },
      { id: 1, img: "../assets/img/poza3.png", alt: "img1" },
      { id: 2, img: "../assets/img/poza1.png", alt: "img2" },
      { id: 3, img: "../assets/img/poza4.png", alt: "img3" },
      { id: 4, img: "../assets/img/poza2.png", alt: "img4" },
    ];

    document.getElementById("people").innerHTML = peopleImages
      .map(
        (human) =>
          `
        <div class='people-images'>
          <img src=${human.img} alt="" />
        </div>
      `
      )
      .join("");
  },
};
(function () {
  // your page initialization code here
  // the DOM will be available here
  app.init();
})();
