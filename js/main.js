const btnpagamento=document.querySelector('#pagamento')
const btncancelar=document.querySelector('#cancelar')
const load=document.querySelector("#load")


const valor=document.querySelector('#valor')
const change=document.querySelector('h6')

let planos=[15.50,19.90,27.25,54.99,79,89.90]

btnpagamento.addEventListener('click',()=>{
  load.style.display="flex";
  setTimeout(() => {
    load.style.display = "none"
  },4000)
})
btncancelar.addEventListener('click',()=>{
  load.style.display="none"
})


change.addEventListener('click',()=>{
  let sort=Math.floor(Math.random()*planos.length)
  valor.innerHTML=planos[sort]+"R$"
})