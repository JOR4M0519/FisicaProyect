document.getElementById('btnAddCarga').addEventListener('click', function () {

    var num = document.getElementById('cantidadCargas').value;
    num = parseInt(num) + 1;

    document.getElementById('divCargas').innerHTML += `
  
  <br id="br${num}">
<div id="divCarga${num}" class="input-group input-group-sm mb-3" style="padding-left: 30%; padding-right: 30%;">
<div class="input-group input-group-sm mb-3">
  <span class="input-group-text" id="inputGroup-sizing-sm">Carga ${num}</span>
  <input type="text" id="c${num}" class="form-control" aria-label="Sizing example input"
    aria-describedby="inputGroup-sizing-sm">
  <span class="input-group-text" id="inputGroup-sizing-sm">C</span>
  <span class="input-group-text" id="x10c${num}">x10</span>
  <input type="text" id="ec${num}" class="form-control" aria-label="Sizing example input"
    aria-describedby="inputGroup-sizing-sm">
    <div class="form-check form-switch" style="margin-left: 1%;">
      <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" id="cbc${num}"
        value="x10c${num}/ec${num}/c${num}" onclick="checkbox(this)" checked>
      <label class="form-check-label" for="flexSwitchCheckDefault">Notación</label>
    </div>
</div>

<div class="input-group input-group-sm mb-3">
  <span class="input-group-text" id="inputGroup-sizing-sm">x</span>
  <input type="text" id="x${num}" class="form-control" aria-label="Sizing example input"
    aria-describedby="inputGroup-sizing-sm">
  <span class="input-group-text" id="inputGroup-sizing-sm">m</span>
  <span class="input-group-text" id="x10x${num}">x10</span>
  <input type="text" id="ex${num}" class="form-control" aria-label="Sizing example input"
    aria-describedby="inputGroup-sizing-sm">
    <div class="form-check form-switch" style="margin-left: 1%;">
      <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" id="cbx${num}"
        value="x10x${num}/ex${num}/x${num}" onclick="checkbox(this)" checked>
      <label class="form-check-label" for="flexSwitchCheckDefault">Notación</label>
    </div>
</div>
<div class="input-group input-group-sm mb-3">
  <span class="input-group-text" id="inputGroup-sizing-sm">y</span>
  <input type="text" id="y${num}" class="form-control" aria-label="Sizing example input"
    aria-describedby="inputGroup-sizing-sm">
  <span class="input-group-text" id="inputGroup-sizing-sm">m</span>
  <span class="input-group-text" id="x10y${num}">x10</span>
  <input type="text" id="ey${num}" class="form-control" aria-label="Sizing example input"
    aria-describedby="inputGroup-sizing-sm">
    <div class="form-check form-switch" style="margin-left: 1%;">
      <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" id="cby${num}"
        value="x10y${num}/ey${num}/y${num}" onclick="checkbox(this)" checked>
      <label class="form-check-label" for="flexSwitchCheckDefault">Notación</label>
    </div>
</div>
  
  `;

    document.getElementById('cantidadCargas').value = num;


});


document.getElementById('deleteCarga').addEventListener('click', function () {

    var num = document.getElementById('cantidadCargas').value;
    if (num <= 1) {
        alert('No hay cargas que se puedan eliminar');
    } else {
        $(`#divCarga${num}`).remove();
        $(`#br${num}`).remove();
        document.getElementById('cantidadCargas').value = parseInt(num) - 1;
    }
});