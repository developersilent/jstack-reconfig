"use client";
import { cn } from "@/lib/utils";
import { client } from "@/server/rpc/api.client";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data, isPending } = useQuery({
    queryKey: ["api-cache"],
    queryFn: async () => {
      const res = await client.test.hello.$get();
      return await res.json();
    },
  });
  return (
    <main className="flex min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 flex-col items-center justify-center relative isolate">
      <div className="absolute inset-0 -z-10 opacity-50 mix-blend-soft-light [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" />
      <div className="container flex flex-col items-center justify-center gap-6 px-4 py-16">
        <h1
          className={cn(
            "inline-flex tracking-tight flex-col gap-1 transition text-center",
            "font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-none lg:text-[4rem]",
            "bg-gradient-to-r from-20% bg-clip-text text-transparent",
            "from-white to-gray-50",
          )}
        >
          <span>{data?.Message}</span>
        </h1>

        {isPending && (
          <span className="text-lg text-teal-500 font-bold">
            {"Loading..."}
          </span>
        )}
        <p className="text-[#ececf399] text-lg/7 md:text-xl/8 text-pretty sm:text-wrap sm:text-center text-center mb-8">
          The stack for building seriously fast, lightweight and{" "}
          <span className="inline sm:block">
            end-to-end typesafe Next.js apps.
          </span>
        </p>

        <p className="text-[#ececf399] text-lg/4 md:text-xl/5 text-pretty sm:text-wrap sm:text-center text-center mb-8">
          This the the jstack reconfig template{" "}
          <span className="inline sm:block">
            NOTE: I have only chnage some files name "For now" !!
          </span>
        </p>
      </div>
    </main>
  );
}
