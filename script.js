const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "`!@#$%^&*_+|/?.>,<"

// Selectors
const passBox = document.getElementById("pass-box");
const totalChar = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");




const getRandomData = (dataset) => {
    return dataset[Math.floor(Math.random() * dataset.length )]
}
 
const generatePass = (password = "") => {
    if(upperInput.checked){
        password += getRandomData(upperSet); 
    } 
    if(lowerInput.checked){
        password += getRandomData(lowerSet); 
    }
    if(numberInput.checked){
        password += getRandomData(numberSet); 
    }
    if(symbolInput.checked){
        password += getRandomData(symbolSet); 
    }
    if (password.length < totalChar.value) {
        return generatePass(password);
    }
    
    passBox.innerText = truncateString(password, totalChar.value);
}
generatePass();
document.getElementById("btn").addEventListener('click', function () {
    generatePass();    
})


function truncateString(str, num) {
    if(str.length > num){
        let subStr = str.subStr(0, num);
    } else{
        return str;
    }   
}
