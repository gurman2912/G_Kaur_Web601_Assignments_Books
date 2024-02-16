import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CommonModule } from '@angular/common';
import { ContentFilterPipe } from '../content-filter.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule,ContentFilterPipe, FormsModule],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent {

  contentList: Content[] = [
    {
      id: 1,
      title: "1984",
      description: "Description 1",
      creator: "George Orwell",
      imgURL: 'https://upload.wikimedia.org/wikipedia/en/5/51/1984_first_edition_cover.jpg',
      type: 'Fiction',
      tags: []
    },
    {
      id: 2,
      title: "Pride and Prejudice",
      description: "Description 2",
      creator: "Jane Austen",
      imgURL: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320399351i/1885.jpg",
      type: "Fiction",
      tags: []
    },
    {
      id: 3,
      title: "Dune",
      description: "Description 3",
      creator: "Frank Herbert",
      imgURL: "https://upload.wikimedia.org/wikipedia/en/d/de/Dune-Frank_Herbert_%281965%29_First_edition.jpg",
      type: "Fantasy",
      tags: ["Tag1", "Tag2"]
    },
    {
      id: 4,
      title: "The Hobbit",
      description: "Description 4",
      creator: "J.R.R. Tolkien",
      imgURL: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546071216i/5907.jpg',
      type: 'Fantasy',
      tags: []
    },
    {
      id: 5,
      title: "Gone Girl",
      description: "Description 5",
      creator: "Gillian Flynn",
      imgURL: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1554086139i/19288043.jpg',
      type: '',
      tags: []
    },
    {
      id: 6,
      title: "The Silent Patient",
      description: "Description 6",
      creator: "Alex Michaelides ",
      imgURL: 'https://d3myrwj42s63no.cloudfront.net/300/978/125/030/169/7/9781250301697.jpg',
      type: 'Thriller',
      tags: []
    },
    {
      id: 7,
      title: "Atomic Habits",
      description: "Description 7",
      creator: "James Clear",
      imgURL: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1655988385i/40121378.jpg',
      type: '',
      tags: []
    }
  ];
  contentArray: any;
  /*contentArray: any;

  constructor() {
    
  }

   displayContent(contentList: Content) {
    console.log('ID:', contentList.id, 'Title:', contentList.title);
  }  */

  constructor() { }

  filterContent: Content[] = [];
  title:string = '';
  message: string = '';
  isFound: boolean = false;

  checkTitle(){
    this.filterContent = this.contentList.filter((item: { title: string; }) => item.title.toLowerCase() === this.title.toLowerCase());

    this.isFound = this.filterContent.length > 0;
    
    this.message = this.isFound ? `Content with title '${this.title}' found.` : `Content with title '${this.title}' not found.`;
  }

getBackgroundColor(type: string | undefined): string {
  switch (type) {
    case 'Fiction':
      return 'lightblue';
    case 'Fantasy':
      return 'lightgreen';
    case 'Thriller':
      return 'lightpink';
    default:
      return 'white';
  }
}


}
