import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  bookItems : { items: [{ volumeInfo: {
      publisher: string;
      authors: string[];
      language: string;
      title: string;
      subtitle: string;
      averageRating: number;
      previewLink:string;
      pageCount: number;
      ratingsCount: number;
      imageLinks: { smallThumbnail: string; }; };}]; } | undefined;
  constructor(private httpClient : HttpClient) {
    httpClient.get('https://www.googleapis.com/books/v1/volumes?q=harry+potter')
      .subscribe(response => {
        const bookDetails = response as { items: [{ volumeInfo: {
              publisher: string; authors: string[]; language: string; title: string; subtitle: string; averageRating: number; previewLink:string; pageCount: number; ratingsCount: number;   imageLinks: { smallThumbnail: string; }; };}]; }
        this.bookItems = bookDetails;
        console.log("Book details: ", bookDetails);
        console.log("Book items: ", this.bookItems);
      })
  }
}
