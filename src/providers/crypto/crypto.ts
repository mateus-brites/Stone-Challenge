import { Injectable } from '@nestjs/common';
import { createCipheriv, createDecipheriv } from 'crypto';

@Injectable()
export class CryptoProvider {
  encrypt(text: string) {
    const key = 'byz9VFNtbRQM0yBODcCb1lrUtVVH3D3x';
    const nonce = 'X05IGQ5qdBnIqAWD';
    const cipher = createCipheriv(
      'aes-256-cbc',
      Buffer.from(key),
      Buffer.from(nonce),
    );
    let crypted = cipher.update(text, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
  }

  decrypt(encryptedText: string) {
    const key = 'byz9VFNtbRQM0yBODcCb1lrUtVVH3D3x';
    const nonce = 'X05IGQ5qdBnIqAWD';
    const decipher = createDecipheriv(
      'aes-256-cbc',
      Buffer.from(key),
      Buffer.from(nonce),
    );
    let dec = decipher.update(encryptedText, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
  }
}
