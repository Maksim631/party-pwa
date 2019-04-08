import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Category} from '../models/category';

@Injectable()
export class CategoryHttpService {
  private readonly url: string;

  constructor(private httpClientService: HttpClient) {
    this.url = environment.url;
  }

  public getCategories() {
    return this.httpClientService.get(this.url + '/categories');
  }

  public updateCategories(categories: Category[]) {
    return this.httpClientService.post(this.url + '/categories', categories);
  }

  public deleteCategory(category: Category) {
    const params = new HttpParams().set('categoryId', category.id.toString());
    return this.httpClientService.delete(this.url + '/category/', {params});
  }

  public updateCategory(category: Category) {
    const params = new HttpParams().set('categoryId', category.id.toString());
    return this.httpClientService.post(this.url + '/category/', category, {params});
  }

  public createCategory(category: Category) {
    return this.httpClientService.put(this.url + '/category', category);
  }
}
