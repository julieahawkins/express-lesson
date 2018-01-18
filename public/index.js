const changeTitleColor = () => {
  console.log('click')
  document.querySelector('h1').style.color='red';
};

document.querySelector('.btn').addEventListener('click', changeTitleColor);

