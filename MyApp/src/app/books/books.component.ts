import { Component, OnInit } from '@angular/core';
import { Book } from '../types/book';
import { BooksService } from './books.service';





@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{
  constructor(private booksService : BooksService) {}

  ngOnInit(): void {
      this.books = this.booksService.getBooks();
  }

books : Book[]=[];



  //cart : Book[] = [];
  

  // addToCart(book : Book){
  //     console.log(book);
      
  // }

  isShowing : boolean = true;

  // handleClick(){
  //   alert("successful");
  // }

  // myName : string='';
  // handleInput(event:any) {
  //   this.myName = event.target.value;
        
    
  //}
  


  
}
