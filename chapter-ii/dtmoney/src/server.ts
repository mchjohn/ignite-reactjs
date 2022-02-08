import { createServer, Model } from 'miragejs';

export function makeServer() {
  const server = createServer({
    models: {
      transaction: Model,
    },

    seeds(server) {
      server.db.loadData({
        transactions: [
          {
            id: 1,
            title: 'Freela de APP',
            type: 'deposit',
            category: 'Dev',
            amount: 28900,
            createdAt: new Date('2022-02-06 18:06:00'),
          },
          {
            id: 2,
            title: 'Curso de Flutter',
            type: 'withdraw',
            category: 'Educação',
            amount: 720,
            createdAt: new Date('2022-01-01 10:00:00'),
          },
        ],
      });
    },

    routes() {
      this.namespace = 'api'

      this.get('/transactions', () => {
        return this.schema.all('transaction');
      });

      this.post('/transactions', (schema, request) => {
        const data = JSON.parse(request.requestBody);

        return schema.create('transaction', data);
      });
    },
  });

  return server;
}
