"use client";

import React from "react";
import PodcastCard from "@/components/PodcastCard";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Link from "next/link";
import EmptyState from "@/components/EmptyState";

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
                  imgUrl={imageUrl!}
                  title={podcastTitle}
                  description={podcastDescription}
                  podcastId={_id}
                />
              )
            )}
          </div>
        ) : (
          <EmptyState
            title="No podcasts available. Start creating your own podcast now!"
            buttonLink="/create-podcast"
            buttonText="Create Podcast"
          />
        )}
      </section>
    </div>
  );
};

export default Home;
