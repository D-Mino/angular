import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { ConfirmComponent } from './confirm/confirm.component';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatSlideToggleModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatListModule,
  MatIconModule,
  MatDialogModule,
  MatChipsModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatInputModule,
  MatTabsModule,
  MatToolbarModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatTooltipModule
} from '@angular/material';
import { FilterPipe } from './pipies/filter.pipe';
import { SortStringPipe } from './pipies/sortString.pipe';
import { MonthPipe } from './pipies/month.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [],
      validationMessages: [
        // { name: 'required', message: '' },
      ],
    }),
    FormlyMaterialModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatIconModule,
    MatDialogModule,
    MatChipsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatSelectModule,
    MatInputModule,
    MatTabsModule,
    MatListModule
  ],
  declarations: [
    ConfirmComponent,
    FilterPipe,
    SortStringPipe,
    MonthPipe
  ],
  entryComponents: [ConfirmComponent],
  exports: [
    CommonModule,
    FormsModule,
    FormlyModule,
    FormlyMaterialModule,
    ReactiveFormsModule,
    ConfirmComponent,
    MatButtonModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatListModule,
    MatSlideToggleModule,
    MatIconModule,
    MatDialogModule,
    MatChipsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatTabsModule,
    MatInputModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    FilterPipe,
    SortStringPipe,
    MonthPipe
  ]
})
export class ComponentsModule {}
