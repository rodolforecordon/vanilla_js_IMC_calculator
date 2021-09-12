const form = document.querySelector('#myForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputWeight = e.target.querySelector('#weight')
  const inputHeight = e.target.querySelector('#height')

  const weight = Number(inputWeight.value);
  const height = Number(inputHeight.value) / 100;

  if (!weight) {
    setResult('Invalid weight.', false);
    return;
  }

  if (!height) {
    setResult('Invalid height.', false);
    return;
  }

  const bmi = getBmi(weight, height);
  const bmiClass = getBmiClass(bmi)

  const msg = `Your BMI is ${bmi} (${bmiClass}).`;

  setResult(msg, true);
})

function getBmiClass(bmi) {
  const bmiClass = ['Underweight', 'Healthy', 'Overweight',
    'Obese (Class 1)', 'Obese - Class 2', 'Obese - Class 3'];

  if (bmi >= 40) return bmiClass[5];
  if (bmi >= 35) return bmiClass[4];
  if (bmi >= 30) return bmiClass[3];
  if (bmi >= 25) return bmiClass[2];
  if (bmi >= 18.5) return bmiClass[1];
  if (bmi < 18.5) return bmiClass[0];
}

function getBmi(weight, height) {
  const bmi = weight / height ** 2;
  return bmi.toFixed(2);
}

function createParagraph() {
  const p = document.createElement('p');
  return p;
}

function setResult(message, isValid) {
  const result = document.querySelector('#result');
  result.innerHTML = '';

  const p = createParagraph();

  if (isValid) {
    p.classList.add('result-paragraph');
  } else {
    p.classList.add('bad');
  }

  p.innerHTML = message;
  result.appendChild(p);
}