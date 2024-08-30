function modificaH1() {
    document.querySelector('h1').innerHTML= 'Troverai ciò che fa per te!'
  }
  
  
  
  
  
  
  
  function changeBackgroundColor() {
    document.querySelector('body').style = 'blue'
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  const changeFakeAddress = function () {
    document.querySelector(address).innerText = 'New address! HEHE!'
    // document.querySelector("footer > div:nth-child(2)").innerHTML =
    //   "FAKE ADDRESS";
    // document.querySelector('#address').innerText = "FAKE ADDRESS"
  }
  
  const addClassToLinks = function () {
    let aTags = document.querySelectorAll(a) //array-like => NodeList
    for (let i = 0; i < aTags.length; i++) {
      aTags[i].classList.add(newLink)
    }
    // for (let node of document.querySelectorAll("a")) {
    //   node.classList.add("giant-font");
    // }
  }
  
  const toggleImagesClass = function () {
    let images = document.querySelectorAll(img)
    for (let i = 0; i < images.length; i++) {
      const singleImg = images[i]
      singleImg.classList.toggle(hidden) //if the element already has the class, it will take it away, if it doesn't it will add it
    }
    // for (let image of document.querySelectorAll("img")) {
    //   image.classList.toggle("hidden"); // if the class is already set, remove it. otherwise, add it
    // }
  }
  const getRandomColor = function () {
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)
  
    return 'rgb(' + red + ', ' + green + ', ' + blue + ')'
  }
  
  const setRandomColor = function () {
    const randomColor = getRandomColor()
    let prices = document.querySelectorAll(price)
    for (let i = 0; i < prices.length; i++) {
      let singlePrince = prices[i]
      singlePrince.style.color = randomColor
    }
    // for (let price of document.querySelectorAll("tr > td:nth-child(4)")) {
    //   price.style.color = color;
    // }
  }