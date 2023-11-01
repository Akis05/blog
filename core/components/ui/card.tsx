import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = () => {
  return (
    <div className="mb-12 flex items-center gap-12">
      <div className="flex-1 h-80 relative">
        <Image src="/p1.jpeg" alt="" fill className="object-cover" />
      </div>

      <div className="flex flex-1 flex-col gap-7">
        <div className="">
          <span className="text-gray-400">
            {/* {item.createdAt.substring(0, 10)} -{" "} */}
            25/05/2022
          </span>
          <span className="bg-red-700 font-medium">catSlug</span>
        </div>
        <Link href={`/posts/a`}>
          <h1>Titre akis</h1>
        </Link>
        {/* <p className={styles.desc}>{item.desc.substring(0, 60)}</p> */}
        <div
          className="text-lg font-light text-[#626262] "
          dangerouslySetInnerHTML={{ __html: "akis des cription" }}
        />
        <Link
          href={`/posts/akis`}
          className="border-b-red-600 border border-r-2 py-[2px] px-0"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
