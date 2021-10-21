import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EasytaskService {

private base_Url = "https://rickandmortyapi.com/api/character";
private name_Url = "https://rickandmortyapi.com/api/character?name=";
private gender_Url = "https://rickandmortyapi.com/api/character?gender=";
private species_Url = "https://rickandmortyapi.com/api/character?species=";
  constructor( private http: HttpClient) { }

  getAllList(){
    return this.http.get(this.base_Url)
  }

  species=['human','humanoid','cronenberg'];
  gender=['male','female','genderless','unkown'];

  getUrl(filter:any){
    let value = filter.toLowerCase();
    const isGender = this.gender.filter((e:any)=>{ return e==value;});
    const isSpecies = this.species.filter((e:any)=>{ return e==value;});

    console.log(isGender);

    if(isGender.length>0){
      return this.gender_Url;
    }
    else if(isSpecies.length>0){
      return this.species_Url;
    }
    else{
      return this.name_Url;
    }
  }

  getAllListByFilter(filter:any){
   const url = this.getUrl(filter);
    return this.http.get(`${url}${filter}`);
  }

  getSingleList(id:number){
    return this.http.get(`${this.base_Url}/${id}`)
  }


}
