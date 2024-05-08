export const cacheConfig = {
  provider: process.env.CACHE_PROVIDER,
  defaultTtl: Number(process.env.CACHE_DEFAULT_TTL ?? 600),
  redis: {
    url: process.env.CACHE_URL,
  },
};
