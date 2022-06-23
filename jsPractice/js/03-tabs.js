const tabs = document.querySelectorAll('[data-tab]')
const contentBoxes = document.querySelectorAll('[data-tab-content]')
tabs.forEach(function (item) {
    item.addEventListener('click',function (){

        contentBoxes.forEach(function (contentBoxes){
            contentBoxes.classList.add('hidden')
        })
        const contentBox=document.querySelector('#'+this.dataset.tab)
        contentBox.classList.toggle('hidden')
    })
})