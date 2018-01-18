const changeTitleColor = () => {
  document.querySelector('h1').style.color='red';
};

document.getElementById('btn').addEventListener('click', changeTitleColor);
