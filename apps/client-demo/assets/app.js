// DEMO — todos los datos son ficticios. No hay llamadas a un backend real.
const MOCK_SERVICES = [
  { id: "svc-1", name: "Diagnóstico inicial", desc: "Evaluación de proceso a digitalizar" },
  { id: "svc-2", name: "Implementación MVP", desc: "Primera versión funcional del servicio" },
  { id: "svc-3", name: "Soporte y mantenimiento", desc: "Acompañamiento post-lanzamiento" },
];

function renderServices() {
  const list = document.getElementById("services-list");
  list.innerHTML = MOCK_SERVICES.map(
    (s) => `<div class="card"><h3>${s.name}</h3><p>${s.desc}</p></div>`
  ).join

  const select = document.getElementById("service");
  select.innerHTML = MOCK_SERVICES.map(
    (s) => `<option value="${s.id}">${s.name}
  ).join(""
function handleBooking(e) {
  e.preventDefault();
  const name = document.getElementById("name").val de "${service}" para el ${date}
    quedaría registrada. En la versión real esto se conecta al panel administrativo
    en tiempo real (ver <em>admin-demo</em>).
  `;
  e.target.reset();
}

renderServices();
document.getElementById("booking-form").addEventListener("submit", handleBooking);
