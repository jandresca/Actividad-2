// menu
let op = document.getElementById("op");

const operaciones = () => {
  let op = prompt(
    "Escribe: \n 1 - Suma \n 2 - Resta \n 3 - Multiplicación \n 4 - Division \n 5 - Salir"  
  );

  while (op !== "1" && op !== "2" && op !== "3" && op !== "4" && op !== "5") {
    alert("Favor ingresar una opcion valida de 1 a 4");
    op = prompt(
      "Escribe: \n 1 - Suma \n 2 - Resta \n 3 - Multiplicación \n 4 - Division \n 5 - Salir"
    );
  }

  if (op == "5") {
    return alert("Has salido del menu de operaciones exitosamente");
}

  let num1 = parseFloat(prompt("Ingrese numero 1"));
  let num2 = parseFloat(prompt("Ingrese numero 2"));
  let resultado = 0; // null - undefine - NaN

  if (op == "1") {
    resultado = num1 + num2;
  }
  if (op == "2") {
    resultado = num1 - num2;
  }
  if (op == "3") {
    resultado = num1 * num2;
  }
  if (op == "4") {
    if (num2 === 0) {
      return alert("No se puede dividir por 0");
    } else {
      resultado = num1 / num2;
    }
  }
  
  alert("El resultado es: " + resultado);
};

// eventos
op.onclick = function () {
  operaciones();
};
