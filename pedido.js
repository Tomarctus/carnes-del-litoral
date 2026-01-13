document.getElementById("btnEnviar").addEventListener("click", () => {

    const vacuno = document.getElementById("vacuno").value || 0;
    const cerdo = document.getElementById("cerdo").value || 0;
    const nombre = document.getElementById("nombre").value.trim();
    const direccion = document.getElementById("direccion").value.trim();
    const obs = document.getElementById("obs").value.trim();

    if (!nombre || !direccion) {
        alert("Completá nombre y dirección");
        return;
    }

    let mensaje = `🧾 *Nuevo Pedido*\n`;
    mensaje += `👤 Nombre: ${nombre}\n`;
    mensaje += `📍 Dirección: ${direccion}\n`;
    mensaje += `🐂 Vacuno: ${vacuno}\n`;
    mensaje += `🐖 Cerdo: ${cerdo}\n`;
    if (obs) mensaje += `📝 Obs: ${obs}\n`;

    const telefono = "5491122551700"; // acá va el número final del frigorífico
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    window.location.href = url;
});
