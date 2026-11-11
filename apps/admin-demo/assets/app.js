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
];
  renderMensajeria();
  renderProductos();
  renderConexiones();
});

// --- Nav ---
document.querySelectorAll(".nav-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".nav-btn").forEach((b) => b.classList.remove("active"));
    document.querySelectorAll(".section").forEach((s) => s.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(`section-${btn.dataset.section}`).classList.add("active");
  });
});

function renderOverview() {
  const grid = document.getElementById("kpi-grid");
  grid.innerHTML = [
    { label: "Usuarios registrados", value: "128 (demo)" },
    { label: "En curso", value: "6 (demo)" },
    { label: "Terminados", value: "42 (demo)" },
  ].map((k) => `<div class="kpi"><div class="value">${k.value}</div><div class="label">${k.label}</div></div>`).join("");
}

function renderTrabajo(tab) {
  document.querySelectorAll('#section-trabajo .tab-btn').forEach((b) => {
    b.classList.toggle("active", b.dataset.tab === tab);
  });
  const tbody = document.querySelector("#trabajo-table tbody");
  tbody.innerHTML = MOCK_TRABAJO[tab].map(
    (r) => `<tr><td>${r.cliente}</td><td>${r.servicio}</td><td>${r.fecha}</td>
      <td><span class="dot ${r.conf}"></span>${r.conf === "green" ? "Enviada" : r.conf === "amber" ? "Pendiente" : "Fallida"}</td></tr>`
  ).join("");
}
document.querySelectorAll('#section-trabajo .tab-btn').forEach((b) =>
  b.addEventListener("click", () => renderTrabajo(b.dataset.tab))
);

function renderVentas(range) {
  document.querySelectorAll('#section-ventas .tab-btn').forEach((b) => {
    b.classList.toggle("active", b.dataset.range === range);
  });
  const grid = document.getElementById("ventas-grid");
  grid.innerHTML = MOCK_VENTAS[range].map(
    (k) => `<div class="kpi"><div class="value">${k.value}</div><div class="label">${k.label}</div></div>`
  ).join("");
}
document.querySelectorAll('#section-ventas .tab-btn').forEach((b) =>
  b.addEventListener("click", () => renderVentas(b.dataset.range))
);

function renderMensajeria() {
  document.getElementById("inbox-central").innerHTML =
    MOCK_MENSAJES.central.map((m) => `<li>${m}</li>`).join("");
  document.getElementById("inbox-contacto").innerHTML =
    MOCK_MENSAJES.contacto.map((m) => `<li>${m}</li>`).join("");
  document.getElementById("badge-central").textContent = MOCK_MENSAJES.central.length;
  document.getElementById("badge-contacto").textContent = MOCK_MENSAJES.contacto.length;
}

function renderProductos() {
  document.getElementById("productos-list").innerHTML = MOCK_PRODUCTOS.map(
    (p) => `<div class="card"><h3>${p.name}</h3><p>${p.desc}</p></div>`
  ).join("");
}

function renderConexiones() {
  document.getElementById("conexiones-list").innerHTML = MOCK_CONEXIONES.map(
    (c) => `<li><span class="dot ${c.status}"></span>${c.name} — ${c.status === "green" ? "Operativo" : "Advertencia"}</li>`
  ).join("");
}
