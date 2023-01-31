const mainLeft = document.querySelector('.main_left');
const mainRight = document.querySelector('#burgers');
const zakuskiContainer = document.querySelector('#zakuski');
const zakuskaBtn = document.querySelector('#zakuskaBtn');
const burgerBtn = document.querySelector('#burgerBtn')
const xotdogBtn = document.querySelector('#xotdogBtn')
const xotdogContainer = document.querySelector('#xotdog')
const sectionHeader = document.querySelector('#sectionHeader')
const itoq  = document.querySelector('.itoq')
const buy_count  = document.querySelector('.buy_count')

let burgers = [
    {
        id: 1,
        name: 'Мясная бомба',
        price: 689,
        weight: 520,
        count: 1,
        img: './img/photo.png',
    },
    {
        id: 2,
        name: 'Супер сырный',
        price: 550,
        weight: 512,
        count: 1,
        img: './img/photo (1).png'
    },
    {
        id: 3,
        name: 'Сытный ',
        price: 639,
        weight: 580,
        count: 1,
        img: './img/photo (2).png',
    },
    {
        id: 4,
        name: 'Тяжелый удар',
        price: 480,
        weight: 470,
        count: 1,
        img: './img/photo (3).png'
    },
    {
        id: 5,
        name: 'Вечная классика',
        price: 450,
        weight: 450,
        count: 1,
        img: './img/photo (4).png'
    },
    {
        id: 6,
        name: 'Итальянский',
        price: 560,
        weight: 510,
        count: 1,
        img: './img/photo (5).png'
    }
]

let zakuski = [
    {
        id: 7,
        name: 'Начос',
        price: 250,
        weight: 220,
        count: 1,
        img: './img/photo (6).png'
    },
    {
        id: 8,
        name: 'Картошка фри',
        price: 245,
        weight: 180,
        count: 1,
        img: './img/photo (7).png'
    },
    {
        id: 9,
        name: 'Луковые кольца',
        price: 230,
        weight: 160,
        count: 1,
        img: './img/photo (8).png'
    }
]
let xotdogs = [
    {
        id: 10,
        name: 'Домашний хот-дог',
        price: 290,
        weight: 250,
        count: 1,
        img: './img/photo (9).png'
    },
    {
        id: 11,
        name: ' Жгучий хот-дог',
        price: 239,
        weight: 245,
        count: 1,
        img: './img/photo (10).png'
    },
    {
        id: 12,
        name: 'Классический хот-дог',
        price: 220,
        weight: 215,
        count: 1,
        img: './img/photo (11).png'
    }

]
zakuskaBtn.addEventListener('click', () => {
    mainRight.style.display = 'none'
    xotdogContainer.style.display = 'none'
    zakuskiContainer.style.display = 'flex'
    zakuskiContainer.style.gap = '30px'
    sectionHeader.innerHTML = 'Закуски'
    zakuskaBtn.style.backgroundColor =  ' rgba(255, 171, 8, 1)'
    burgerBtn.style.backgroundColor = '  rgba(255, 255, 255, 1)'
    xotdogBtn.style.backgroundColor = ' rgba(255, 255, 255, 1)'
  
})
burgerBtn.addEventListener('click', () => {
    zakuskiContainer.style.display = 'none'
    xotdogContainer.style.display = 'none'
    mainRight.style.display = 'grid'
    sectionHeader.innerHTML = 'Бургеры'
    burgerBtn.style.backgroundColor = ' rgba(255, 171, 8, 1)'
    xotdogBtn.style.backgroundColor = ' rgba(255, 255, 255, 1)'
    zakuskaBtn.style.backgroundColor = ' rgba(255, 255, 255, 1)'

})
xotdogBtn.addEventListener('click', () => {
    mainRight.style.display = 'none'
    zakuskiContainer.style.display = 'none'
    xotdogContainer.style.display = 'flex'
    xotdogContainer.style.gap = '30px'
    sectionHeader.innerHTML = 'Хот-доги'
    xotdogBtn.style.backgroundColor = ' rgba(255, 171, 8, 1)'
    zakuskaBtn.style.backgroundColor = ' rgba(255, 255, 255, 1)'
    burgerBtn.style.backgroundColor = '  rgba(255, 255, 255, 1)'

})

let cart = [];

if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'))
}

burgers.forEach(element => {
    mainRight.innerHTML += `
   
    <div class="right_card">
        
        <img src="${element.img}" >
        <h3>${element.price}₽</h3>
        <h5>${element.name}</h5>
        <p>${element.weight}г</p>
        <button onclick="addToCart('${element.id}')">Добавить</button>
    </div>
    
    
    `
});

zakuski.forEach(zakuska => {
    zakuskiContainer.innerHTML += `
    <div class="right_card">
        
    <img src="${zakuska.img}" >
    <h3>${zakuska.price}₽</h3>
    <h5>${zakuska.name}</h5>
    <p>${zakuska.weight}г</p>
    <button onclick="addToCartZakuska('${zakuska.id}')">Добавить</button>
</div>
    
    `
})

xotdogs.forEach(zakuska => {
    xotdogContainer.innerHTML += `
    <div class="right_card">
        
    <img src="${zakuska.img}" >
    <h3>${zakuska.price}₽</h3>
    <h5>${zakuska.name}</h5>
    <p>${zakuska.weight}г</p>
    <button onclick="addToCartXotdog('${zakuska.id}')">Добавить</button>
</div>
    
    `
})


function addToCartXotdog(id) {
    const checkCart = cart.find(data => data.id == id)

    if (checkCart) {
        checkCart.count += 1
    } else {
        const xotdog = xotdogs.find(data => data.id == id);
        cart.push(xotdog)
    }
    showCarts()
    summ()
    count()
    localStorage.setItem('cart', JSON.stringify(cart))
    console.log(cart);
}

function addToCart(id) {
    const checkCart = cart.find(data => data.id == id)

    if (checkCart) {
        checkCart.count += 1
    } else {
        const burger = burgers.find(data => data.id == id);
        cart.push(burger)
    }
    showCarts()
    summ()
    count()
    localStorage.setItem('cart', JSON.stringify(cart))
    console.log(cart);
}


function addToCartZakuska(id) {
    const checkCart = cart.find(data => data.id == id)

    if (checkCart) {
        checkCart.count += 1
    } else {
        const zakuska = zakuski.find(data => data.id == id);
        cart.push(zakuska)
    }
    showCarts()
    summ()
    count()
    localStorage.setItem('cart', JSON.stringify(cart))
    console.log(cart);
}

function showCarts() {
    mainLeft.innerHTML = ''
    cart.forEach(burger => {
        console.log(burger.name);
        mainLeft.innerHTML += `
                    <div class="cart_card">
                        <div class="cart_left">
                            <div class="left_img0">
                                 <img src="${burger.img}"  alt="">
                            </div>
                            <div class="left_text0">
                                <h5>${burger.name}</h5>
                                <h6>${burger.weight}г</h6>
                                <p>${burger.price}</p>
                            </div>
                           
                        </div>
                        <div class="cart_right">         
                                <button onclick="changeCount('inc','${burger.id}')">+</button>
                                 <span>${burger.count}</span>
                                <button onclick="changeCount('dec','${burger.id}')">-</button>
                        </div>
                    </div>

                  
        `
    })
}

showCarts()


function changeCount(type, id) {
    if (type == 'inc') {
        const checkCart = cart.find(data => data.id == id);
        checkCart.count += 1
        summ()
        count()
    } else {
        const checkCart = cart.find(data => data.id == id);
        checkCart.count -= 1
        summ()
        count()

        if (checkCart.count == 0) {
            const ind = cart.findIndex(burger => burger.id == id)
            cart.splice(ind, 1)
            summ()
            count()
        }
    }

    showCarts()
    localStorage.setItem('cart', JSON.stringify(cart))

}

function summ() {
    let summa = 0
    cart.forEach(element => {
        // console.log(element.count);
        summa = summa + element.count * element.price 

    })
    return itoq.innerHTML = summa
}


console.log(summ());

function count(){
    let count = 0
    cart.forEach(element=>{
        count = count + element.count
    })
    return buy_count.innerHTML = count
}
console.log(count());