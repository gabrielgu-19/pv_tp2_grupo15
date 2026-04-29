import { cambiar_capital} from "./funciones21.js";

const paises = document.getElementById("paises");
const capitales = document.getElementById("capitales");

paises.addEventListener("change", () => {
    cambiar_capital(paises, capitales);
});