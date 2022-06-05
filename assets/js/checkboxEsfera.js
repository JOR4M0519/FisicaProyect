var checkboxEsfera = document.getElementById('cbe');
checkboxEsfera.addEventListener('click', function() {

 

 if (checkboxEsfera .checked) {
   
   document.getElementById('imagenEsfera').src="./assets/img/externa.gif";
   document.getElementById('dataR').innerHTML=
   `<span class="input-group-text" id="inputGroup-sizing-sm">R</span>
   <input type="text" id="R2" class="form-control" aria-label="Sizing example input"
     aria-describedby="inputGroup-sizing-sm">
   <span class="input-group-text" id="inputGroup-sizing-sm">m</span>
   <span class="input-group-text" id="x10R2">x10</span>
   <input type="text" id="eR2" class="form-control" aria-label="Sizing example input"
     aria-describedby="inputGroup-sizing-sm">
   <div class="form-check form-switch" style="margin-left: 1%;">
     <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" id="cbc"
       value="x10R2/eR2/R2" onclick="checkbox(this)" checked>
     <label class="form-check-label" for="flexSwitchCheckDefault">Notación</label>
   </div>`;

 } else {
   document.getElementById('imagenEsfera').src="./assets/img/interna.gif";
   document.getElementById('dataR').innerHTML="";
 }
});

var checkboxCarga = document.getElementById('cbc');
checkboxCarga.addEventListener('click', function() {

 if (checkboxCarga .checked) {
   document.getElementById('cargaSpan').innerHTML="ρ";
   document.getElementById('unidadesCarga').innerHTML="C/m³";
 }else{
   document.getElementById('cargaSpan').innerHTML="Q";
   document.getElementById('unidadesCarga').innerHTML="C";
 }
 
});
