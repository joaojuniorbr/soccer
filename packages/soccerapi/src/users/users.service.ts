import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import * as bcrypt from 'bcrypt';

import { IUser, User } from './user';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async getAll() {
    return await this.userModel.find().exec();
  }

  async getById(id: string) {
    return await this.userModel.findById(id).exec();
  }

  async getByEmail(email: string): Promise<IUser | undefined> {
    const user: {
      _doc: IUser;
    } = await this.userModel.findOne({ email });

    return user._doc ? { ...user._doc, password: undefined } : undefined;
  }

  async create(user: IUser) {
    const saltOrRounds = 10;

    const password = await bcrypt.hash(user.password, saltOrRounds);

    const created = this.userModel.create({ ...user, password });
    return (await created).save();
  }

  async update(id: string, user: User) {
    await this.userModel.updateOne({ _id: id }, user).exec();
    return this.getById(id);
  }

  async delete(id: string) {
    return this.userModel.deleteOne({ _id: id }).exec();
  }

  async checkPassword(
    email: string,
    password: string,
  ): Promise<IUser | undefined> {
    const user: {
      _doc: IUser;
    } = await this.userModel.findOne({ email });

    if (user) {
      const isMatch = await bcrypt.compare(password, user._doc.password);

      if (isMatch) {
        return { ...user._doc, password: null };
      }
    }

    return undefined;
  }
}
