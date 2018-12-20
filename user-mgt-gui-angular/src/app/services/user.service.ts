import { Subject } from "rxjs/Subject";
import { Injectable } from "@angular/core";
import { HttpClient, HttpRequest, HttpHeaders, HttpEventType } from "@angular/common/http";
import { User } from "../models/User.model";

@Injectable()
export class UserService {
  
  userSubject = new Subject<User[]>();
  users: User[] = [];
  
  //http://localhost:9103/user-mgt-api/Users
  apiUrl = 'http://localhost:9103';
  entryPoint = 'user-mgt-api';
  fullWsUrl = this.apiUrl + '/' + this.entryPoint + '/Users';

  constructor(private httpClient: HttpClient) {}
 
  emitUserSubject() {
    this.userSubject.next(this.users.slice());
  }

  getUsers() {
    console.log('getUsers - before call of '+this.fullWsUrl);
    this.httpClient
      .get<any[]>(this.fullWsUrl, this.getHttpOptions())
      .subscribe(
        (response) => {
          console.log('getUsers - We get the response from the server: '+ response);
          this.users = response;
          this.emitUserSubject();
        },
        (error) => {
          console.log('Do not succeed to get Users list ! ' + error);
        }
      );
  }

  getHttpOptions() {
      //name=Username
      //Password=fHtu45#aQwwdu9_:45oP_ADCs'
      //const token = localStorage.getItem('token');
      const headers = {
          'Content-Type':  'application/json',
          'Authorization': "Basic " + btoa("user-mgt-alias:fHtu45#aQwwdu9_:45oP_ADCs")
        }
      return { withCredentials: true, headers: headers };
  }

  getUserById(id: number) {
    const user = this.users.find(
      (userObject) => {
        return userObject.id === id;
      }
    ); 
    return user;
  }

  switchAllUsersToAdmin() {
    for(let user of this.users) {
      //user.role = 'Admin'
    }
    this.emitUserSubject();
  }

  switchAllUsersToReader() {
    for(let user of this.users) {
      //user.role = 'Reader'
    }
    this.emitUserSubject();
  }

  switchUserToAdmin(index :number) {
    //this.users[index].role='Admin';
    this.emitUserSubject();
  }

  switchUserToReader(index :number) {
    //this.users[index].role='Reader';
    this.emitUserSubject();
  }

  addUser(firstName: string, lastName: string) {
    const role = {
      id: 0,
      roleName:'READER'
    }

    const userObject = {
      id: 0,
      alias: '',
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      birthDate: '',
      gender: '',
      avatar: '',
      password: '',
      role: role
    };

    userObject.firstName = firstName;
    userObject.lastName = lastName;
    userObject.id = this.users[(this.users.length - 1)].id + 1;

    this.users.push(userObject);
    this.emitUserSubject();
  }
}
