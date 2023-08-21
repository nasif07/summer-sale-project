document.getElementById('item-1').addEventListener('click', function(){
    addToEntry('K. Accessories');
    const itemsPrice = getInputValueById('price-1');
    const afterDue1 = getInputValueById('total-price');
    const nowPrice = itemsPrice + afterDue1;
    setTextElementValueById('total-price', nowPrice);
    setTextElementValueById('final-amount', nowPrice);
})
document.getElementById('item-2').addEventListener('click', function(){
    addToEntry('K. Accessories');
    const itemsPrice = getInputValueById('price-2');
    const afterDue1 = getInputValueById('total-price');
    const nowPrice = itemsPrice + afterDue1;
    setTextElementValueById('total-price', nowPrice);
    setTextElementValueById('final-amount', nowPrice);
    
})
document.getElementById('item-3').addEventListener('click', function(){
    addToEntry('Home Cooker');
    const itemsPrice = getInputValueById('price-3');
    const afterDue1 = getInputValueById('total-price');
    const nowPrice = itemsPrice + afterDue1;
    setTextElementValueById('total-price', nowPrice)
    setTextElementValueById('final-amount', nowPrice);
})
document.getElementById('item-4').addEventListener('click', function(){
    addToEntry('Sports Back Cap');
    const itemsPrice = getInputValueById('price-4');
    const afterDue1 = getInputValueById('total-price');
    const nowPrice = itemsPrice + afterDue1;
    setTextElementValueById('total-price', nowPrice)
    setTextElementValueById('final-amount', nowPrice);
})
document.getElementById('item-5').addEventListener('click', function(){
    addToEntry('Full Jersey Set');
    const itemsPrice = getInputValueById('price-5');
    const afterDue1 = getInputValueById('total-price');
    const nowPrice = itemsPrice + afterDue1;
    setTextElementValueById('total-price', nowPrice)
    setTextElementValueById('final-amount', nowPrice);
})
document.getElementById('item-6').addEventListener('click', function(){
    addToEntry('Sports cates');
    const itemsPrice = getInputValueById('price-6');
    const afterDue1 = getInputValueById('total-price');
    const nowPrice = itemsPrice + afterDue1;
    setTextElementValueById('total-price', nowPrice)
    setTextElementValueById('final-amount', nowPrice);
})
const value = getInputValueById('final-amount');

const myButton = document.getElementById("button-id");
const numberInput = document.getElementById("discount-input");


numberInput.addEventListener("input", function() {
    const numberInputString = numberInput.value;
    console.log(numberInputString);
  if (numberInputString === 'SALE200') {
    myButton.disabled = false;
  } else {
    myButton.disabled = true;
  }
});

function discount(){
    const inputValue = document.getElementById('discount-input');
    const inputValueText = inputValue.value;
    inputValue.value = '';
    const totalPrice = getInputValueById('total-price')
    console.log(totalPrice)
    if(inputValueText === "SALE200" && totalPrice > 200){
        const totalPrice = document.getElementById('total-price');
        const totalPriceString = totalPrice.innerText;
        const totalPriceValue = parseFloat(totalPriceString);
        const discountPrice = (totalPriceValue * 20) / 100;
        setTextElementValueById('discount-field', discountPrice);
        // const finalAmount = document.getElementById('final-amount');
        console.log(totalPrice, discountPrice)
        const finalPrice = totalPriceValue - discountPrice;
        setTextElementValueById('final-amount', finalPrice);
    }
}





function addToEntry(itemName){
    const itemEntry = document.getElementById('item-entry');
    const count = itemEntry.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-2');
    p.classList.add('font-medium');
    p.classList.add('text-2xl');
    p.classList.add('p-2');
    p.innerHTML = count + 1 + '. ' + itemName;
    itemEntry.appendChild(p);
}
function getInputValueById(getId){
    const initialPrice = document.getElementById(getId);
    const initialPriceValueString = initialPrice.innerText;
    const initialPriceValue = parseFloat(initialPriceValueString);
    return initialPriceValue;
}
function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}
