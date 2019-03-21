
/******************** Clase Inmobiliaria (prototipos) ****************************/

function Inmobiliaria(){
    this._edificios=new Array();
};

Inmobiliaria.prototype.addEdificio=function(edificio){
    this._edificios.push(edificio);
};

