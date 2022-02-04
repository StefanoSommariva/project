import { Component, OnInit } from '@angular/core';
import { Chart, ChartData } from "chart.js";
import { Andamento } from '../classes/andamento';
import { AndamentoService } from '../services/andamento.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  public chart: any = null;
  listaMesi: Andamento[] = []
  importo: any[] = []

  constructor(
    private andamentoService: AndamentoService
  ) { }

  ngOnInit(): void {
    this.andamentoService.getAllMonths().subscribe(res => {
      this.listaMesi = res.mesi
      /* let importo = this.listaMesi.importo */

      this.listaMesi.forEach(ele => {
        let imports = ele.importo
        this.importo.push(imports)
      })
      console.log(this.importo)
      this.chart = new Chart("canvas", {
        type: 'bar',
        data: {
          labels: ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"],
          datasets: [{
            label: 'Resoconto mesi',
  
            data:this.importo,
            
            backgroundColor: [
              'rgb(159, 223, 223)'
            ],
            borderColor: [
              'rgb(159, 223, 223)'
            ],
            borderWidth: 1,
            
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
  
        }
        
      })
    })


   
    


  }

}
