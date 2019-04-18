import { Component, OnInit } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { validation } from '@components/validation/validation';

@Component({
  selector: 'app-huy',
  templateUrl: './huy.component.html',
  styleUrls: ['./huy.component.scss']
})
export class HuyComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [];

  constructor() {
    this.fields = [
      {
        key: 'email',
        type: 'input',
        templateOptions: {
          type: 'text',
          label: 'Email',
          required: true,
        },
        validators: {
          email: validation.email,
          required: validation.requiredCustom('email')
        }
      },
      {
        key: 'password',
        type: 'input',
        templateOptions: {
          type: 'password',
          label: 'Input',
          placeholder: 'Placeholder',
          required: true,
        },
        validators: {
          required: validation.requiredCustom('password')
        }
      }
    ];
  }

  ngOnInit() {
  }

  save() {
    console.log(this.model);
  }
}
