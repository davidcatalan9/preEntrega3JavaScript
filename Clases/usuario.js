class Usuario { 
    constructor(
    nombre,
    apellido,
    canReloj,
    totalReloj,
    email,
    usuario,
    clave
    ){
    this.nombre = nombre;
    this.apellido= apellido;
    this.canReloj = canReloj;
    this.totalReloj = totalReloj;
    this.email= email;
    this.usuario = usuario;
    this.clave=clave;
}

toString =()=>{
    return this.usuario +":" + this.usuario + " " + this.email ;
};
}
