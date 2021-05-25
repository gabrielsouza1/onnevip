export default () => {
  const li = document.querySelectorAll('.promotion-left > div:nth-child(1) > div ul li')
  const containerModal = document.querySelectorAll('.modalNotice')
  const btnClose = document.querySelectorAll('.btn-close')
  
  function activeModal(){
    this.nextElementSibling.classList.add('show')
  }
  function cliqueforaModal(event){
    if(event.target === this) event.target.classList.remove('show')
  }

  li.forEach(i => i.addEventListener('click', activeModal))
  containerModal.forEach(item => item.addEventListener('click', cliqueforaModal))
  btnClose.forEach(item => item.addEventListener('click', (event) => event.currentTarget.parentNode.parentNode.classList.remove('show')))
}