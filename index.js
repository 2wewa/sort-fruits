let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")
let fruits = document.getElementById("fruits")

fruits.textContent = fruit

function shelves() {
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "🍎") {
            appleShelf.textContent += "🍎, " 
        } else if (fruit[i] === "🍊") {
            orangeShelf.textContent += "🍊, " 
        }
    }
}

shelves()