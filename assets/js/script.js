// Variables
let btnBuscar = document.getElementById("btnBuscar");
let btnLeer = document.getElementById("btnLeer"); // leermas button

// Functions
const btnBuscarF = () => {
  btnBuscar.innerHTML = "<input>";
};

const btnLeerF = () => {
  window.open(
    "https://www.almacenesonly.com/index.php/historia-de-almacenes-only/",
    (target = "_blank")
  );
};

//OnCliks
btnBuscar.onclick = function () {
  btnBuscarF();
};
btnLeer.onclick = function () {
  btnLeerF();
};
