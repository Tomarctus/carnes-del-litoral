function copiarLink() {
    const input = document.getElementById("publicLink");
    navigator.clipboard.writeText(input.value);
    alert("Link copiado!");
}

function copiarMensaje() {
    const msg = document.getElementById("mensaje").value;
    navigator.clipboard.writeText(msg);
    alert("Mensaje copiado!");
}
// Generar QR automáticamente al cargar el panel
const link = document.getElementById("publicLink").value;

new QRCode(document.getElementById("qrContainer"), {
    text: link,
    width: 200,
    height: 200,
});
function descargarQR() {
    const img = document.querySelector("#qrContainer img");

    if (!img) {
        alert("No se encontró el QR");
        return;
    }

    const linkDescarga = document.createElement('a');
    linkDescarga.href = img.src;
    linkDescarga.download = "qr_carnes.png";
    linkDescarga.click();
}
