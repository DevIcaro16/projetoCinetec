const cinetecForm = document.getElementById("cinetecForm");

var username = document.getElementById("username");
  
var email = document.getElementById("email");

var CPF = document.getElementById("CPF");

var telefone = document.getElementById("telefone");

var password = document.getElementById("password");

var passwordTwo = document.getElementById("passwordtwo");





cinetecForm.addEventListener("submit", (e) => {
  

  var usernameValue = document.querySelector("#username").value;
  
  var emailValue = document.querySelector("#email").value;
  
  var CPFValue = document.querySelector("#CPF").value;
  
  var telefoneValue = document.querySelector("#telefone").value;
  
  var passwordValue = document.querySelector("#password").value;
  
  var passwordtwoValue = document.querySelector("#passwordtwo").value;

  
  
   
  
    }

    function validarCPF(cpf){
      cpf = cpf.replace(/\D/g, '');
      if(cpf.toString().length != 11 || /^(\d)\1{10}$/.test(cpf)) return false;
      var result = true;
      
      [9,10].forEach(function(j){
          var soma = 0, r;
          cpf.split(/(?=)/).splice(0,j).forEach(function(e, i){
              soma += parseInt(e) * ((j+2)-(i+1));
          });
          r = soma % 11;
          r = (r <2)?0:11-r;
          if(r != cpf.substring(j, j+1)) 
          document.getElementById("msgAlerta").innerHTML = "<p style ='color: #f00;'>Erro: O CPF é inválido! </p>";
      });

      console.log(cpf,CPF(cpf));

      if(result == true){

            document.getElementById("msgAlerta").innerHTML = " <div class='alert alert-success' role='alert'> A simple success alert—check it out!</div>";           

      }else{

            document.getElementById("msgAlerta").innerHTML = "<div class='alert alert-danger' role='alert'>A simple danger alert—check it out!</div>";

      }

      if(passwordValue != passwordtwoValue){
  
        e.preventDefault();
        document.getElementById("msgAlerta").innerHTML = "<p style ='color: #f00;'> As senhas não são iguais! </p>"

      return result;
      
      

  }
  

    
    validarCPF(CPFValue);

});











/*const tbody = document.querySelector(".form")
const agendaForm = document.getElementById("agendaForm");
const msgAlerta = document.getElementById("msgAlerta");


const cadastrarUsuario = async(pagina) => {

const dados = await fetch("cadastro.php" + pagina);

const resposta = await dados.text();

tbody.innerHTML = resposta;


}

cadastrarUsuario(1);

agendaForm.addEventListener("submit",async (e) => {

  e.preventDefault();
  console.log("Cadastrar");

  const dadosForm = new FormData(agendaForm);
  dadosForm.append("add",1);
 
 



  

});


*/













/*
const form = document.getElementById('agendaForm')
const username = document.getElementById('username')
const email = document.getElementById('email')
const CPF = document.getElementById('CPF')
const telefone = document.getElementById('telefone')
const password = document.getElementById('password')
const passwordtwo = document.getElementById('passwordtwo')


form.addEventListener('submit',(e) => {
    e.preventDefault()

  

    const formData = new FormData(this);
    const searchParams = new URLSearchParams();


    for(const params of formData){

      searchParams.append(params[0],params[1],params[2],params[3],params[4],params[5]);
      
      
      }

      fetch('cadastro.php',{method:'POST',body:formData
}).then(function(response){

  document.getElementById('username').value=" ";
  document.getElementById('email').value=" ";
  document.getElementById('CPF').value=" ";
  document.getElementById('telefone').value=" ";
  document.getElementById('password').value=" ";
  document.getElementById('passwordtwo').value=" ";

  return alert("Usuário Cadastrado com Sucesso!");

}).catch(function(error){

  console.log(error);
});

})

function checkInputs(){ 

      const usernameValue = username.value.trim()
      const emailValue = email.value.trim()
      const CPFValue = CPF.value.trim()
      const telefoneValue = telefone.value.trim()
      const passwordValue = password.value.trim()
      const passwordtwoValue = passwordtwo.value.trim()

      if(usernameValue === "") {
         //mostrar o erro
        //adicionar a classse error
        errorValidation(username, 'Preencha esse campo')
      } else {
        //adicionar a classe de successo
        successValidation(username)
      }

  if(emailValue ===''){
      errorValidation(email, 'Preencha esse campo')
  }else{
    successValidation(email)
  }
  if(CPFValue ===''){
      errorValidation(CPF, 'Preencha esse campo')
  }else{
    successValidation(CPF)
  }
  if(telefoneValue ===''){
      errorValidation(telefone, 'Preencha esse campo')
  }else{
    successValidation(telefone)
  }

  if(passwordValue === ''){
    errorValidation(password, 'Preencha esse campo')
  }else if (passwordValue.length < 8 ){
    errorValidation(password, ' A senha deve ter + de 8 caracteres ')
  }else{
    successValidation(password)
  }

   if(passwordtwoValue ===''){
      errorValidation(passwordtwo, 'Preencha esse campo')
   } else if (passwordValue !== passwordtwoValue){
    errorValidation(passwordtwo,' Senha não são a mesma')
   }else{
    successValidation(passwordtwo)
   }

    }

  function errorValidation(input,message){
    const formControl = input.parentElement;

    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
}

function successValidation(input){
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
} 

*/
