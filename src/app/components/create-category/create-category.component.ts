import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Party} from '../../shared/models/party';
import {IdGeneratorService} from '../../shared/services/id-generator.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.less']
})
export class CreateCategoryComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreateCategoryComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Party,
              private idGenerator: IdGeneratorService) {
  }

  ngOnInit() {
    this.data.id = this.idGenerator.getNextId();
  }


  onNoClick(): void {
    this.dialogRef.close();
  }
}
