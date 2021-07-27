let leticia = document.getElementById("leticia");
let medellin = document.getElementById("medellin");
let arauca = document.getElementById("arauca");
let barranquilla = document.getElementById("barranquilla");
let bogota1 = document.getElementById("bogota1");
let cartagena = document.getElementById("cartagena");
let tunja = document.getElementById("tunja");
let manizales = document.getElementById("manizales");
let florencia = document.getElementById("florencia");
let yopal = document.getElementById("yopal");
let popayan = document.getElementById("popayan");
let valledupar = document.getElementById("valledupar");
let quibdo = document.getElementById("quibdo");
let monteria = document.getElementById("monteria");
let bogota = document.getElementById("bogota");
let inirida = document.getElementById("inirida");
let sanJose = document.getElementById("sanJose");
let neiva = document.getElementById("neiva");
let riohacha = document.getElementById("riohacha");
let santaMarta = document.getElementById("santaMarta");
let villavicencio = document.getElementById("villavicencio");
let pasto = document.getElementById("pasto");
let cucuta = document.getElementById("cucuta");
let mocoa = document.getElementById("mocoa");
let armenia = document.getElementById("armenia");
let pereira = document.getElementById("pereira");
let sanAndres = document.getElementById("sanAndres");
let bucaramanga = document.getElementById("bucaramanga");
let sincelejo = document.getElementById("sincelejo");
let ibague = document.getElementById("ibague");
let cali = document.getElementById("cali");
let mitu = document.getElementById("mitu");
let puertoCarreño = document.getElementById("puertoCarreño");

let nombreUsuario = prompt("Ingresa tu nombre");
let nombre = nombreUsuario;
alert("Bienvenido/a " + nombre);

let depa = prompt(
  "Ingresa un departamento de colombia para conocer la capital \n Si quiere salir de este menu orpima el numero 1"
);
depa = depa.toLowerCase();

while (
  depa !== "amazonas" &&
  depa !== "antioquia" &&
  depa !== "arauca" &&
  depa !== "atlantico" &&
  depa !== "bogota" &&
  depa !== "bolivar" &&
  depa !== "boyaca" &&
  depa !== "caldas" &&
  depa !== "caqueta" &&
  depa !== "casanare" &&
  depa !== "cauca" &&
  depa !== "cesar" &&
  depa !== "choco" &&
  depa !== "cordoba" &&
  depa !== "cundinamarca" &&
  depa !== "guainia" &&
  depa !== "guaviare" &&
  depa !== "huila" &&
  depa !== "la guajira" &&
  depa !== "magdalena" &&
  depa !== "meta" &&
  depa !== "nariño" &&
  depa !== "putumayo" &&
  depa !== "quindio" &&
  depa !== "risaralda" &&
  depa !== "san andres y providencia" &&
  depa !== "santander" &&
  depa !== "sucre" &&
  depa !== "tolima" &&
  depa !== "valle del cauca" &&
  depa !== "vaupes" &&
  depa !== "vichada" &&
  depa !== "1"
) {
  alert("Por favor ingresar un departamento valido");
  depa = prompt("Ingresa un departamento de colombia para conocer la capital");
  depa = depa.toLowerCase();
}
if (depa == "1") {
  alert("Has salido exitosamente del menu ");
}

if (depa === "amazonas") {
  alert(
    nombre +
      " La capital de Amazonas es Leticia, para mas informacion: " +
      leticia
  );
}
if (depa === "antioquia") {
  alert(
    nombre +
      " La capital de Antioquia es Medellin, para mas informacion: " +
      medellin
  );
}
if (depa === "arauca") {
  alert(
    nombre + " La capital de Arauca es Arauca, para mas informacion: " + arauca
  );
}
if (depa === "atlantico") {
  alert(
    nombre +
      " La capital de Atlantico es Barranquilla, para mas informacion: " +
      barranquilla
  );
}
if (depa === "bogota") {
  alert(
    nombre + " La capital de Bogota es Bogota, para mas informacion: " + bogota1
  );
}
if (depa === "bolivar") {
  alert(
    nombre +
      " La capital de Bolivar es Cartagena, para mas informacion: " +
      cartagena
  );
}
if (depa === "boyaca") {
  alert(
    nombre + " La capital de Boyaca es Tunja, para mas informacion: " + tunja
  );
}
if (depa === "caldas") {
  alert(
    nombre +
      " La capital de Caldas es manizales, para mas informacion: " +
      manizales
  );
}
if (depa === "caqueta") {
  alert(
    nombre +
      " La capital de Caqueta es Florencia, para mas informacion: " +
      florencia
  );
}
if (depa === "casanare") {
  alert(
    nombre + " La capital de Casanare es Yopal, para mas informacion: " + yopal
  );
}
if (depa === "cauca") {
  alert(
    nombre + " La capital de Cauca es Popayan, para mas informacion: " + popayan
  );
}
if (depa === "cesar") {
  alert(
    nombre +
      " La capital de el Cesar es Valledupar, para mas informacion: " +
      valledupar
  );
}
if (depa === "choco") {
  alert(
    nombre + " La capital de Choco es Quibdo, para mas informacion: " + quibdo
  );
}
if (depa === "cordoba") {
  alert(
    nombre +
      " La capital de Cordoba es Monteria, para mas informacion: " +
      monteria
  );
}
if (depa === "cundinamarca") {
  alert(
    nombre +
      " La capital de Cundinamarca es Bogota, para mas informacion: " +
      bogota
  );
}
if (depa === "guainia") {
  alert(
    nombre +
      " La capital de Guainia es Inirida, para mas informacion: " +
      inirida
  );
}
if (depa === "guaviare") {
  alert(
    nombre +
      " La capital de Guaviare es San Jose del Guaviare, para mas informacion: " +
      sanJose
  );
}
if (depa === "huila") {
  alert(
    nombre + " La capital de Huila es neiva, para mas informacion: " + neiva
  );
}
if (depa === "la guajira") {
  alert(
    nombre +
      " La capital de La Guajira es Riohacha, para mas informacion: " +
      riohacha
  );
}
if (depa === "magdalena") {
  alert(
    nombre +
      " La capital de Magdalena es Santa Marta, para mas informacion: " +
      santaMarta
  );
}
if (depa === "meta") {
  alert(
    nombre +
      " La capital del Meta es Villavicencio, para mas informacion: " +
      villavicencio
  );
}
if (depa === "nariño") {
  alert(
    nombre + " La capital de Nariño es Pasto, para mas informacion: " + pasto
  );
}
if (depa === "norte de santander") {
  alert(
    nombre +
      " La capital de Norte de Santander es Cucuta, para mas informacion: " +
      cucuta
  );
}
if (depa === "putumayo") {
  alert(
    nombre + " La capital de Putumayo es Mocoa, para mas informacion: " + mocoa
  );
}
if (depa === "quindio") {
  alert(
    nombre +
      " La capital de Quindio es Armenia, para mas informacion: " +
      armenia
  );
}
if (depa === "risaralda") {
  alert(
    nombre +
      " La capital de Risaralda es Pereira, para mas informacion: " +
      pereira
  );
}
if (depa === "san andres y providencia") {
  alert(
    nombre +
      " La capital de San Andres y Providencia es San Andres, para mas informacion: " +
      sanAndres
  );
}
if (depa === "santander") {
  alert(
    nombre +
      " La capital de Santander es Bucaramanga, para mas informacion: " +
      bucaramanga
  );
}
if (depa === "sucre") {
  alert(
    nombre +
      " La capital de Sucre es Sincelejo, para mas informacion: " +
      sincelejo
  );
}
if (depa === "tolima") {
  alert(
    nombre + " La capital del Tolima es Ibague, para mas informacion: " + ibague
  );
}
if (depa === "valle del cauca") {
  alert(
    nombre +
      " La capital de Valle del Cauca es Cali, para mas informacion: " +
      cali
  );
}
if (depa === "vaupes") {
  alert(
    nombre + " La capital de Vaupes es Mitu, para mas informacion: " + mitu
  );
}
if (depa === "vichada") {
  alert(
    nombre +
      " La capital de Vichada es Puerto Carreño, para mas informacion: " +
      puertoCarreño
  );
}
