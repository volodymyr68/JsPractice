const openButtons=document.querySelectorAll('[data-modal-button]')
const closeButtons=document.querySelectorAll('[data-modal-close]')
const allModals= document.querySelectorAll('[data-modal]');

openButtons.forEach(function (item){
    item.addEventListener('click',function (){
        const modalId=this.dataset.modalButton
        const modal=document.querySelector('#'+modalId)
        modal.classList.remove('hidden')
        const fadeClose=modal.querySelector('.modal-window')
            .addEventListener('click', function(event){
                event.stopPropagation();
            })
    })
})

closeButtons.forEach(function (item){
    item.addEventListener('click',function (){
        const modal=this.closest('[data-modal]')
        modal.classList.add('hidden')
    })
})


allModals.forEach(function (item){
    item.addEventListener('click',function (){
        this.classList.add('hidden')
    })
})

allModals.forEach(function (item){
    item.addEventListener('click',function (event){
        this.event.stopPropagation()
    })
})
