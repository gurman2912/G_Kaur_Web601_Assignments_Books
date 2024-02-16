import { Component, OnInit } from '@angular/core';
//import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent implements OnInit{

 /*  content :ContentList;

  constructor() { 
    this.content= new ContentList
      this.content.add({
        id: 1,
        title: "1984 ",
        description: " Description 1",
        creator: " George Orwell",
        imgURL: 'https://upload.wikimedia.org/wikipedia/en/5/51/1984_first_edition_cover.jpg',
        type: 'Fiction',
        tags: []
      });
  
      this.content.add({
        id: 2,
        title: "Pride and Prejudice",
        description: "Description 2",
        creator: "Jane Austen",
        imgURL: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320399351i/1885.jpg",
        type: "Fiction",
        tags: []
      });
  
      this.content.add({
        id: 3,
        title: "Dune",
        description: "Description 3",
        creator: "Frank Herbert",
        imgURL: "https://upload.wikimedia.org/wikipedia/en/d/de/Dune-Frank_Herbert_%281965%29_First_edition.jpg",
        type: "Fantasy",
        tags: ["Tag1", "Tag2"]
      });

  } */
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
