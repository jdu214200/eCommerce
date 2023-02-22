const product = {
  plainBurger: {
    name: 'GAMBURGER',
    price: 1400,
    // kcall: 250,
    amount: 0,
    get SUMMA() {
      return this.price * this.amount;
    },
    get KALL() {
      return this.kcall * this.amount;
    },
  },
  freshBurger: {
    // name: 'GAMBURGER FRESH',
    price: 800,
    // kcall: 350,
    amount: 0,
    get SUMMA() {
      return this.price * this.amount;
    },
    get KALL() {
      return this.kcall * this.amount;
    },
  },
  freshCombo: {
    // name: 'FRESH COMBO',
    price: 600,
    // kcall: 450,
    amount: 0,
    get SUMMA() {
      return this.price * this.amount;
    },
    get KALL() {
      return this.kcall * this.amount;
    },
  },
  
  plainBurgers: {
    // name: 'GAMBURGER',
    price: 400,
    // kcall: 250,
    amount: 0,
    get SUMMA() {
      return this.price * this.amount;
    },
    get KALL() {
      return this.kcall * this.amount;
    },
  },
  freshBurgers: {
    // name: 'GAMBURGER FRESH',
    price: 650,
    // kcall: 350,
    amount: 0,
    get SUMMA() {
      return this.price * this.amount;
    },
    get KALL() {
      return this.kcall * this.amount;
    },
  },
  freshCombos: {
    // name: 'FRESH COMBO',
    price: 520,
    // kcall: 450,
    amount: 0,
    get SUMMA() {
      return this.price * this.amount;
    },
    get KALL() {
      return this.kcall * this.amount;
    },
  },
};

const plusOrMinus = document.querySelectorAll('.main__product-btn');

plusOrMinus.forEach(function (el, i) {
  el.addEventListener('click', function (e) {
    aniqla(el);
  });
});

function aniqla(pOm) {
  const plOrMi = pOm.getAttribute('data-symbol');
  const parent = pOm.closest('.main__product');
  const parentId = parent.getAttribute('id');
  const amount = parent.querySelector('.main__product-num');
  const productPrice = parent.querySelector('.main__product-price span');
  const productKall = parent.querySelector('.main__product-kcall span');

  if (plOrMi === '+' && product[parentId].amount < 10) {
    product[parentId].amount++;
  } else if (plOrMi === '-' && product[parentId].amount > 0) {
    product[parentId].amount--;
  }

  amount.innerHTML = product[parentId].amount;
  productPrice.innerHTML = product[parentId].SUMMA;
  // productKall.innerHTML = product[parentId].KALL;
}

const mainProductInfo = document.querySelectorAll('.main__product-info');
const view = document.querySelector('.view');
const viewClose = view.querySelector('.view__close');

mainProductInfo.forEach((el) => {
  el.addEventListener('dblclick', (e) => {
    const img = el.querySelector('img').getAttribute('src');
    const viewImg = view.querySelector('img').setAttribute('src', img);
    view.classList.add('active');
  });
});

viewClose.addEventListener('click', () => {
  view.classList.remove('active');
});

// Time update

const headerTimerExtra = document.querySelector('.header__timer-extra');
let time = 50;
let i = 0;
function updateTime() {
  switch (i) {
    case 50:
      time = 100;
      break;
    case 70:
      time = 150;
      break;
    case 80:
      time = 200;
      break;
    case 90:
      time = 250;
      break;
    case 98:
      time = 280;
      break;
    case 100:
      time = 300;
      return;
  }

  i++;
  // headerTimerExtra.innerHTML = i;

  setTimeout(() => {
    updateTime();
  }, time);
}

updateTime();

// out the chek
const addCart = document.querySelector('.addCart');
const receipt = document.querySelector('.receipt');
const receiptWindow = document.querySelector('.receipt__window');
const receiptWindowOut = document.querySelector('.receipt__window-out');
const receiptWindowBtn = document.querySelector('.receipt__window-btn');

const arrProduct = [];
let prodName = '';
let prodPrice = (prodKall = 0);

addCart.addEventListener('click', (e) => {
  for (const key in product) {
    if (product[key].amount > 0) {
      arrProduct.push(product[key]);
    }
  }

  arrProduct.forEach((el, i) => {
    prodName += `\n${el.name} ${el.amount}\n`;
    prodPrice += el.SUMMA;
    prodKall += el.KALL;
  });

  receiptWindowOut.innerHTML = `Total price:\n${prodPrice}$`;

  receipt.style.display = 'flex';
  setTimeout(() => {
    receipt.style.opacity = 1;
    receiptWindow.style.top = 0;
  }, 300);
});

receiptWindowBtn.addEventListener('click', () => location.reload());
