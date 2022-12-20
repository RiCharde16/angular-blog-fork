import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input()
  photoCover:string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNyg8DH0XGrW_jA3EWSSI9hhcRP-5thysLDxw7tsAHJ5ZEeMFpSEoatqZOSu0W3UAzVMw&usqp=CAU'
  
  @Input()
  cardTitle:string = 'Titulo aqui'
  
  @Input()
  cardDescription:string = 'Texto qualquer da noticia porfavor inserir algum texto aqui'
  constructor() { }

  ngOnInit(): void {
  }

}
