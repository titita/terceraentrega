const carrito = JSON.parse(localStorage.getItem("carrito"));
console.log(carrito);

let tabla= document.getElementById("tablabody")

carrito.forEach(element => {
    

    tabla.innerHTML += `
    <tr>
    <td>${element.id}</td>
    <td>${element.nombre}</td>
    <td>${element.precio}</td>
    </tr>
    `;
});
totalCarrito = carrito.reduce ((acumulador,producto)=> acumulador + producto.precio,0);
let infoTotal = document.getElementById("total");
infoTotal.innerText="Total a pagar $:"+totalCarrito;

function eliminarCarrito(){
    localStorage.setItem("totalCarrito",null);
    localStorage.setItem('total',"0");
    $(".total").html('');
}
