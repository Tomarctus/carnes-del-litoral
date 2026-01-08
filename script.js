const btnEnviar = document.getElementById("btnEnviar");
const modal = document.getElementById("modal");
const resumen = document.getElementById("resumenPedido");

const btnSi = document.getElementById("btnSi");
const btnNo = document.getElementById("btnNo");

btnEnviar.addEventListener("click", () => {
    const cerdo = document.getElementById("cerdo").value || 0;
    const vacuna = document.getElementById("vacuna").value || 0;
    const nombre = document.getElementById("nombre").value.trim();
    const direccion = document.getElementById("direccion").value.trim();

    if (!nombre || !direccion) {
        alert("Por favor completá nombre y dirección");
        return;
    }

    resumen.innerHTML = `
        <strong>Pedido</strong><br><br>
        Media res de cerdo: ${cerdo}<br>
        Media res vacuna: ${vacuna}<br><br>
        <strong>Nombre:</strong> ${nombre}<br>
        <strong>Dirección:</strong> ${direccion}
    `;

    modal.style.display = "flex";
});

btnNo.addEventListener("click", () => {
    modal.style.display = "none";
});

btnSi.addEventListener("click", () => {
    const telefono = "549XXXXXXXXXX"; // se define más adelante
    const mensaje = encodeURIComponent(resumen.innerText);
    window.open(`https://wa.me/${telefono}?text=${mensaje}`, "_blank");
});
