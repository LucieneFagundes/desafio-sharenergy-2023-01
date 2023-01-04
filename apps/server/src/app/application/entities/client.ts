import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ClientDocument = HydratedDocument<Client>;

@Schema()
export class Client {
  @Prop()
  name: string;
  @Prop({ unique: true })
  email: string;
  @Prop()
  phone_number: number;
  @Prop()
  address: string;
  @Prop({ unique: true })
  cpf: string;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
