import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  properties: Array<any> = [
    {
      "Id": 1,
      "Title": "First Card Item",
      "Details": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius iusto praesentium est nisi, enim explicabo sunt eligendi magnam aperiam optio animi omnis suscipit mollitia quidem ut voluptate ipsa aspernatur minus.".substring(0, 150) + " ..."
    },
    {
      "Id": 2,
      "Title": "Second Card Item",
      "Details": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius iusto praesentium est nisi, enim explicabo sunt eligendi magnam aperiam optio animi omnis suscipit mollitia quidem ut voluptate ipsa aspernatur minus.".substring(0, 150) + " ..."
    },{
      "Id": 3,
      "Title": "Third Card Item",
      "Details": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius iusto praesentium est nisi, enim explicabo sunt eligendi magnam aperiam optio animi omnis suscipit mollitia quidem ut voluptate ipsa aspernatur minus.".substring(0, 150) + " ..."
    },{
      "Id": 4,
      "Title": "Fourth Card Item",
      "Details": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius iusto praesentium est nisi, enim explicabo sunt eligendi magnam aperiam optio animi omnis suscipit mollitia quidem ut voluptate ipsa aspernatur minus.".substring(0, 150) + " ..."
    },{
      "Id": 5,
      "Title": "Fifth Card Item",
      "Details": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius iusto praesentium est nisi, enim explicabo sunt eligendi magnam aperiam optio animi omnis suscipit mollitia quidem ut voluptate ipsa aspernatur minus.".substring(0, 150) + " ..."
    },{
      "Id": 6,
      "Title": "sixth Card Item",
      "Details": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius iusto praesentium est nisi, enim explicabo sunt eligendi magnam aperiam optio animi omnis suscipit mollitia quidem ut voluptate ipsa aspernatur minus.".substring(0, 150) + " ..."
    },{
      "Id": 7,
      "Title": "seventh Card Item",
      "Details": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius iusto praesentium est nisi, enim explicabo sunt eligendi magnam aperiam optio animi omnis suscipit mollitia quidem ut voluptate ipsa aspernatur minus.".substring(0, 150) + " ..."
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
