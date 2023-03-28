import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NewPostComponent } from './new-post.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: NewPostComponent }];

@NgModule({
  declarations: [NewPostComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
})
export class NewPostModule {}
