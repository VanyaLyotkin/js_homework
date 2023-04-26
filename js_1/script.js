//1

console.log(true + false); //1
console.log(12 / "6");   //2 
console.log("number" + 15 + 3 ); //number153
console.log(15 + 3 + "number"); //18number
console.log("foo" + + "bar"); //fooNaN
console.log('true' == true); //false
console.log(false == 'false'); //false
console.log(null == ''); //false
console.log(!!"false" == !!"true"); // true

//2

function getValidation(num) {
    let weight;
    do {
        weight = prompt(num);
    } while 
    (weight === '' || weight === ' ' || typeof(weight) === null || typeof(weight) === undefined || weight < 65);
    return weight;
}

const weight = getValidation('Введите массу тела (кг): ', '');
const height = prompt('Введите рост (м): ', '');
const yourName = prompt('Введите имя: ', '');
const index = (weight / (Math.pow(height, 2)));
let info;

if (index < 16.5) {
    info = 'крайний недостаток веса';
} else if (index > 16.5 && index < 18.4) {
    info = 'недостаток в весе';
} else if (index > 18.5 && index < 24.9) {
    info = 'нормальный вес';
} else if (index > 25 && index < 30) {
    info = 'избыточная масса тела';
}

alert(`Имя человека: ${yourName}
Ваш ИМТ: ${index}
У вас ${info}
Спасибо, что воспользовались нашим сервисом.`);

//3

let login = prompt('Введите должность: ', '');
let message;

switch (login) {
  case 'Сотрудник':
    message = 'Привет';
    alert(message);
    break;
  case 'Директор':
    message = 'Здравствуйте';
    alert(message);
    break;
  case '':
    message = 'Нет логина'; 
    alert(message);
    break;
  default:
    message = '';
    alert(message);
}