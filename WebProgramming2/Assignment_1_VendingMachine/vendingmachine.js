var currentYen = 1000;
var currentInsertedYen = 0;
var productCost = 0;
var currentViewedProduct = "";

var productTitle;
var productImage;
var productText;
var productContainer;
var buyButton;
var remainingMoneyTitle;
var remainingMoney;
const vendingMachineProductArray = [];

window.onload = function() {
    productTitle = document.getElementById("product-title");
    productImage = document.getElementById("product-image");
    productText = document.getElementById("product-info");
    productContainer = document.getElementById("product-info-container");
    buyButton = document.getElementById("product-buy-button");
    remainingMoneyTitle = document.getElementById("remaining-money-title-text");
    remainingMoney = document.getElementById("remaining-money-text");
    
    vendingMachineProductArray.push(new VendingMachineProduct("water", 100, "This refreshing water will cost you 100¥.", "water.png"));
    vendingMachineProductArray.push(new VendingMachineProduct("tea", 110, "This delicious tea will cost you 110¥.", "tea.png"));
    vendingMachineProductArray.push(new VendingMachineProduct("coke", 120, "This bubbly soda will cost you 100¥.", "coke.png"));
    vendingMachineProductArray.push(new VendingMachineProduct("pepsi", 120, "This fizzy pop will cost you 100¥.", "pepsi.png"));
    vendingMachineProductArray.push(new VendingMachineProduct("candy", 150, "This sweet candy will cost you 150¥.", "candy.png"));
    vendingMachineProductArray.push(new VendingMachineProduct("chips", 180, "These fancy chips will cost you 180¥.", "chips.png"));
    vendingMachineProductArray.push(new VendingMachineProduct("nuts", 200, "These healthy nuts will cost you 200¥.", "nuts.png"));
    vendingMachineProductArray.push(new VendingMachineProduct("monster", 220, "This refreshing water will cost you 220¥.", "monster.png"));
    console.log(vendingMachineProductArray);
  };

function insertYen(insertedYen) {
    console.log("insert yen clicked: " + insertedYen)

    if(currentYen - insertedYen >= 0){
        currentYen = currentYen - insertedYen;
        currentInsertedYen += insertedYen;
        remainingMoney.textContent = currentYen + "¥"
    }

    if (currentYen == 0 && currentInsertedYen == 0) {
        remainingMoneyTitle.textContent = "YOU'RE ALL";
        remainingMoney.textContent = "OUT OF MONEY!";
    }
}

function returnChange() {
    console.log("returned change clicked: " + currentInsertedYen)

    if(currentInsertedYen > 0){
        currentYen += currentInsertedYen;
        currentInsertedYen = 0;
        remainingMoney.textContent = currentYen + "¥"
    }
}

function viewProduct(product) {
    console.log("view product clicked: " + product) 

    currentViewedProduct = product
    productContainer.style.visibility = "visible";
    productContainer.style.backgroundColor = "#99efa794"
    buyButton.style.visibility = 'visible'
    
    setProductCostAndLabel(currentViewedProduct)
}

function buyProduct() {
    console.log("buy product clicked: " + currentViewedProduct) 

    if (currentInsertedYen >= productCost){
        finalizePurchase()
        returnChange()
    }
    else {
        insufficientFunds()
    }
}

function finalizePurchase() {
    console.log(currentViewedProduct + " was purchased.") 

    currentInsertedYen -= productCost;
    productTitle.textContent = "THANK YOU!"
    productImage.src = 'change.png'
    productText.textContent = "YOUR TOTAL CHANGE:\n " + currentInsertedYen + "¥."
    buyButton.style.visibility = 'hidden'

}

function insufficientFunds() {
    console.log("insufficient funds for: " + currentViewedProduct)

    productContainer.style.backgroundColor = "rgb(255 29 29)"
    productTitle.textContent = "INSUFFCIENT FUNDS!"
    productImage.src = 'change.png'
    productText.textContent = "PLEASE INSERT:\n " + (productCost - currentInsertedYen) + "¥."
    buyButton.style.visibility = 'hidden'
}
    

function setProductCostAndLabel(product) {
    productTitle.textContent = "ABOUT THE ITEM:"

    var product = vendingMachineProductArray.find(x => x.name === product);
    
    productCost = product.cost;
    productText.textContent = product.description;
    productImage.src = product.image;
}