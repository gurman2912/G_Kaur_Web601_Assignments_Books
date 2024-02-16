import { Content } from "./content-interface";

export class ContentList {
    private contentArray :Content[]= [];

    constructor(){

    }
    get content(): Content[] {
        return this.contentArray;
      }
    
      add(content:Content) : void{
        this.contentArray.push(content);
      }

      count(): number{
        return this.contentArray.length;
      }

      getContentAtIndex(index: number): string{
        const content = this.contentArray[index];
    return `
      <div>
        <h2>${content.title}</h2>
        <p>${content.description}</p>
        <p>Creator: ${content.creator}</p>
        ${content.imgURL ? `<img src="${content.imgURL}" alt="${content.title}">` : ''}
        ${content.type ? `<p>Type: ${content.type}</p>` : ''}
      </div><hr>
    `;
      }
}