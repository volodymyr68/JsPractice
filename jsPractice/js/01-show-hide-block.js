
const content = document.querySelector('#content')
const button = document.querySelector('#button')
button.addEventListener('click',function () {
    content.classList.toggle('content-hidden')
    if (content.classList.contains('content-hidden'))
        button.textContent='Открыть блок'
    else
        button.textContent='Закрыть блок'
})


