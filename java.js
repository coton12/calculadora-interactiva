
 function calcularMultiplicacion() {
         const n1 = parseFloat(document.getElementById('multNum1').value);
 const n2 = parseFloat(document.getElementById('multNum2').value);
 const rContainer = document.getElementById('resMult');

 if (isNaN(n1) || isNaN(n2)) {
     rContainer.textContent = "Por favor, llena ambos campos.";
 return;
         }

 rContainer.textContent = `Resultado: ${n1 * n2}`;
     }
