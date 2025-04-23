var currentYen = 1000
var currentInsertedYen = 0
var productCost = 0
var currentViewedProduct = ""

function insertYen(insertedYen)
{
    console.log("insert yen clicked: " + insertedYen)

    if(currentYen - insertedYen >= 0){
        currentYen = currentYen - insertedYen;
        currentInsertedYen += insertedYen;
        var remainingMoney = document.getElementById("remaining-money-text");
        remainingMoney.textContent = currentYen + "¥"
    }

    if (currentYen == 0 && currentInsertedYen == 0) {
        var remainingMoneyTitle = document.getElementById("remaining-money-title-text");
        var remainingMoney = document.getElementById("remaining-money-text");
        remainingMoneyTitle.textContent = "YOU'RE ALL";
        remainingMoney.textContent = "OUT OF MONEY!";
    }
}

function returnChange()
{
    console.log("returned change clicked: " + currentInsertedYen)

    if(currentInsertedYen > 0){
        currentYen += currentInsertedYen;
        currentInsertedYen = 0;
        var remainingMoney = document.getElementById("remaining-money-text");
        remainingMoney.textContent = currentYen + "¥"
    }
}

function viewProduct(product){
    console.log("view product clicked: " + product) 

    currentViewedProduct = product

    var productContainer = document.getElementById("product-info-container");
    productContainer.style.visibility = "visible";
    productContainer.style.backgroundColor = "#99efa794"

    var buyButton = document.getElementById("product-buy-button");
    buyButton.style.visibility = 'visible'
    
    setProductCostAndLabel(currentViewedProduct)
}

function buyProduct(){
    console.log("buy product clicked: " + currentViewedProduct) 

    var productTitle = document.getElementById("product-title");
    var productImage = document.getElementById("product-image");
    var productText = document.getElementById("product-info");
    var productContainer = document.getElementById("product-info-container");
    var buyButton = document.getElementById("product-buy-button");

    if (currentInsertedYen >= productCost){
        console.log(currentViewedProduct + " was purchased.") 
        
        currentInsertedYen -= productCost;

        productTitle.textContent = "THANK YOU!"
        productImage.src = 'change.png'
        productText.textContent = "YOUR TOTAL CHANGE:\n " + currentInsertedYen + "¥."
        buyButton.style.visibility = 'hidden'

        returnChange()
    }
    else {
        console.log("insufficient funds for: " + currentViewedProduct)

        productContainer.style.backgroundColor = "rgb(255 29 29)"
        productTitle.textContent = "INSUFFCIENT FUNDS!"
        productImage.src = 'change.png'
        productText.textContent = "PLEASE INSERT:\n " + (productCost - currentInsertedYen) + "¥."
        buyButton.style.visibility = 'hidden'
    }
}

function setProductCostAndLabel(product){
    var productTitle = document.getElementById("product-title");
    productTitle.textContent = "ABOUT THE ITEM:"

    var productText = document.getElementById("product-info");
    var productImage = document.getElementById("product-image");

    switch (product) {
        case "water":
            productCost = 100;
            productText.textContent = "This refreshing water will cost you " + productCost + "¥."
            productImage.src = 'water.png'
            break;
        case "tea":
            productCost = 110;
            productText.textContent = "This delicious tea will cost you " + productCost + "¥."
            productImage.src = 'tea.png'
            break;
        case "coke":
            productCost = 120;
            productText.textContent = "This bubbly soda will cost you " + productCost + "¥."
            productImage.src = 'coke.png'
            break;
        case "pepsi":
            productCost = 120;
            productText.textContent = "This fizzy pop will cost you " + productCost + "¥."
            productImage.src = 'pepsi.png'
            break;
        case "candy":
            productCost = 150;
            productText.textContent = "This sweet candy will cost you " + productCost + "¥."
            productImage.src = 'candy.png'
            break;
        case "chips":
            productCost = 180;
            productText.textContent = "These fancy chips will cost you " + productCost + "¥."
            productImage.src = 'chips.png'
            break;
        case "nuts":
            productCost = 200;
            productText.textContent = "These healthy nuts will cost you " + productCost + "¥."
            productImage.src = 'nuts.png'
            break;
        case "monster":
            productCost = 220;
            productText.textContent = "This crazy liquid will cost you " + productCost + "¥."
            productImage.src = 'monster.png'
            break;
      }
}