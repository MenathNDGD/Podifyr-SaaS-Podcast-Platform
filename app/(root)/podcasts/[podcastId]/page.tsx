"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import Image from "next/image";

const PodcastDetails = ({
  params: { podcastId },
}: {
  params: { podcastId: Id<"podcasts"> };
}) => {
  const podcast = useQuery(api.podcasts.getPodcastById, { podcastId });

  return (
    <section className="flex flex-col w-full">
      <header className="flex items-center justify-between mt-9">
        <h1 className="font-bold text-20 text-white-1">
          Currently Playing Podcasts
        </h1>
        <figure className="flex gap-3">
          <Image
            src={"/icons/headphone.svg"}
            width={24}
            height={24}
            alt="headphone"
          />
          <h2 className="font-bold text-16 text-white-1">{podcast?.views}</h2>
        </figure>
      </header>
    </section>
  );
};

export default PodcastDetails;
