import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { gridItems } from '@/data'

const Grid = () => {
  
  return (
    <BentoGrid className="md:auto-rows-[15rem]">
      {gridItems.map(({className,
            title,
            description,
            id,
            img,
            imgClassName,
            titleClassName,
            spareImg,
}) => (
        <BentoGridItem
        id={id}
        key={id}
        title={title}
        description={description}
        className={className}
        // className="dark:bg-pink-600"
        img={img}
        imgClassName={imgClassName}
        titleClassName={titleClassName}
        spareImg={spareImg}
  
        />
      ))}
    </BentoGrid>
  )
}

export default Grid


// export const gridItems = [
//   {
//     id: 1,
//     title: "I prioritize client collaboration, fostering open communication ",
//     description: "",
//     className: "lg:col-span-2 lg:row-span-2 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
//     imgClassName: "w-full h-full",
//     titleClassName: "justify-end",
//     img: "/b1.svg",
//     spareImg: "",
//   },
//   {
//     id: 2,
//     title: "I'm very flexible with time zone communications",
//     description: "",
//     className: "lg:col-span-1 lg:row-span-1 md:col-span-3 md:row-span-2",
//     imgClassName: "",
//     titleClassName: "justify-start",
//     img: "",
//     spareImg: "",
//   },
//   {
//     id: 3,
//     title: "My tech stack",
//     description: "I constantly try to improve",
//     className: "lg:col-span-1 lg:row-span-1 md:col-span-3 md:row-span-2",
//     imgClassName: "",
//     titleClassName: "justify-center",
//     img: "",
//     spareImg: "",
//   },
//   {
//     id: 4,
//     title: "Tech enthusiast with a passion for development.",
//     description: "",
//     className: " md:row-span-1 ",
//     imgClassName: "",
//     titleClassName: "justify-start",
//     img: "/grid.svg",
//     spareImg: "/b4.svg",
//   },

//   {
//     id: 5,
//     title: "Currently building a JS Animation library",
//     description: "The Inside Scoop",
//     className: "lg:col-span-2 lg:row-span-2 md:col-span-3 md:row-span-2",
//     imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
//     titleClassName: "justify-center md:justify-start lg:justify-center",
//     img: "/b5.svg",
//     spareImg: "/grid.svg",
//   },
//   {
//     id: 6,
//     title: "Do you want to start a project together?",
//     description: "",
//     className: "md:row-span-1",
//     imgClassName: "",
//     titleClassName: "justify-center md:max-w-full max-w-60 text-center",
//     img: "",
//     spareImg: "",
//   },
// ];