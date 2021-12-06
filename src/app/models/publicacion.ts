export class Publicacion {

  _id?: number;
  sector: string;
  fechaInicio: Date;
  fechaFin: Date;
  descripcion: string;
  idDueno: string;
  tipoDona: string;
  nivelAcademico: string;

  constructor(
    sector: string,
    fechaInicio: Date,
    fechaFin: Date,
    descripcion: string,
    idDueno: string,
    tipoDona: string,
    nivelAcademico: string,
      ){
        this.sector = sector,
        this.fechaInicio = fechaInicio,
        this.fechaFin = fechaFin,
        this.descripcion = descripcion,
        this.idDueno = idDueno,
        this.tipoDona = tipoDona,
        this.nivelAcademico = nivelAcademico
  }

}
