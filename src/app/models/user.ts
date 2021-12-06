export class User {

  _id?:number;
  ciudad: string;
  contrasena: string;
  correoElectronico: string;
  direccion: string;
  nombreOrganizacion: string;
  numeroDocumento: number;
  numeroTelefono1: number;
  numeroTelefono2: number;
  pais: string;
  primerApellido: string;
  primerNombre: string;
  sector: string;
  segundoApellido: string;
  segundoNombre: string;
  tipoDocumento: string;
  tipoUsuario: string;

  constructor(ciudad: string,
    contrasena: string,
    correoElectronico: string,
    direccion: string,
    nombreOrganizacion: string,
    numeroDocumento: number,
    numeroTelefono1: number,
    numeroTelefono2: number,
    pais: string,
    primerApellido: string,
    primerNombre: string,
    sector: string,
    segundoApellido: string,
    segundoNombre: string,
    tipoDocumento: string,
    tipoUsuario: string){
      this.ciudad = ciudad;
      this.contrasena = contrasena;
      this.correoElectronico = correoElectronico;
      this.direccion = direccion;
      this.nombreOrganizacion = nombreOrganizacion;
      this.numeroDocumento = numeroDocumento;
      this.numeroTelefono1 = numeroTelefono1;
      this.numeroTelefono2 = numeroTelefono2;
      this.pais = pais;
      this.primerApellido = primerApellido;
      this.primerNombre = primerNombre;
      this.sector = sector;
      this.segundoApellido = segundoApellido;
      this.segundoNombre = segundoNombre
      this.tipoDocumento = tipoDocumento
      this.tipoUsuario = tipoUsuario
    }

}

