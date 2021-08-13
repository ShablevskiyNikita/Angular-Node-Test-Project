import { UserDto } from './dto/user.dto';

class UserDao {
  private users: UserDto[] = [
    new UserDto({
      _id: '1',
      firstname: 'Testing',
      lastname: 'Developer',
      email: 'test@mail.com',
      password: 'password'
    })
  ];

  findByEmail(email: string) {
    return this.users.find(user => user.email === email);
  }
}

export const UserDaoInstance = new UserDao();
