(function() {
  var app = angular.module('store', ['store-directives'])

  app.controller("ReviewController", function(){
    this.review = {}
    this.addReview = function(product){
      product.reviews.push(this.review)
      this.review = {}
    }
  })

  app.controller('StoreController', function(){
    this.products = gems;
  })


  
  //gems data
  let gems = [
    { 
      name:"Dodecahedron",
      price: 2000,
      description: "Dodecahedron is very hard to broke, its a gem very nice",
      specs: [
        {
        faces: 14,
        color: "#000",
        rarity: 10,
        shine: 30
      }
    ],
      images:[
        {
          url:"./img/gem-02.gif",
          number: 0
        },
        {
          url:"./img/gem-05.gif",
          number: 1
    
        },
        {
          url:"./img/gem-09.gif",
          number: 2
    
        }
      ],
      canPurchase: true,
      soldOut: false,
      reviews:[
                {
                  stars: 5,
                  body:"I love this product!",
                  author:"Joce14@yahoos.com"
                },
                {
                  stars:1,
                  body:"This product sucks",
                  author:"JimmyNeutron@genius.org",
                }
              ]
    }, 
    {
      name:"Pentagonal Gem",
      price: 5950,
      description: "This gem is so good to have fun",
      specs: [
        {
        faces: 5,
        color: "#000",
        rarity: 6,
        shine: 10
      }
    ],
      images:[
        {
          url:"./img/gem-02.gif",
          number: 0
        },
        {
          url:"./img/gem-05.gif",
          number: 1
    
        },
        {
          url:"./img/gem-09.gif",
          number: 2
    
        }
      ],
      canPurchase: true,
      soldOut: false,
      reviews:[
                {
                  stars: 5,
                  body:"I love this gem!",
                  author:"Joce14@yahoos.com",
                },
                {
                  stars:1,
                  body:"This product sucks",
                  author:"JimmyNeutron@genius.org",
                }
              ]
    },
    {
      name:"Azurite",
      price: 1105,
      description: "Some gems have hidden qualities beyond their luster.",
      specs: [
        {
        faces: 14,
        color: "#000",
        rarity: 7,
        shine: 8
      }
    ],
      images:[
        {
          url:"./img/gem-02.gif",
          number: 0
        },
        {
          url:"./img/gem-05.gif",
          number: 1
    
        },
        {
          url:"./img/gem-09.gif",
          number: 2
    
        }
      ],
      canPurchase: true,
      soldOut: false,
      reviews:[
                {
                  stars: 5,
                  body:"I love it!",
                  author:"Joce14@yahoos.com",
                },
                {
                  stars:1,
                  body:"This product sucks",
                  author:"Susy-9@hater.com",
                },
                {
                  "stars": 5,
                  "body": "I love this gem!",
                  "author": "JimmyNeutron@genius.org",
                }
              ]
    },
    {
      name:"Bloodstone",
      price: 2290,
      description: "Origin of the Bloodstone is unknown, hence its low value.",
      specs: [
        {
        faces: 12,
        color: "#000",
        rarity: 6,
        shine: 9
      }
    ],
      images:[
        {
          url:"./img/gem-09.gif",
          number: 0
        },
        {
          url:"./img/gem-08.gif",
          number: 1
    
        },
        {
          url:"./img/gem-07.gif",
          number: 2
    
        }
      ],
      canPurchase: true,
      soldOut: false,
      reviews:[
                {
                  stars: 5,
                  body:"I want this gem so much!",
                  author:"Joce14@yahoos.com"
                },
                {
                  stars:1,
                  body:"This product sucks",
                  author:"Susy-9@hater.com"
                },
                {
                  stars: 3,
                  body: "I think this gem was just OK, could honestly use more shine, IMO.",
                  author: "JimmyNeutron@genius.org",
                }
              ]
    },
    {
      name:"Zircon",
      price: 1100,
      description: "Zircon is our most coveted and sought after gem.",
      specs: [
        {
        faces: 6,
        color: "#000",
        rarity: 2,
        shine: 70
      }
    ],
      images:[
        {
          url:"./img/gem-02.gif",
          number: 0
        },
        {
          url:"./img/gem-04.gif",
          number: 1
    
        },
        {
          url:"./img/gem-08.gif",
          number: 2
    
        }
      ],
      canPurchase: true,
      soldOut: false,
      reviews:[
                {
                  stars: 3,
                  body:"It's ok.",
                  author:"Joce14@yahoos.com"
                },
                {
                  stars:1,
                  body:"This product sucks",
                  author:"Susy-9@hater.com"
                },
                {
                  stars: 1,
                  body: "This gem is WAY too expensive for its rarity value.",
                  author: "JimmyNeutron@genius.org",
                }
              ]
    }
] 
})()