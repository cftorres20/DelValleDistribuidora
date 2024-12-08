import { titulosContacto } from "./titulos.js";
import { tituloDinamico, enviarFormulario } from "./funciones.js";

tituloDinamico(titulosContacto);

// Seleccionar el formulario
const form = document.querySelector("form");

// Configurar `emailjs`
const serviceID = "service_znxhcha";
const templateID = "template_9lo88pu";

// Llamar a la función para manejar el envío del formulario
enviarFormulario(form, serviceID, templateID);
