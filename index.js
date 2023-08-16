const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const cross = document.getElementById('cross');
const hero = document.getElementsByClassName('hero-section');

bar.addEventListener('click', () => {
    nav.classList.remove('deactive');
    nav.classList.add('active');
    hero[0].classList.add('active1');
})

cross.addEventListener('click', () => {
    nav.classList.add('deactive');
})

const product = [{
    id: 1,
    title: 'Men',
    img: './img/category/m1.jpg'
}, {
    id: 2,
    title: 'Women',
    img: './img/category/w1.jpg'
}
    ,
{
    id: 3,
    title: 'Kids',
    img: './img/category/k1.jpg'
}
];

const categories = [...new Set(product.map(item))];
Array.from(enterElements).forEach((element) => {
        


    element.innerHTML = categories.map((item) => {
      

        return (
            `<div class="product" style="margin-bottom: 1rem; display: flex; width : 100%">
            <div class="product-img"  padding: 1rem>
                <img src="${item.img}" alt="">
            </div>
            <div class="product-name">
                <p>${item.title}</p>
                </div>
            
            <div class="button">
            </div>
            </div>`+
            "<button onclick='addToCart("+(i++)+")'>Add to Cart</button>"
        );
    }).join('');
});

var cart = []; 
function addToCart(a) {
cart.push({...categories[a]});
displaycart();
}
function displaycart(a) {
if (cart.length !== 0) {
    document.getElementsByClassName('final')[0].innerHTML = cart.map((a) => {
        return (
            `<div class="product" style="margin-bottom: 1rem; display: flex; width: 100%;">
                <div class="product-img" style="padding: 1rem;">
                    <img src="${a.img}" alt="">
                </div>
                <div class="product-name">
                    <p>${a.title}</p>
                </div>
            </div>`
        );
    }).join('');
}
}


