currentYen = 1000
currentInsertedYen = 0
itemCost = 0
currentViewedItem = ""

function insertYen(insertedYen)
{
    console.log("insert yen clicked") 
    if(currentYen - insertedYen >= 0){
        currentYen = currentYen - insertedYen;
        currentInsertedYen += insertedYen;
        var x = document.getElementById("remaining-money-text");
        x.textContent = currentYen + "¥"
    }

    if (currentYen == 0 && currentInsertedYen == 0) {
        var x = document.getElementById("remaining-money-title-text");
        var y = document.getElementById("remaining-money-text");
        x.textContent = "YOU'RE ALL";
        y.textContent = "OUT OF MONEY!";
    }
}

function returnChange()
{
    console.log("return change clicked") 
    if(currentInsertedYen > 0){
        currentYen += currentInsertedYen;
        currentInsertedYen = 0;
        var x = document.getElementById("remaining-money-text");
        x.textContent = currentYen + "¥"
    }
}

function viewProduct(item){
    console.log("view product clicked") 
    currentViewedItem = item

    var productContainer = document.getElementById("product-info-container");
    productContainer.style.visibility = "visible";

    var buyButton = document.getElementById("product-buy-button");
    buyButton.style.visibility = 'visible'
    
    setItemCostAndLabel(currentViewedItem)
}

function buyProduct(){
    console.log("buy product clicked") 
    if (currentInsertedYen >= itemCost){
        console.log(currentViewedItem + " was purchased.") 
        currentInsertedYen -= itemCost;

        var productTitle = document.getElementById("product-title");
        productTitle.textContent = "THANK YOU!"

        var productImage = document.getElementById("product-image");
        productImage.src = 'change.png'

        var productText = document.getElementById("product-info");
        productText.textContent = "Your total change: \n " + currentInsertedYen + "¥."

        var buyButton = document.getElementById("product-buy-button");
        buyButton.style.visibility = 'hidden'

        returnChange()
    }
    else {
        console.log("insufficient funds") 
    }
}

function setItemCostAndLabel(item){
    var productTitle = document.getElementById("product-title");
    productTitle.textContent = "ABOUT THE ITEM:"

    var productText = document.getElementById("product-info");
    var productImage = document.getElementById("product-image");

    switch (item) {
        case "water":
            itemCost = 100;
            productText.textContent = "This refreshing water will cost you " + itemCost + "¥."
            productImage.src = 'water.png'
            break;
        case "tea":
            itemCost = 110;
            productText.textContent = "This delicious tea will cost you " + itemCost + "¥."
            productImage.src = 'tea.png'
            break;
        case "coke":
            itemCost = 120;
            productText.textContent = "This bubbly soda will cost you " + itemCost + "¥."
            productImage.src = 'coke.png'
            break;
        case "pepsi":
            itemCost = 120;
            productText.textContent = "This fizzy pop will cost you " + itemCost + "¥."
            productImage.src = 'pepsi.png'
            break;
        case "candy":
            itemCost = 150;
            productText.textContent = "This sweet candy will cost you " + itemCost + "¥."
            productImage.src = 'candy.png'
            break;
        case "chips":
            itemCost = 180;
            productText.textContent = "These fancy chips will cost you " + itemCost + "¥."
            productImage.src = 'chips.png'
            break;
        case "nuts":
            itemCost = 200;
            productText.textContent = "These healthy nuts will cost you " + itemCost + "¥."
            productImage.src = 'nuts.png'
            break;
        case "monster":
            itemCost = 220;
            productText.textContent = "This crazy liquid will cost you " + itemCost + "¥."
            productImage.src = 'monster.png'
            break;
      }
}