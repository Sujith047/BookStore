import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooks() {
   return  [
    {
   name : "OOPS",
 
   author : " E Balagurusamy ",
 
   src : "https://m.media-amazon.com/images/I/41LBD-XtzYL.jpg",
 
   amount : 600
 
 },
 {
   name : "PROGRAMMING",
 
   author : "yashwanth",
 
   src : "https://m.media-amazon.com/images/I/61RzCIAcAvL.jpg",
 
   amount: 400
 },
 {
   name:"CS PYTHON",
 
   author: "Sumitra arora",
 
   src: "https://m.media-amazon.com/images/I/51e1Hsz8r3L.jpg",
 
   amount: 900
 },
 {
   name:"CS ARCHITECTURE",
 
   author: "M Morris Mann",
 
   src : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9qQDNBiUzK71ynA-0NGjTHn7RoCtEHWu0FC8MAkX-zw&usqp=CAU&ec=48600113",
 
   amount : 1200
 }
 ]
  }
}
