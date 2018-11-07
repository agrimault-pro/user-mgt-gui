import { Subject } from "rxjs/Subject";

export class UserService {
  
  userSubject = new Subject<any[]>();
  
  private users = [
      {
        id: 1,
        firstName : 'Tom1',
        lastName : 'Cruise1',
        role : 'Reader'
      },
      {
        id: 2,
        firstName : 'Tom2',
        lastName : 'Cruise2',
        role : 'Reader'
      },
      {
        id: 3,
        firstName : 'Tom3',
        lastName : 'Cruise3',
        role : 'Admin'
      },
      {
        id: 4,
        firstName : 'Tom4',
        lastName : 'Cruise4',
        role : 'Reader'
      },
      {
        id: 5,
        firstName : 'Tom5',
        lastName : 'Cruise5',
        role : 'Admin'
      },
      {
        id: 6,
        firstName : 'Tom6',
        lastName : 'Cruise6',
        role : 'Reader'
      }
    ];

  emitUserSubject() {
    this.userSubject.next(this.users.slice());
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
      user.role = 'Admin'
    }
    this.emitUserSubject();
  }

  switchAllUsersToReader() {
    for(let user of this.users) {
      user.role = 'Reader'
    }
    this.emitUserSubject();
  }

  switchUserToAdmin(index :number) {
    this.users[index].role='Admin';
    this.emitUserSubject();
  }

  switchUserToReader(index :number) {
    this.users[index].role='Reader';
    this.emitUserSubject();
  }

  addUser() {
    //TODO
  }
}
