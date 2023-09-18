
 export class Tarea {
    nombre : string
    fecha_de_nacimiento: number
    completada : boolean 

    constructor(nombre : string, fecha_de_nacimiento: number, completada: boolean){
        this.nombre = nombre;
        this.fecha_de_nacimiento = fecha_de_nacimiento
        this.completada= false
    }
     lista:Tarea[] = []

    Agregar (tarea: Tarea): void {
        this.lista.push(tarea)
        

    }

    Completada(tarea: Tarea ): void {
        this.lista.forEach((task)=>{
            if(task.nombre === tarea.nombre){
                tarea.completada = true;
            }

        })
    }

    Eliminar(tarea:Tarea){
        this.lista.slice(this.lista.indexOf(tarea),1)
    }

}