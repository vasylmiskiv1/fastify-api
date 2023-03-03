const fastify = require('fastify')({ logger: true});
const PORT = 5000;

const items = require('./Items.js');

fastify.get('/items', async (request, reply) => {
  reply.send(items)
})

const start = async () => {
  try {
    await fastify.listen({ port: PORT})
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

start();