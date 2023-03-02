import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Book } from '../../types/book';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{
@Input() book : Book = {} as Book;
//@Output() bookEmitter = new EventEmitter<Book>();

constructor(private cartService : CartService) {}

addToCart(){
  this.isInCart = true;
  //this.bookEmitter.emit(this.book)
  this.cartService.add(this.book);
  
}

removeFromCart() {
  this.isInCart = false;
  this.cartService.remove(this.book);
}

isInCart : boolean = false;

ngOnInit(): void {
    
}

}

