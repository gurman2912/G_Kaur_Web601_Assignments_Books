import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContentListComponent } from '../content-list/content-list.component';

@Component({
  selector: 'app-create-content',
  standalone: true,
  imports: [CommonModule, FormsModule, ContentListComponent],
  templateUrl: './create-content.component.html',
  styleUrl: './create-content.component.scss'
})
export class CreateContentComponent {
  @Output() contentAdded: EventEmitter<any> = new EventEmitter();

  newContent = {
    id: '',
    title: '',
    description:'',
    creator: '',
    imgURL:'',
    type: '',
    tags: []
  };

  errorMessage: string = '';

  onSubmit() {
    if (!this.validateFields()) {
      return;
    }

    this.contentAdded.emit(this.newContent);
    this.clearFields();
  }

  validateFields(): boolean {
    if (!this.newContent.id || !this.newContent.title) {
      this.errorMessage = 'Please fill in all required fields.';
      return false;
    }

    this.errorMessage = '';
    return true;
  }

  clearFields() {
    this.newContent = {
      id: '',
      title: '',
      description:'',
      creator:'',
      imgURL:'',
      type:'',
      tags:[]
    };
  }
}
