export class UsersService {
  users = [
      {
        firstName : 'Tom1',
        lastName : 'Cruise1',
        role : 'Reader'
      },
      {
        firstName : 'Tom2',
        lastName : 'Cruise2',
        role : 'Reader'
      },
      {
        firstName : 'Tom3',
        lastName : 'Cruise3',
        role : 'Admin'
      },
      {
        firstName : 'Tom4',
        lastName : 'Cruise4',
        role : 'Reader'
      },
      {
        firstName : 'Tom5',
        lastName : 'Cruise5',
        role : 'Admin'
      },
      {
        firstName : 'Tom6',
        lastName : 'Cruise6',
        role : 'Reader'
      }
    ];

  switchAllUsersToAdmin() {
    for(let user of this.users) {
      user.role = 'Admin'
    }
  }

  switchAllUsersToReader() {
    for(let user of this.users) {
      user.role = 'Reader'
    }
  }

  switchUserToAdmin(index :number) {
    this.users[index].role='Admin';
  }

  switchUserToReader(index :number) {
    this.users[index].role='Reader';
  }

  addUser() {
    //TODO
  }
}
