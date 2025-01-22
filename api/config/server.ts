export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'), // default host value
  port: env.int('PORT', 1337), // default port value
  app: {
    keys: env.array('APP_KEYS', [
      '41d4e2f01164600e1e7a8f70837ac865b174982bbdf6207cd848f786b4439f96',
      'b6f60ed1e287736e0151a766d5ca7faeb991a44b85de2926884419f84f8c50f5b1e02c334b971a12346c3cd9d54fb926ec219a5b184fcdbc3b53b6a3987ba51d',
    ]), // Replace with your generated APP_KEYS
  },
});
