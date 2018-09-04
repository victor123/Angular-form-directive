import { Component, OnInit } from "@angular/core";
import { FormService } from "./formService";

@Component({
    selector:'from-grid',
    template:`
    <div class="col-lg-12">
    <div class="table-responsive">          
  <table class="table">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
        <th>Select List</th>
        <th>Gender</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let data of gridData">
        <td>{{data.name}}</td>
        <td>{{data.lastname}}</td>
        <td>{{data.email}}</td>
        <td>{{data.selecter}}</td>
        <td>{{data.gender}}</td>
        </tr>
    </tbody>
  </table>
  </div>
</div>
    `
})

export class FormGrid implements OnInit{
    gridData = [];
    constructor(private _service:FormService) {

    }
ngOnInit(){
    this._service.FormData.subscribe(
        (data) => {
            this.gridData.push(data)
            console.log(data)
            // this.gridData = data
        }
    )
}
}