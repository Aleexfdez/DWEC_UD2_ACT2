export default class Instituto{
    constructor(codigoInstituto, nombreInstituto){
        this._codigoInstituto = codigoInstituto;
        this._nombreInstituto = nombreInstituto;
        this._gruposInstituto = [];
    }

    get nombreInstituto(){
        return this._nombreInstituto;
    }
    get CodigoInstituto(){
        return this._codigoInstituto;
    }

    get GruposInstituto(){
        return this._gruposInstituto;
    }
    set nombreInstituto(nombreInstituto){
         this._nombreInstituto = nombreInstituto;
    }
    set CodigoInstituto(codigoInstituto){
         this._codigoInstituto = codigoInstituto;
    }

    addGrupos(grupo){
        this._gruposInstituto.push(grupo);
    }

    totalAlumnosInstituto(){
        var totalAlumnos = 0;
        if(this.GruposInstituto.length!=0){
             this._gruposInstituto.forEach(grupo => {
            totalAlumnos += grupo.NumeroAlumnos;
        });
        }
        return totalAlumnos;
    }
}