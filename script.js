
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
  }
});