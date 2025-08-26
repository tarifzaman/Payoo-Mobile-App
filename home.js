console.log("yes connected")

document.getElementById("add-money-btn").addEventListener("click",function(e){
    e.preventDefault()
    console.log("add money button clicked")

    const bank = document.getElementById("bank").value 
    const accountNumber = document.getElementById("bank-account-number").value 
    const amount = parseInt(document.getElementById("add-amount").value) 
    const pin = document.getElementById("add-pin").value

    const availableBalance = parseInt(document.getElementById("available-balance").innerText)

    console.log(availableBalance);

    const totalNewAvailableBalance = availableBalance+amount

    document.getElementById("available-balance").innerText = totalNewAvailableBalance
})