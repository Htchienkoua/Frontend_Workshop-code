import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

const fb = new FormBuilder().nonNullable;

@Component({
  selector: 'app-filter-posts',
  templateUrl: './filter-posts.component.html',
  styleUrls: ['./filter-posts.component.scss'],
})
export class FilterPostsComponent {
  @Output() filterChange = new EventEmitter<string>();
  filterForm = fb.group(
    {
      filter: [''],
    },
    { updateOn: 'blur' },
  );

  submit() {
    if (this.filterForm.valid) {
      this.filterChange.emit(this.filterForm.value.filter);
    }
  }
}
