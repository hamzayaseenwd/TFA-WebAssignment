var cardObj = [
    {
      id: 0,
      image:
        "https://us.123rf.com/450wm/blueone/blueone1301/blueone130100148/17553454-driving-in-the-night-city.jpg?ver=6",
      title: "Card title",
      des: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 1,
      image: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
      title: "Our card",
      des: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, enim.",
    },
    {
      id: 2,
      image: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
      title: "Our card",
      des: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, enim.",
    },
    {
      id: 3,
      image: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
      title: "Our card",
      des: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, enim.",
    },
    {
      id: 4,
      image: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
      title: "Our card",
      des: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, enim.",
    },
    {
      id: 5,
      image: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
      title: "Our card",
      des: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, enim.",
    }
  ];
  
  // console.log(cardObj);
  
  var cardCon = document.getElementById("cardContent");
  
  for (var i = 0; i < cardObj.length; i++) {
    var image = cardObj[i].image;
    var title = cardObj[i].title;
    var description = cardObj[i].des;
    var id = cardObj[i].id;
    //   console.log(image);
    cardCon.innerHTML += `
    <div class="card m-2" style="width: 18rem">
          <img
            src=${image}
            class="card-img-top"
            alt="..."
            height="160px"
          />
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${description}</p>
          </div>
    </div>
    `;
  }
  var arr = [];
  function cart(index) {
    //   console.log(index);
    console.log(cardObj[index]);
    var sendingObj = cardObj[index];
    arr.push(sendingObj);
    //   console.log(arr);
    localStorage.setItem("cartData", JSON.stringify(arr));
  }





  var cardObj = [
    {
      id: 0,
      image:
        "https://us.123rf.com/450wm/blueone/blueone1301/blueone130100148/17553454-driving-in-the-night-city.jpg?ver=6",
      title: "Card title",
      des: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 1,
      image: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
      title: "Our card",
      des: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, enim.",
    },
    {
      id: 2,
      image: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
      title: "Our card",
      des: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, enim.",
    },
    {
      id: 3,
      image: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
      title: "Our card",
      des: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, enim.",
    },
    {
      id: 4,
      image: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
      title: "Our card",
      des: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, enim.",
    },
    {
      id: 5,
      image: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
      title: "Our card",
      des: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, enim.",
    }
  ];
  
  // console.log(cardObj);
  
  var cardCon = document.getElementById("cardContent");
  
  for (var i = 0; i < cardObj.length; i++) {
    var image = cardObj[i].image;
    var title = cardObj[i].title;
    var description = cardObj[i].des;
    var id = cardObj[i].id;
    //   console.log(image);
    cardCon.innerHTML += `
    <div class="card m-2" style="width: 18rem">
          <img
            src=${image}
            class="card-img-top"
            alt="..."
            height="160px"
          />
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${description}</p>
          </div>
    </div>
    `;
  }
  var arr = [];
  function cart(index) {
    //   console.log(index);
    console.log(cardObj[index]);
    var sendingObj = cardObj[index];
    arr.push(sendingObj);
    //   console.log(arr);
    localStorage.setItem("cartData", JSON.stringify(arr));
  }
  
