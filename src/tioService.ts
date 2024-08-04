import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class TioService {
  private readonly TIO_URL = 'https://tio.run/cgi-bin/run/api';

  runCode(language: string, code: string): Promise<string> {
    const formData = new FormData();
    formData.append('lang', language);
    formData.append('TIO_OPTIONS', '-Wall');
    formData.append('TIO_CFLAGS', '-O2');
    formData.append('code', code);

    return axios
      .post(this.TIO_URL, formData)
      .then(response => response.data)
      .catch(error => console.error('Error:', error));
  }
}
