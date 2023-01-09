import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class HttpCatService {
  constructor() {}

  bufferToBase64(data: any) {
    let buff = Buffer.from(data.data, 'base64');
    let str = buff.toString('base64');
    return 'data:image/jpeg;base64,' + str;
  }

  async execute(code: number) {
    try {
      let response = await axios.get(`https://http.cat/${code}`, {
        responseType: 'arraybuffer',
      });

      return this.bufferToBase64(response);
    } catch {
      let response = await axios.get(`https://http.cat/404`, {
        responseType: 'arraybuffer',
      });
      return this.bufferToBase64(response);
    }
  }
}
