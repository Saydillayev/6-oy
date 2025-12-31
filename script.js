

let spiders = [
    {
        "img": "./img/spider.svg",
        "text": "Patton Oswalt:Annihilation",
        "time": "7.4 2017  1 hr 6 min",
        "type": "Uncategorized",
        "btn": "More info"
    },
    {
           "img": "./img/spider.svg",
        "text": "New York Doll",
        "time": "7.9 2015  1 hr 15 min",
        "type": "Documentary Music",
        "btn": "More info"
    },
    {
           "img": "./img/spider.svg",
        "text": "Mickey's MagicalChristmas",
        "time": "6.8 2001  1 hr 5 min",
        "type": "Adventure Animation Comedy",
        "btn": "More info"
    },
    {
           "img": "./img/spider.svg",
        "text": "And Then I Go",
        "time": "7.6 2017  1 hr 39 min",
        "type": "Drama",
        "btn": "More info"
    },
    {
           "img": "./img/spider.svg",
        "text": "An Extremely Goofy Movie",
        "time": "6.4 2000  1 hr 19 min",
        "type": "Animation Comedy Family",
        "btn": "More info"
    },
    {
           "img": "./img/spider.svg",
        "text": "Peter Rabbit",
        "time": "6.6 2018  1 hr 35 min",
        "type": "Adventure Animation Comedy",
        "btn": "More info"
    },
    {
             "img": "./img/spider.svg",
        "text": "Peter Rabbit",
        "time": "6.6 2018  1 hr 35 min",
        "type": "Adventure Animation Comedy",
        "btn": "More info"
    },
    {
           "img": "./img/spider.svg",
        "text": "Peter Rabbit",
        "time": "6.6 2018  1 hr 35 min",
        "type": "Adventure Animation Comedy",
        "btn": "More info"
    },
    {
        "img": "./img/spider.svg",
        "text": "Peter Rabbit",
        "time": "6.6 2018  1 hr 35 min",
        "type": "Adventure Animation Comedy",
        "btn": "More info"
    },
    { 

      "img": "./img/spider.svg",
        "text": "Peter Rabbit",
        "time": "6.6 2018  1 hr 35 min",
        "type": "Adventure Animation Comedy",
        "btn": "More info"
    },
    {
            "img": "./img/spider.svg",
        "text": "Peter Rabbit",
        "time": "6.6 2018  1 hr 35 min",
        "type": "Adventure Animation Comedy",
        "btn": "More info"
    },
    {
             "img": "./img/spider.svg",
        "text": "Peter Rabbit",
        "time": "6.6 2018  1 hr 35 min",
        "type": "Adventure Animation Comedy",
        "btn": "More info"
    },
    {
             "img": "./img/spider.svg",
        "text": "Peter Rabbit",
        "time": "6.6 2018  1 hr 35 min",
        "type": "Adventure Animation Comedy",
        "btn": "More info"
    },
    {
            "img": "./img/spider.svg",
        "text": "Peter Rabbit",
        "time": "6.6 2018  1 hr 35 min",
        "type": "Adventure Animation Comedy",
        "btn": "More info"
    },
    {
            "img": "./img/spider.svg",
        "text": "Peter Rabbit",
        "time": "6.6 2018  1 hr 35 min",
        "type": "Adventure Animation Comedy",
        "btn": "More info"
    }
]


let newDiv = document.querySelector('.parent')

let inp = document.querySelector('.inp1')

let btn = document.querySelector('button')

function myFunction (spiders) {
  newDiv.innerHTML = ''

  spiders.map((item) => {
    newDiv.innerHTML += `
<div class="card">

            <div class="img">
 <img src="${item.img}" alt="">
            </div>

          <div class="text">
${item.text}
          </div>

          <div class="time">
${item.time}
          </div>

          <div class="type">
${item.type}
          </div>

          <div class="btn">
            ${item.btn}
          </div>
        </div>
    `
  })
}
myFunction(spiders)


btn.addEventListener('click', ()=> {
  let filtered = spiders.filter((item) => item.text.includes(inp.value))

  myFunction(filtered)
})




// spiders.map(function (item) {
//     let newDiv = document.createElement('div')

//     newDiv.innerHTML = `
//      <div class="card">

//             <div class="img">
//  <img src="${item.img}" alt="">
//             </div>

//           <div class="text">
// ${item.text}
//           </div>

//           <div class="time">
// ${item.time}
//           </div>

//           <div class="type">
// ${item.type}
//           </div>

//           <div class="btn">
//             ${item.btn}
//           </div>
//         </div>
//      `
//     parent.append(newDiv)
// })