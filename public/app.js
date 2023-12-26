var cardObj = [
    {
      id: 0,
      image: "images/reviewImages/1.jpeg",
      title: "Card title",
      des: "Some quick example text.",
    },
    {
      id: 1,
      image: "images/reviewImages/2.jpeg",
      title: "Our card",
      des: "Some quick example text.",
    },
    {
      id: 2,
      image: "images/reviewImages/3.jpeg",
      title: "Our card",
      des: "Some quick example text.",
    },
    {
      id: 3,
      image: "images/reviewImages/4.jpeg",
      title: "Our card",
      des: "Some quick example text.",
    },
    {
      id: 4,
      image: "images/reviewImages/5.jpeg",
      title: "Our card",
      des: "Some quick example text.",
    },
    {
      id: 5,
      image: "images/reviewImages/6.jpeg",
      title: "Our card",
      des: "Some quick example text.",
    },
    {
      id: 6,
      image: "images/reviewImages/7.jpeg",
      title: "Our card",
      des: "Some quick example text.",
    },
    {
      id: 7,
      image: "images/reviewImages/8.jpeg",
      title: "Our card",
      des: "Some quick example text.",
    },
    {
      id: 8,
      image: "images/reviewImages/9.jpeg",
      title: "Our card",
      des: "Some quick example text.",
    },
    {
      id: 9,
      image: "images/reviewImages/10.jpeg",
      title: "Our card",
      des: "Some quick example text.",
    },
    {
      id: 10,
      image: "images/reviewImages/11.jpeg",
      title: "Our card",
      des: "Some quick example text.",
    },
    {
      id: 11,
      image: "images/reviewImages/12.jpeg",
      title: "Our card",
      des: "Some quick example text.",
    },
    {
      id: 12,
      image: "images/reviewImages/13.jpeg",
      title: "Our card",
      des: "Some quick example text.",
    },
    {
      id: 13,
      image: "images/reviewImages/14.jpeg",
      title: "Our card",
      des: "Some quick example text.",
    },
    {
      id: 14,
      image: "images/reviewImages/15.jpeg",
      title: "Our card",
      des: "Some quick example text.",
    },
    // {
    //   id: 15,
    //   image: "images/reviewImages/16.jpeg",
    //   title: "Our card",
    //   des: "Some quick example text.",
    // },
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



  
    
// nav start

var navBar = document.getElementById("navBar")

// nav End

    // footer start
      var footer = document.getElementById("footer")

      footer.innerHTML += `<main class="container">
      <hr>
      <section class="row">
        <div class="col-md-6">
          <div class='  '><h2>School Address</h2>
                  <h4>Head Office:</h4><hr>
                  <p><i class="fa-solid fa-location-dot"> </i> Head Office: B-7, Yousuf Plaza, Block 16, F.B Area, Karachi.</p>
                  
                  <p><i class="fa-solid fa-phone"></i> +92 331-3432382 </p>

                  <p>
                  <a href="mailto:contact.thefortacademy@gmail.com" class="text-white text-decoration-none"><i class="fa-solid fa-envelope"></i> contact.thefortacademy@gmail.com</a> 
                      </p>
              </div>
          </div>
          <div class="col-md-6">
          <div class="  ">
                  <h2>School Address </h2>
                  <h4>Branch Office:</h4><hr>
                  <p><i class="fa-solid fa-location-dot"> </i> Branch: A-61, Yousuf Plaza, Block 16, F.B Area, Karachi.</p>
                  <p>
                  <i class="fa-solid fa-phone"></i> +92 331-3432382
                  
                          </p><a href="https://www.facebook.com/profile.php?id=61550848445336&mibextid=vk8aRt" class="text-white fs-6 text-decoration-none fs-3"><i class="fa-brands fa-facebook"> </i> Facebook Page</a>
                  <!-- <a href="" class="text-white fs-3"> <i class="fa-brands fa-instagram"></i></a> -->
                  
              </div>
              </div>
      </section>
      
          </main>`
    
  // footer End