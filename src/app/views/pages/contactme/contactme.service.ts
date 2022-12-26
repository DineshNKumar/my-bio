import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactmeService {
  constructor(private http: HttpClient) {
    console.log('Service loaded');
  }

  sendMail(name: string, email: string, message: string, project: string) {
    return this.http.post(
      'https://bio-server-ns4u.vercel.app/sendmail',
      {
        name, email, message, project
      },
      {
        headers: {
          'content-type': 'application/json',
        },        
      }
    );
  }
}
