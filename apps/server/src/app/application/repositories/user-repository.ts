import { IUser } from '@application/interfaces/user.interface';

export abstract class UserRepository {
  abstract create(user: IUser): Promise<any>;
  abstract findByUsername(username: string): Promise<IUser | null>;
}
