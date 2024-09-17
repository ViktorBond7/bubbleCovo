document.getElementById('toggleSvg').addEventListener('click', toggleText);

function toggleText() {
  const svgText = document.getElementById('svgText');
  const extraText = document.getElementById('extraText');
  const svgElement = document.getElementById('toggleSvg');

  if (svgText.innerHTML === '+') {
    svgText.innerHTML = '-';
    extraText.style.display = 'block';
    svgElement.classList.remove('plus-style');
    svgElement.classList.add('minus-style');
  } else {
    svgText.innerHTML = '+';
    extraText.style.display = 'none';
    svgElement.classList.remove('minus-style');
    svgElement.classList.add('plus-style');
  }
}

// document.getElementById('icon-plus').addEventListener('click', function () {
//   const svg = this;
//   const extraText = document.getElementById('extraText');
//   const useElement = svg.querySelector('use');

//   if (useElement.getAttribute('href') === 'icons.svg#plus') {
//     useElement.setAttribute('href', 'icons.svg#minus');
//     extraText.style.display = 'block';
//   } else {
//     useElement.setAttribute('href', 'icons.svg#plus');
//     extraText.style.display = 'none';
//   }
// });
