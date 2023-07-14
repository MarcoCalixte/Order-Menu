// get only unique categories -Hardest One
// iterate over categories return buttons
// make sure to select buttons when they are available
// items
const menu = [
  {
    id: 1,
    title: "Delicious pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/caitlin-greene-QDM6-fFKP0s-unsplash.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "ceaser double",
    category: "lunch",
    price: 13.99,
    img: "images/anh-nguyen-kcA-c3f_3FE-unsplash.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "New camino strawberry shake",
    category: "shakes",
    price: 6.99,
    img: "images/elsa-olofsson-Of1zmMWMZ9A-unsplash.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "cereal delight",
    category: "breakfast",
    price: 20.99,
    img: "images/dani-rendina-SH6vc3VOOwE-unsplash.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "cheesy attack",
    category: "lunch",
    price: 22.99,
    img: "images/chad-montano--GFCYhoRe48-unsplash.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "images/sonnie-hiles-zeELYR-l_Ug-unsplash.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon pack",
    category: "breakfast",
    price: 8.99,
    img: "images/brett-wharton-YPXMwin5GvA-unsplash.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "italian classic",
    category: "lunch",
    price: 12.99,
    img: "images/divani-_bWwT4wAOmM-unsplash.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "love affair",
    category: "shakes",
    price: 16.99,
    img: "images/american-heritage-chocolate-ubBLwKmdMj4-unsplash.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "vegetarian dinner",
    category: "dinner",
    price: 39.99,
    img: "images/victoria-shes-wSh0Exrb62g-unsplash.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 11,
    title: "gourmet soup",
    category: "dinner",
    price: 19.99,
    img: "images/mae-mu-H5Hj8QV2Tx4-unsplash.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 12,
    title: "gourmet soup",
    category: "dinner",
    price: 27.99,
    img: "images/eduardo-roda-lopes-mNefYU7uRbk-unsplash.jpg",
    desc: `skateboard fam synth authentic semiotics. Live -edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

let sectionCenter = document.querySelector('.section-center');
let container = document.querySelector('.btn-container');


// Load items
window.addEventListener('DOMContentLoaded', function () {
  displayMenuItems(menu);
  displayMenuButtons();
});


//menu items
function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
    <img src=${item.img} class="photo" alt=${item.title} />
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">$${item.price}</h4>
      </header>
      <p class="item-text">
      ${item.desc}
      </p>
    </div>
  </article>`;


  });
  displayMenu = displayMenu.join("");

  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  let categories = menu.reduce(function (values, item) {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  },
    ['all']
  );
  let categoryBtns = categories.map(function (category) {
    return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
  })
    .join('');
  container.innerHTML = categoryBtns;
  let filterBtns = document.querySelectorAll('.filter-btn');

  //filter items
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      let category = e.currentTarget.dataset.id;
      let menuCategory = menu.filter(function (menuItem) {
        //console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      })
      //console.log(menuCategory);
      if (category === 'all') {
        displayMenuItems(menu)
      }
      else {
        displayMenuItems(menuCategory);
      }
    });
  });
}

