"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <div>
      <div className="header flex flex-col w-full items-center my-4">
        <img src="/logo-sm.svg" className="block logo" />
      </div>
      <div className="desc w-full flex flex-col items-center">
        <div className="max-w-xl mx-4 mb-2">
          <p className="text-4xl font-bold my-8  text-center">
            So, cricket is a confusing sport.
          </p>
          <p className="text-lg">
            As a kid, when watching cricket on TV, I was perplexed by many
            things, like, &quot;who decided there are only 6 balls in an
            over!?&quot;
          </p>
          <p className="text-lg my-2">
            ...& let&apos;s not even talk about Tests.
          </p>
          {/* <p className="text-lg my-8 text-center">★</p> */}
          <p className="text-lg my-2">
            Fast-forward to some years later: I found myself attending an
            amateur, club-cricket practice session. This led to a renewed
            obsession with all-things-cricket, transforming my mindset from
            spectator of this confusing sport into a newbie player.
          </p>
          {/* <p className="text-lg my-8 text-center">★</p> */}
          <p className="text-lg my-2">
            Eventually, perplexed by scores being meticulously recorded on
            sheets of paper during matches, I searched and found missing a
            better solution.
          </p>
          <p className="text-lg my-2">
            <span className="font-bold">Scorerer</span> is what you see before
            you.
          </p>
          <p className="text-lg">
            {" "}
            A quest to never lose track of who&apos;s winning, again.
          </p>

          <div className="flex flex-row items-center justify-center my-6">
            <p className="text-md text-center mx-4">★</p>
            <button
              onClick={() => router.push("/play")}
              className="text-white text-bold tracking-widest	 border-solid border-2 border-black rounded-lg px-12 py-2 my-2 bg-black"
            >
              START
            </button>
            <p className="text-md text-center mx-4">★</p>
          </div>
        </div>
      </div>
    </div>
  );
}
