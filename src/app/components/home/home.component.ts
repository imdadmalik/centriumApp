import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //name: string = 'imdad'; // intialized and assign value
  name: string // initialized only
  email:string;
  age: number;
  address: Address
  hobbies: string[] //Array of string
  hello: any //mean any type acceptable
  posts: post[];
  isEdit:boolean = false;
  /*address:{
    street:string
    city:string
    house:number
  }*/
  constructor( private dataService:DataService) { 
    console.log('constructor work auto....');
  }

  ngOnInit() {
    console.log('ngOnInit work auto....');
    this.name = "malik"; // overwrite here
    this.email = 'test@test.com';
    this.age = 25;
    this.address = {
      street:'a 1',
      city: 'islamabad',
      house:212
    }
    this.hobbies = ['watch movies', 'coding', 'listen music']
    this.hello = 'kuch bhi'

    this.dataService.getPosts().subscribe((posts) => {
      //console.log(posts) //subscribe used for user readable objects
      this.posts = posts;
    });
  }
  onClick(){
    console.log('hit me');
    this.hobbies.unshift('dancing');
  }
  addHobby(hobby){
    console.log(hobby);
    this.hobbies.push(hobby);
    return false;
  }
  toggleEdit(){
    this.isEdit = !this.isEdit;
  }
  deleteHobby(i){
    console.log(i);
    this.hobbies.splice(i, 1);
    // for(let i = 0; i < this.hobbies.length; i++){
    //   if(this.hobbies[i] == hobby){
    //     this.hobbies.splice(i, 1);
    //   }
    // }
  }


}
// create interface outside the class or import file of interface
interface Address {
    street:string
    city:string
    house:number
}
interface post{
  userId:number
  id:    number
  title: string
  body:  string
}