email = document.querySelector('#email');
passwd = document.querySelector('#passwd');
entrar = document.querySelector("#entrar");

let usuario = localStorage.getItem('usuario');
let emailUser = JSON.parse(usuario);
console.log(emailUser.email)

entrar.addEventListener('click', (evento) => {

  evento.preventDefault();
  if(!usuario){
    return alert('Usuário não encontrado!');
  }
  if(email.value == '' || passwd.value == '') {
    alert('Preencha os campos corretamente e tente novamente!');
    return;
  }

    if(email.value == emailUser.email && passwd.value == emailUser.passwd){
      window.location.href = "./home.html"
      alert('deu bom');
    }
    else{
      alert('Usuário não encontrado!');
    }
console.log(email.value)

})
// const teste = localStorage.getItem('usuario')
// const objetoteste = JSON.parse(teste)
// console.log(objetoteste.email)
