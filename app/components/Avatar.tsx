"use client";

import Image from "next/image";

interface AvatarPros {
  src: string | null | undefined;
}

const Avatar: React.FC<AvatarPros> = ({ src }) => {
  return (
    <Image
      className="rounded-full"
      height={30}
      width={30}
      src={src || "/images/placeholder.jpg"}
      alt="Avatar"
    />
  );
};

export default Avatar;
