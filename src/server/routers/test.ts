import { createNewRoute, publicProcedure } from "@/server/rpc/init";

export const testRoute = createNewRoute({
  hello: publicProcedure.query(async ({ c }) => {
    return c.superjson({
      Message: "Hello, World"
    })
  })
})
