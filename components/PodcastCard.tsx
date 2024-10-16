import React from "react";
import { PodcastCardProps } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PodcastCard = ({
  podcastId,
  title,
  description,
  imgUrl,
}: PodcastCardProps) => {
  const router = useRouter();

  const handleViews = () => {
    // TODO: increase the views of the podcast

    router.push(`/podcasts/${podcastId}`, {
      scroll: true,
    });
  };

  return (
    <div className="cursor-pointer" onClick={handleViews}>
      <figure className="flex flex-col gap-2">
        <Image
          src={imgUrl}
          width={174}
          height={174}
          alt={title}
          className="w-full aspect-square h-fit rounded-xl 2xl:size-[200px]"
        />
        <div className="flex flex-col">
          <h1 className="font-bold truncate text-16 text-white-1">{title}</h1>
          <h2 className="font-normal capitalize truncate text-12 text-white-4">
            {description}
          </h2>
        </div>
      </figure>
    </div>
  );
};

export default PodcastCard;
