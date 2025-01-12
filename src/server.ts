import Fastify from "fastify";
import FastifyStatic from "@fastify/static";
import FastifyCors from "@fastify/cors";
import path from "path";

const fastify = Fastify({
  logger: true,
});

export const startServer = async (port: number = 4000) => {
  await fastify.register(FastifyStatic, {
    root: path.join(__dirname, "../web/out"),
    prefix: "/",
  });
  await fastify.register(FastifyCors, {
    origin: "*",
  });
  // ----------------------------------------
  fastify.get("/tests", function (request, reply) {
    reply.send({ hello: "world" });
  });
  // ----------------------------------------
  try {
    await fastify.listen({ port: port });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
