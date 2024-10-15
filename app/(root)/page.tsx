import PodcastCard from "@/components/PodcastCard";
import { podcastData } from "@/constants";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col mt-9 gap-9 md:overflow-hidden">
      <section className="flex flex-col gap-5">
        <h1 className="font-bold text-20 text-white-1">
          Trending Podcasts Over The Globe
        </h1>
        <div className="podcast_grid">
          {podcastData.map(({ id, title, description, imgURL }) => (
            <PodcastCard
              key={id}
              imgURL={imgURL}
              title={title}
              description={description}
              podcastId={id}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
