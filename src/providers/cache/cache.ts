import { Injectable } from '@nestjs/common';
import { createClient, RedisClientType } from 'redis';

@Injectable()
export class CacheProvider {
  private client: RedisClientType;

  constructor() {
    this.client = createClient({
      url: process.env.REDIS_URL,
    });

    this.client.connect();
  }

  async get(key: string): Promise<any> {
    const value = await this.client.get(key);

    if (!value) return null;

    return JSON.parse(value);
  }

  async set(key: string, value: any, ttl = 60): Promise<void> {
    const valueToString = JSON.stringify(value);

    this.client.set(key, valueToString, {
      EX: ttl,
    });
  }
}
