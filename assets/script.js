const alpha = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const characters = '!@#$%^&*_-';

const handleClick = () => {
  let len = prompt('How long would you like the password to be (8-128)?');
  if(len<8 || len>128) return handleClick();

  let lower = confirm("Would you like your password to have lowercase letters?");
  let upper = confirm("Would you like your password to have uppercase letters?");
  let numeric = confirm("Would you like your password to have numeric values?");
  let special = confirm("Would you like your password to have special characters?");

  let temp = '';

  if(lower) temp += alpha;
  if(upper) temp += alpha.toUpperCase();
  if(numeric) temp += number;
  if(special) temp += characters;

  let password = '';

  for (let i = 0; i < len; i++) {
    password += temp[Math.floor(Math.random()* temp.length)]
  };

  document.querySelector('textarea').value = password;  
  console.log(temp);
};

document.querySelector('button').addEventListener('click', handleClick);