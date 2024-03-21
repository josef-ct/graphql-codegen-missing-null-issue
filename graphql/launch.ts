import { fastify } from 'fastify';
import cors from '@fastify/cors';
import { graphqlPlugin } from './graphqlPlugin';
import { buildSchema } from './schema';

const PORT = 3333;

export const server = fastify({
  disableRequestLogging: true,
  forceCloseConnections: false,
  logger: true,
});

export const launch = (async () => {
  server.register(cors);
  server.register(graphqlPlugin, { schema: buildSchema() });

  try {
    await server.listen({
      port: PORT,
      listenTextResolver: (address) => {
        return `GQL is listening on ${address}.`;
      },
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
