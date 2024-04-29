import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { contacts ,users,bookings} from '../../post';
import { json } from 'stream/consumers';




@Injectable({
  providedIn: 'root'
})
export class RestService {
  
   apiUrlContact = 'http://localhost:1337/api/contacts';
   apiUrlBooking = 'http://localhost:1337/api/bookings';
   apiUrlUser = 'http://localhost:1337/api/clients';
  constructor(private http: HttpClient) {}
 httpOptions = {
    headers: new HttpHeaders({
      
      Authorization:'Bearer 3f0b2e44d9a4a90af2b4af732830c21efa85d877c2447461efc88c22fdaa3739fb1413ccd5a4ba1c171ad5db1910dc4b5b5eb5dea57c800bd7eda97fc572615d8cba2904a2ce95f8a9e3ec6bbd479a25eb6e8730101334d2fad508430a9487482f76782332b686b45da5b9d61a6b7a7e2a27b196e0194a82c1b8c4a00954e241'
  
    })
  };
  body:any={data:{}}

  // getPosts(): Observable<Post[]> {
  //   return this.http.get<Post[]>(this.apiUrl);
  // }

  addPostuser(post: users): Observable<users> {
    return this.http.post<users>(this.apiUrlUser, post, this.httpOptions);
  }
  async addPostBooking(post: any): Promise<Observable<any>> {
    
    
     return await this.http.post<any>(this.apiUrlBooking, this.body, this.httpOptions);
  }
   addPostContact(post: any): Observable<any> {
    
console.warn(post);

    return this.http.post<any>(this.apiUrlContact, post,this.httpOptions);
  }

  // updatePost(id: number, post: Post): Observable<Post> {
  //   return this.http.put<Post>(this.apiUrl + '/' + id, post, httpOptions);
  // }

  // deletePost(id: number): Observable<{}> {
  //   return this.http.delete(this.apiUrl + '/' + id);
  // }
}