
// Get Element By Function

function getElement(id) {
  const element = document.getElementById(id) ;
  return element ;
}

// With Coin Calling functionality

getElement("card_button").addEventListener("click", function (e) {
    e.preventDefault() ;
    if (e.target.className.includes("cart_btn")) {
       const cart_btn = e.target ;
       const coin = getElement("Coin").innerText ;

    if (Number(coin) < 20) {
      alert(`You don't have enough coins to make a call. ${20 - coin} coins are needed.`) ;
      return ;
    }

    const serviceName = cart_btn.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
    const serviceNumber = cart_btn.parentNode.parentNode.childNodes[5].innerText ;
    const callSupportCoin = cart_btn.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[3].childNodes[3].childNodes[1].innerText ;

    const callData = {
      name: serviceName ,
      number: serviceNumber ,
    };

    const callPrice = 20 ;
    const callAvailableBalance = Number(callSupportCoin) - callPrice ;

    alert(`Calling ${callData.name} ${callData.number}`) ;
    getElement("Coin").innerText = callAvailableBalance ;

    const dynamicWay = {
      name: serviceName ,
      number: serviceNumber ,
      time: new Date().toLocaleTimeString() ,
    };

    const callHistory = cart_btn.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[3].childNodes[3].childNodes[3].childNodes[1].childNodes[3] ;

    const cartContainer = document.createElement("div") ;
    cartContainer.innerHTML = `
           <div class="flex md:flex-row flex-col md:gap-2.5 gap-2 md:justify-between md:items-center p-2 bg-[#FAFAFA]  rounded-xl mb-3 Madurai">
           <div class="text-lg">
           <h1 class="Inter font-semibold tracking-tight">${dynamicWay.name}</h1>
           <p class="text-[#5C5C5C]">${dynamicWay.number}</p>
           </div>
           <h1>${dynamicWay.time}</h1>
           </div>`;
    callHistory.append(cartContainer) ;
  }

  // Heart Count functionality

  if (e.target.className.includes("heart_count")) {
    const cart_btn2 = e.target ;
    const countHeart = cart_btn2.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[3].childNodes[1].childNodes[1].innerText ;
    
    const countIncrease = Number(countHeart) + 1 ;
    getElement("heart_counted").innerText = countIncrease ;
  }

  // Copy Count functionality

  if (e.target.className.includes("copy_btn")) {
    const cart_btn3 = e.target ;
    const serviceNumber = cart_btn3.parentNode.parentNode.childNodes[5].innerText ;
    const countCopy = cart_btn3.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[3].childNodes[5]
    .childNodes[1].innerText ;

    const copyIncrease = Number(countCopy) + 1 ;
    getElement("copy_counted").innerText = copyIncrease ;
    
    const copyAbleText = cart_btn3.parentNode.parentNode.childNodes[5].innerText ;
    navigator.clipboard.writeText(copyAbleText) ;
    alert(`The number has been copied : ${serviceNumber}`) ;
  }
});

// Clear functionality

document.getElementById("clear_btn").addEventListener("click",function (e) {
  e.preventDefault() ;
  const callHistoryParent = document.querySelector(".parent") ;   
  callHistoryParent.innerText = "" ;
});