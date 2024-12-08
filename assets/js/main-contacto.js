import { titulosContacto } from "./titulos.js";
import { tituloDinamico, enviarFormulario } from "./funciones.js";

tituloDinamico(titulosContacto);

const form = document.querySelector("form");

const serviceID = "service_znxhcha";
const templateID = "template_9lo88pu";

enviarFormulario(form, serviceID, templateID);
