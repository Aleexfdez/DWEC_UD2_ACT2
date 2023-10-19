
export default class Grupo{
    constructor(codigoGrupo, numeroAlumnos){
        this._codigoGrupo = codigoGrupo;
        this._numeroAlumnos = numeroAlumnos;
    }
    get CodigoGrupo(){
        return this._codigoGrupo;
    }
    get NumeroAlumnos(){
        return this._numeroAlumnos;
    }

    set CodigoGrupo(codigoGrupo){
         this._codigoGrupo =codigoGrupo;
    }
    set NumeroAlumnos(numeroAlumnos){
         this._numeroAlumnos = numeroAlumnos;
    }
}