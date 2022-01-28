
var button =document.querySelector('button').addEventListener('click', ()=>{
    
    let item = document.querySelector('input')
    addItem(item.value)
    item.value = ''

})

function addItem(item){

    let list = document.querySelector('ul')
    list.innerHTML += `<li>${item}</li>`

}



































