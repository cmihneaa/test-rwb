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
        avatar: "./image/abc.jpg",
        oldPrice: "21.595 KR",
      },
      {
        round: "Demo Pris",
        button: "Hb4 Taglejlighed",
        newPrice: "36.495 DKK",
        avatar: "",
        oldPrice: "41.995 KR",
      },
      {
        round: "Nyhed",
        button: "Multiform, mettes kokken",
        newPrice: "116.495 DKK",
        avatar: "",
        oldPrice: "121.795 KR",
      },
      {
        round: "Kampagne",
        button: "Jke Design - Stensballe",
        newPrice: "16.495 DKK",
        avatar: "",
        oldPrice: "21.595 KR",
      },
      {
        round: "Demo Pris",
        button: "Hb4 Taglejlighed",
        newPrice: "36.495 DKK",
        avatar: "",
        oldPrice: "41.995 KR",
      },
      {
        round: "Nyhed",
        button: "Multiform, mettes kokken",
        newPrice: "116.495 DKK",
        avatar: "",
        oldPrice: "121.795 KR",
      },
    ];

    document.getElementById("items").innerHTML = cards
      .map(
        (item) =>
          `<div class='card' style='width:370px;height:543px'>
        <div class='card-top'>
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
      { id: 0, img: "", alt: "img0" },
      { id: 1, img: "", alt: "img1" },
      { id: 2, img: "", alt: "img2" },
      { id: 3, img: "", alt: "img3" },
      { id: 4, img: "", alt: "img4" },
    ];

    document.getElementById("people").innerHTML = peopleImages
      .map(
        (img) =>
          `
        <div class='people-images'></div>
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
