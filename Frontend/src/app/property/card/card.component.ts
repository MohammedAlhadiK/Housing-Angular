import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
Card:any ={
"Id":1,
"Title":"First Card Item",
"Details":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius iusto praesentium est nisi, enim explicabo sunt eligendi magnam aperiam optio animi omnis suscipit mollitia quidem ut voluptate ipsa aspernatur minus.".substring(0,150)+" ..."
}


  constructor() { }

  ngOnInit(): void {
  }

}
