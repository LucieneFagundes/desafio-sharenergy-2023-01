import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserRepository } from '@application/repositories/user-repository';
import { User, UserDocument } from '@application/entities/user';

@Injectable()
export class MongooseUserRepository implements UserRepository {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(user: User): Promise<any> {
    const response = await this.userModel.create(user);
    return response;
  }

  async findByUsername(username: string): Promise<User> {
    const response = await this.userModel.findOne({ username });
    return response;
  }
}
