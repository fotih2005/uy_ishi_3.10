const ElForm = document.querySelector('.form')
const username = document.querySelector('.user_name')
const userEmail = document.querySelector('.user_email')
const userOrder = document.querySelector('.user_order')
const ElBtn = document.querySelector('.btn')
const list = document.querySelector('.list-group')

function AddItem(e) {
    e.preventDefault()
    if (username.value.trim() && userOrder.value.trim()){
        const item = document.createElement('li')
        item.className = 'list-group-item p-3 mt-4 mb-4 me-4 ms-4'
        item.textContent = 'Name:' + username.value.trim() +' '+'Order:'+ userOrder.value.trim() +' '+'Email:'+ userEmail.value
        const checkBox = document.createElement('input')
        checkBox.className = 'd-inline-block me-auto'
        checkBox.type = 'checkbox'
        item.prepend(checkBox, )
        list.append(item ,)
    } else {
        alert("iltimos ism familya va buyurmangiz nomini qaytadan kirgazing")
    }
}
ElBtn.addEventListener('click', AddItem)