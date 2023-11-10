import { rest } from 'msw';

export const handlers = [
  rest.get('/api/products', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 2,
          name: 'AirPods',
          brand: 'Apple',
          description:
            'Criados pela Apple Ligam e se conectam automaticamente Configuração com apenas um toque para todos seus aparelhos Apple.',
          photo:
            'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/airpods.webp',
          price: '1200.00',
          count: 1,
        },
        {
          id: 3,
          name: 'AirPods',
          brand: 'Apple',
          description:
            'Criados pela Apple Ligam e se conectam automaticamente Configuração com apenas um toque para todos seus aparelhos Apple.',
          photo:
            'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/airpods.webp',
          price: '1200.00',
          count: 1,
        },
      ])
    );
  }),
];
