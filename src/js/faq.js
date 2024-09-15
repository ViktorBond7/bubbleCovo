document.getElementById('toggleSvg').addEventListener('click', toggleText);

function toggleText() {
  const svgText = document.getElementById('svgText');
  const extraText = document.getElementById('extraText');

  if (svgText.innerHTML === '+') {
    svgText.innerHTML = '-';
    extraText.style.display = 'block';
  } else {
    svgText.innerHTML = '+';
    extraText.style.display = 'none';
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
