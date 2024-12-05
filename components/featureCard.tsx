"use client";
import { Feature } from '@/types/feature';
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import { Minus, Plus } from 'lucide-react';

type Props = {
  feature: Feature
};

function FeatureCard({ feature }: Props) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="cursor-pointer mb-[40px] sm:mb-[128px] transition-all duration-500 ease-in-out">
      <div className={isExpanded ? "sm:h-[240px] h-[240px] relative transition-all duration-500 ease-in-out" : "relative transition-all duration-500 ease-in-out"}>
        <div className='flex justify-end items-end absolute top-[14px] z-20 right-[14px]'>
          <Button variant={'ghost'} className='w-10 h-10 p-0 rounded-full text-white border-[1px] border-solid border-[#808080] cursor-pointer' onClick={toggleExpand}>
            {isExpanded ? <Minus /> : <Plus />}
          </Button>
        </div>
        <div>
          <div className={isExpanded ? 'h-[240px] w-auto flex justify-center mx-auto relative transition-all duration-500 ease-in-out' : 'h-[424px] md:h-[520px] relative transition-all duration-500 !ease-in-out'}>
            {isMobile?(
               <Image
               src={feature.Image}
               alt={isExpanded ? "Feature GIF" : "Feature Image"}
               width={isExpanded ? 150 : 300}
               height={isExpanded ? 100 : 200}
               className={
                 isExpanded 
                   ? 'w-full h-full object-cover rounded-[24px] object-top tran-height' 
                   : 'w-full aspect-[0.77/1] object-cover h-full rounded-[24px] tran-height'
               }
             />
            ):(
              <Image
              src={feature.Image}
              alt={isExpanded ? "Feature GIF" : "Feature Image"}
              width={isExpanded ? 300 : 600}
              height={isExpanded ? 200 : 400}
              className={
                isExpanded 
                  ? 'w-full h-full object-cover rounded-[24px] object-top tran-height' 
                  : 'w-full aspect-[0.77/1] object-cover h-full rounded-[24px] tran-height'
              }
            />
            )}
            
          </div>
        </div>
      </div>
      {isExpanded ? (
        <div className="transition-all duration-500 !ease-in-out">
          <div className="my-[8px] sm:my-[24px] font-openSans font-thin sm:font-light text-[20px] md:text-[30px] leading-[1.2] sm:leading-[140%] text-white pl-1">{feature.title}</div>
          <ul>
            {feature.PreMatches.map((PreMatche) => (
              <li key={PreMatche}>
              </li>
            ))} 
          </ul>
          <ul className='ml-[35px]'>
            {feature.PreMatches.map((preMatch) => (
              <li key={preMatch} className="list-disc text-white">
                <p className="font-openSans font-regular text-[10px] sm:text-[18px] leading-[1.2] sm:leading-[155%] text-white">{preMatch}</p>
              </li>
            ))}
          </ul>
        </div>) : (
        <div className="mt-[8px] sm:mt-[24px] transition-all duration-500 !ease-in-out">
          <p className="font-openSans font-thin sm:font-light text-[20px] md:text-[30px] leading-[140%] text-white">{feature.title}</p>
        </div>
      )}
    </div>
  );
}

export default FeatureCard;
