//Clona uma linha como base
const linha = document.querySelector('.product');
const clone = linha.cloneNode(true);


function updateSubtotal(product) {    
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  const subtotal = product.querySelector('.subtotal span')
  subtotal.innerText = +price.innerText * +quantity.value
  return (+price.innerText * +quantity.value)
}


function calculateAll() {
    const products = document.getElementsByClassName('product')
    let sum = 0;
    const total = document.querySelector('#total-value span')
    for (let i = 0; i<products.length; i++){sum += updateSubtotal(products[i])}
    total.innerText = sum
}

function removeProduct(event) {
  event.currentTarget.parentNode.parentNode.remove()
  calculateAll()
}


function createProduct(clone) {
  //GET OBJETOS NAS VARIAVEIS
  const productName = document.querySelector('.create-product td input[type=text]').value;
  const productPrice = document.querySelector('.create-product td input[type=number').value;


  //GET TABELA E LINHA
  const tabela = document.querySelector('tbody');
  
  //CLONE 
  clone = linha.cloneNode(true);

  clone.querySelector('.name span').innerHTML = productName;
  clone.querySelector('.price span').innerHTML = productPrice;
  // Limpa os campos Quantitu e Subtotal 
  clone.querySelector('.quantity input').value = 0;
  clone.querySelector('.subtotal span').innerHTML = 0;
  
  tabela.appendChild(clone);

  //GERAR DELETAR
  const btnRemove = document.querySelectorAll('.btn-remove')
  btnRemove.forEach(btn => btn.addEventListener('click', removeProduct));

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //BUSCA CREATED
  const createProductBtn = document.querySelector('#create');
  createProductBtn.addEventListener('click', createProduct);

  //BUSCA BOTAO REMOVER 
  const btnRemove = document.querySelectorAll('.btn-remove')
  btnRemove.forEach(btn => btn.addEventListener('click', removeProduct));
    
})
  

  