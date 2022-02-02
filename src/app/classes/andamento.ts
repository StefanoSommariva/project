export class Andamento {
    id!: number
    static count = 1;
    documenti !: number;
    importo !: number
   

    constructor() {
        this.id = Andamento.count++
    }
}
