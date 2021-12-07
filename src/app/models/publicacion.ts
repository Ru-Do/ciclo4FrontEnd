export class Publicacion {

  _id?: number;
  sector: string;
  fechaInicio: string;
  fechaFin: string;
  descripcion: string;
  idDueno: string;
  nombreDueno:string;
  tipoDona: string;
  nivelAcademico: string;

  constructor(
    sector: string,
    fechaInicio: string,
    fechaFin: string,
    descripcion: string,
    idDueno: string,
    nombreDueno: string,
    tipoDona: string,
    nivelAcademico: string,
      ){
        this.sector = sector,
        this.fechaInicio = fechaInicio,
        this.fechaFin = fechaFin,
        this.descripcion = descripcion,
        this.idDueno = idDueno,
        this.nombreDueno = nombreDueno,
        this.tipoDona = tipoDona,
        this.nivelAcademico = nivelAcademico
  }

}
