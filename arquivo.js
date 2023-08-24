function generateNumber(){
    

const min = Math.ceil(document.querySelector(".input-enter").value)
const max = Math.floor(document.querySelector(".input-result").value)

const result = Math.floor(Math.random() * (max-min +1)) + min ;
console.log(min, max)

alert(result)
}
