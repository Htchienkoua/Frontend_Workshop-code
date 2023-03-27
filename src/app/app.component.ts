import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { map, Observable, startWith, Subject, takeUntil } from 'rxjs';

const fb = new FormBuilder();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  public contentMaxLength = 50;
  public contentLengthRemaining$!: Observable<number>;
  postForm = fb.group({
    title: ['', [Validators.required, Validators.minLength(5)]],
    content: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(this.contentMaxLength),
      ],
    ],
  });

  ngOnInit(): void {
    this.contentLengthRemaining$ = this.postForm
      .get('content')!
      .valueChanges.pipe(
        startWith(''),
        takeUntil(this.destroy$),
        map((value) => {
          return this.contentMaxLength - (value?.length || 0);
        }),
      );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  onPostFormSubmit() {
    if (this.postForm.valid) {
      console.log(this.postForm.value);
      this.postForm.reset();
    }
  }

  onPostFormReset() {
    this.postForm.reset();
  }
}
