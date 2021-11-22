import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HousingService } from './../Services/Housing.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  properties:any;
  constructor(private HousingService:HousingService) { }

  ngOnInit(): void {
this.HousingService.getAllProperties().subscribe(
  data=>{
    this.properties = data;
    console.log(data)

  },error=>{console.log("Error")}

);

//   let  data = this.http.get('data/properties.json').subscribe(
// data=>{
// this.properties = data;
// console.log(data)
// }
//   );

  }

}
