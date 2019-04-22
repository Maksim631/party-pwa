import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {Select} from '@ngxs/store';
import {CategoryState} from '../../state/category.state';
import {Observable, Subscription} from 'rxjs';
import {Category} from '../../shared/models/category';
import {Party} from '../../shared/models/party';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {IdGeneratorService} from '../../shared/services/id-generator.service';
import {MatOptionSelectionChange} from '@angular/material/typings/core';

@Component({
  selector: 'app-create-party',
  templateUrl: './create-party.component.html',
  styleUrls: ['./create-party.component.less']
})
export class CreatePartyComponent implements OnInit, OnDestroy {
  @Select(CategoryState)
  private categories$: Observable<Category[]>;
  private categorySubscription: Subscription;

  public categories: Category[];


  constructor(public dialogRef: MatDialogRef<CreatePartyComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Party,
              private idGenerator: IdGeneratorService) {
  }

  ngOnInit() {
    this.data.id = this.idGenerator.getNextId();
    this.categorySubscription = this.categories$.subscribe((categories: Category[]) => {
      this.categories = categories;
    });
  }

  ngOnDestroy() {
    this.categorySubscription.unsubscribe();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  changeCategory(event: MatOptionSelectionChange) {
    this.data.category = this.categories.find((category: Category) => {
      return category.title === event.source.viewValue;
    });
    console.log(this.data.category);
  }
}
