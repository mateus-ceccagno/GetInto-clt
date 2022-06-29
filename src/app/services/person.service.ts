import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PaginatedResult } from '../models/pagination/PaginatedResult';
import { Person } from '../models/Person';

@Injectable({
  providedIn: 'root',
})

export class PersonService {
  baseURL = environment.apiURL + 'api/persons';

  constructor(private http: HttpClient) {}

  public getPersons(
    page?: number,
    itemsPerPage?: number,
    term?: string
  ): Observable<PaginatedResult<Person[]>> {
    const paginatedResult: PaginatedResult<Person[]> = new PaginatedResult<
      Person[]
    >();

    let params = new HttpParams();

    if (page != null && itemsPerPage != null) {
      params = params.append('pageNumber', page.toString());
      params = params.append('pageSize', itemsPerPage.toString());
    }

    if (term != null && term != '') params = params.append('term', term);

    return this.http
      .get<Person[]>(this.baseURL + '/all', { observe: 'response', params })
      .pipe(
        take(1),
        map((response) => {
          paginatedResult.result = response.body;
          if (response.headers.has('Pagination')) {
            paginatedResult.pagination = JSON.parse(
              response.headers.get('Pagination')
            );
          }
          return paginatedResult;
        })
      );
  }

  public getPerson(): Observable<Person> {
    return this.http
      .get<Person>(`${this.baseURL}`)
      .pipe(take(1));
  }

  public post(): Observable<Person> {
    return this.http
      .post<Person>(this.baseURL, {} as Person)
      .pipe(take(1));
  }

  public put(person: Person): Observable<Person> {
    return this.http
      .put<Person>(`${this.baseURL}`, person)
      .pipe(take(1));
  }
}
