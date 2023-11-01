import Comments from "@/core/components/sections/comments";
import Menu from "@/core/components/sections/menu";
import Image from "next/image";
import React from "react";

interface ParamsType {
  params: { slug: string };
}

const SinglePage = ({ params }: ParamsType) => {
  return (
    <div>
      <div className="flex items-center gap-14">
        <div className="flex-1">
          <h1 className=" mb-14 font-medium text-4xl lg:text-6xl 2xl:text-6xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </h1>
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 relative">
              <Image
                src="/p1.jpeg"
                alt=""
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-1 text-[#626262]">
              <span className="text-lg font-medium">perferendis eligendi</span>
              <span>01.01.2024</span>
            </div>
          </div>
        </div>

        <div className="flex-1 h-96 relative hidden lg:block">
          <Image src="/p1.jpeg" alt="" fill className="object-cover" />
        </div>
      </div>
      <div className="flex gap-14">
        <div className="flex-5 mt-16">
          <div>
            <p className="font-light mb-5 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              omnis maxime voluptas hic ducimus doloremque quia incidunt
              corrupti minus illum? Amet vero itaque consequuntur temporibus
            </p>
            <p className="font-light mb-5 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              omnis maxime voluptas hic ducimus doloremque quia incidunt
              corrupti minus illum? Amet vero itaque consequuntur temporibus
              sunt fugiat, architecto asperiores veniam. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Libero omnis maxime voluptas
              hic ducimus doloremque quia incidunt corrupti minus illum? Amet
            </p>
            <p className="font-light mb-5 text-base ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              omnis maxime voluptas hic ducimus doloremque quia incidunt
              corrupti minus illum? Amet vero itaque consequuntur temporibus
              sunt fugiat, architecto asperiores veniam. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Libero omnis maxime voluptas
              hic ducimus doloremque quia incidunt corrupti minus illum? Amet
              vero itaque consequuntur temporibus sunt fugiat, architecto
            </p>
          </div>
          <Comments postSlug={params.slug} />
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
