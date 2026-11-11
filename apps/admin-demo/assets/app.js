// DEMO — todos los datos son ficticios. Login simulado, sin backend real.

const MOCK_TRABAJO = {
  pendiente: [
    { cliente: "Cliente Demo 1", servicio: "Diagnóstico inicial", fecha: "2026-10-02", conf: "green" },
    { cliente: "Cliente Demo 2", servicio: "Implementación MVP", fecha: "2026-10-05", conf: "amber" },
  ],
  cumplida: [
    { cliente: "Cliente Demo 3", servicio: "Soporte", fecha: "2026-09-20", conf: "green" },
  ],
const MOCK_MENSAJES = {

const MOCK_PRODUCTOS = [ funcional del servicio" },
  { name: "Soporte y mantenimiento", desc: "Acompañamiento post-lanzamiento" },
];o-table tbody");
  tbody.innerHTML = MOCK_TRABAJO[tab].map(
    (r) => `<tr><td>${r.cliente}</td><td>${r.servicio}</td><td>${r.fecha}</td>
      <td><span class="dot ${r.conf}"></span>${r.conf === "green" ? "Enviada" : r.conf === "amber" ? "Pendiente" : "Fallida"}</td></tr>`
  ).join("");lue">${k.value}</div><div class="label">${k.label}</div></div>`
  ).join("");tent = MOCK_MENSAJES.central.length;
  document.getElementById("badge-contacto").textContent = MOCK_MENSAJES.contacto.length;
}

}

function renderConexiones() {
  document.getElementById("conexiones-list").innerHTML = MOCK_CONEXIONES.map(
    (c) => `<li><span class="dot ${c.status}"></span>${c.name} — ${c.status === "green" ? "Operativo" : "Advertencia"}</li>`
  ).join("");
}
