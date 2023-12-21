var cardObj = [
    {
      id: 0,
      image: "images/reviewImages/1.jpeg",
      title: "Card title",
      des: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 1,
      image: "images/reviewImages/WhatsApp\ Image\ 2023-12-07\ at\ 4.19.10\ PM.jpeg",
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
          <!-- Section School small Cards end -->
          <!-- <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${description}</p>
          </div> -->
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
      image: "images/reviewImages/WhatsApp\ Image\ 2023-12-07\ at\ 4.19.10\ PM.jpeg",
      },
    {
      id: 1,
      image: "images/reviewImages/WhatsApp\ Image\ 2023-12-07\ at\ 4.19.10\ PM.jpeg",
      },
    {
      id: 2,
      image: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
      },
    {
      id: 3,
      image: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
      },
    {
      id: 4,
      image: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
      },
    {
      id: 5,
      image: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
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
  
// nav start

var navBar = document.getElementById("navBar")

// nav End

    // footer start
      var footer = document.getElementById("footer")

      footer.innerHTML += `<main class="container">
      <hr>
      <section class="row">
      <div class="col-md-6">
      <div class='m-2'>
      <h2>
      School Address <br>
      Head Office:
                  </h2>
                  <p><i class="fa-solid fa-location-dot"></i>Head Office: B-7, Yousuf Plaza, Block 16, F.B Area, Karachi.</p>
                  
                  <p>
                  <a href="tel:000000000" class="text-white text-decoration-none">

                  
                          <i class="fa-solid fa-phone"></i> +92 331-3432382
                          </a>
                  </p>

                  <p>
                  <a href="mailto:someone@gmail.com" class="text-white text-decoration-none">

                          <i class="fa-solid fa-envelope"></i> sales@yourcompany.com
                      </a>
                      </p>
              </div>
          </div>
          <div class="col-md-6">
          <div class="">
                  <h2>
                      School Address <br>
                      Branch Office:
                  </h2>
                  <p><i class="fa-solid fa-location-dot"></i>Branch: A-61, Yousuf Plaza, Block 16, F.B Area, Karachi.</p>
                  <p>
                  <a href="tel:000000000" class="text-white text-decoration-none">
                  
                  
                          <i class="fa-solid fa-phone"></i> +92 331-3432382
                          </a>
                          </p>
                  <a href="" class="text-white fs-3"><i class="fa-brands fa-facebook"></i></a>
                  <a href="" class="text-white fs-3"> <i class="fa-brands fa-instagram"></i></a>
                  <a href="">
                      <!-- <img src="images/icons/app-icon-1.png" alt="">
                  </a>
                  <a href="">
                      <img src="images/icons/app-icon-2.png" alt=""> -->
                      </a>
              </div>
              </div>
      </section>
      <!--  <section class="row m-0">
          <div class="col-md-4">
          <div class="d-flex justify-content-around">
                  
              </div>
          </div>
          <div class="col-md-4">
          <div class="mt-2 m-0">
          <p><a href="" class="text-white text-decoration-none">Design by: Muhammad Hamza Siddiqui</a></p>
          </div>
          </div>  
      </section> -->
          </main>`
    
  // footer End