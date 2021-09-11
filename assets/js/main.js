// fórmula: IMC = peso / (altura * altura)

// document.querySelector('#formulario').

function calcularIMC(event) {
  event.preventDefault();
  
  let peso = document.querySelector('#peso').value;
  let altura = document.querySelector('#altura').value / 100;
  let imc = (peso / (altura * altura)).toFixed(2);

  document.querySelector('#resultado').innerHTML = ''

  if (imc < 18.5) {
    document.querySelector('#resultado').style.display = 'block';
    document.querySelector('#resultado').innerHTML = `Seu IMC é ${imc} (Abaixo do peso)`;
  } else if (imc >= 18.5 && imc < 25) {
    document.querySelector('#resultado').style.display = 'block';
    document.querySelector('#resultado').innerHTML = `Seu IMC é ${imc} (Peso normal)`;
  } else if (imc >= 25 && imc < 30) {
    document.querySelector('#resultado').style.display = 'block';
    document.querySelector('#resultado').innerHTML = `Seu IMC é ${imc} (Sobrepeso)`;
  } else if (imc >= 30 && imc < 35) {
    document.querySelector('#resultado').style.display = 'block';
    document.querySelector('#resultado').innerHTML = `Seu IMC é ${imc} (Obesidade Grau 1)`;
  } else if (imc >= 35 && imc < 40) {
    document.querySelector('#resultado').style.display = 'block';
    document.querySelector('#resultado').innerHTML = `Seu IMC é ${imc} (Obesidade Grau 2)`;
  } else if (imc >= 40) {
    document.querySelector('#resultado').style.display = 'block';
    document.querySelector('#resultado').innerHTML = `Seu IMC é ${imc} (Obesidade Grau 3)`;
  }
}