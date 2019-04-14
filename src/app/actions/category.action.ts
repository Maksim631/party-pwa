import {Category} from '../shared/models/category';

export class AddCategory {
  static readonly type = '[Category] Add new';

  constructor(public category: Category) {
  }
}


export class DeleteCategory {
  static readonly type = '[Category] Delete';

  constructor(public categoryId: number) {
  }
}


export class ChangeCategory {
  static readonly type = '[Category] Change party';

  constructor(public category: Category) {
  }
}








