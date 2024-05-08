import { Injectable } from '@nestjs/common';
import { createCipheriv, createDecipheriv } from 'crypto';

@Injectable()
export class CryptoProvider {
  encrypt(text: string) {
    const key = process.env.CRYPTO_KEY;
    const nonce = process.env.CRYPTO_NONCE;
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
    const key = process.env.CRYPTO_KEY;
    const nonce = process.env.CRYPTO_NONCE;
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
