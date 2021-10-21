import { EasytaskService } from './Service/easytask.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    this.get();

  }
  constructor(private http: EasytaskService){}
  title = 'easytask';
  longText = ["mazhar"]
  results:any;
  gender: any =[];

  filterForm = new FormGroup(
    {
      filterinput:new FormControl(''),
      gender:new FormControl(''),
      species:new FormControl('')

    }
  )

  get(){
    this.http.getAllList().subscribe(
      (resp:any)=>{
        // console.log(JSON.stringify(resp));
        this.results = resp.results;
        console.log(this.results);
      }
    )
  }
  onSubmit(){

    // this.applyFilter();
  }

  applyFilter(){
    this.http.getAllListByFilter(this.filterForm.value.filterinput).subscribe(
      (response:any)=>{
        // console.log(resp);
        this.results = response.results;


      }
    )

  }

}
