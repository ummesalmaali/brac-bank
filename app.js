let loginBtn = document.getElementById('login')
loginBtn.addEventListener('click', function(){
    let loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    let transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
})
//deposit button started//
let depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function(){
    let depositAmount = document.getElementById('depositAmount').value
    let depositNumber = parseFloat(depositAmount);
    
    updateSpanText('currentDeposit', depositNumber)
    

    updateSpanText('currentBalance', depositNumber)

    document.getElementById('depositAmount').value = ''
    

})
function updateSpanText(id, depositNumber){
    let currentBalance = document.getElementById(id).innerText
    let currentBalanceNumber = parseFloat(currentBalance)
    let totalBalance = depositNumber + currentBalanceNumber;
    document.getElementById(id).innerText = totalBalance;
}







//withdraw button started here//
let withdrawBtn = document.getElementById('withdrawBtn')
withdrawBtn.addEventListener('click',function(){
let withdrawAmount = document.getElementById('withdrawInput').value
let withdrawNumber = parseFloat(withdrawAmount);


updateSpanText('currentWithdraw', withdrawNumber);
updateSpanText('currentBalance', -1*withdrawNumber);
document.getElementById('withdrawInput').value = ''
// let currentBalance = document.getElementById('currentBalance').innerText
//     let currentBalanceNumber = parseFloat(currentBalance)
//     let totalBalance =  currentBalanceNumber - withdrawNumber;
    // document.getElementById('currentBalance').innerText = totalBalance;
    // document.getElementById('withdrawInput').value = ''


})
