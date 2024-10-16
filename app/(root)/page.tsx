"use client";

import React from "react";
import PodcastCard from "@/components/PodcastCard";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  const trendingPodcasts = useQuery(api.podcasts.getTrendingPodcasts);

  return (
    <div className="flex flex-col mt-9 gap-9 md:overflow-hidden">
      <section className="flex flex-col gap-5">
        <h1 className="font-bold text-20 text-white-1">
          Trending Podcasts Over The Globe
        </h1>
        {trendingPodcasts && trendingPodcasts.length > 0 ? (
          <div className="podcast_grid">
            {trendingPodcasts?.map(
              ({ _id, podcastTitle, podcastDescription, imageUrl }) => (
                <PodcastCard
                  key={_id}
                  imgUrl={imageUrl}
                  title={podcastTitle}
                  description={podcastDescription}
                  podcastId={_id}
                />
              )
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3 p-4">
            <Mic className="w-20 h-20 px-3 py-3 mb-2 rounded-full text-white-1 bg-orange-1" />
            <p className="text-xl font-bold text-center text-white-1">
              No podcasts available. Start creating your own podcast now!
            </p>
            <Link href={"/create-podcast"}>
              <Button className="px-4 py-2 mt-4 font-bold rounded-md text-white-1 bg-orange-1 hover:bg-orange-500">
                Create Podcast
              </Button>
            </Link>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
