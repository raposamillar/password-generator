
const handleClick = () => {
  let len = prompt('How long would you like the password to be (8-128)?');
  if(len<8 || len>128) return handleClick;

  
};

document.querySelector('button').addEventListener('click', handleClick);