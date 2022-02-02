import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';
import { Andamento } from '../classes/andamento';
import { MesiData } from '../classes/mesi-data';
import { AndamentoService } from '../services/andamento.service';

@Component({
  selector: 'app-lista-mesi',
  templateUrl: './lista-mesi.component.html',
  styleUrls: ['./lista-mesi.component.css']
})
export class ListaMesiComponent implements OnInit {

  list: MesiData = new MesiData()
  listaMesi: Andamento[] = []
  selectedRowIds: Set<number> = new Set<number>();
  

  constructor(private andamentoService: AndamentoService) { }

  ngOnInit(): void {
    this.andamentoService.getAllMonths().subscribe(res => {
      this.listaMesi = res.mesi
    })
  }

 /*  onRowClick(id: number) {
    if (this.selectedRowIds.has(id)) {
      this.selectedRowIds.delete(id);
    }else {
      this.selectedRowIds.add(id)
    }
    console.log(id)
  }
  rowIsSelected(id: number) {
    return this.selectedRowIds.has(id)
  } */
  
whenClicked = [false,false];
}
