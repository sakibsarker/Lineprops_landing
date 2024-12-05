"use client";

import React, { FC, MouseEventHandler } from "react";
import Image from "next/image";
import Close from "@/public/xmark-solid.svg";

interface MyModalProps {
    visible: boolean;
    onClose: MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
}

const MyModal: FC<MyModalProps> = ({ visible, onClose }) => {

    if (!visible) return null;

    if (visible) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'scroll';
    }

    return (
        <>
            <div className='fixed inset-0 bg-opacity-30 backdrop-blur-sm z-[999] flex justify-center items-center'
                onClick={onClose}
            >
                <div className='relative w-[90%] max-w-[1032px] mx-auto bg-[#050505] rounded-[15px] border-[2px] border-solid border-[#060640] xl:py-[41px] xl:px-[61px] sm:p-[30px] p-[20px]'
                    onClick={e => {
                        // do not close modal if anything inside modal content is clicked
                        e.stopPropagation();
                    }}
                >
                    <button onClick={onClose} className="absolute top-[5px] right-[5px]">
                        <Image src={Close} alt="img" className="w-[20px] md:w-[30px] aspect-square" />
                    </button>
                    {/* <video id="video" src='/sample-video.mov' controls muted className='rounded-[30px] w-full max-w-[909px] mx-auto h-[300px] md:h-[400px] xl:h-[496px] object-fill'>
                        <ModalVideoSrc src='../../modal-video.mp4'/>
                    </video> */}
                      <iframe
                        width="100%"
                        height="500px"
                        src={`https://www.youtube.com/embed/aVQTZHNjAac`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </>
    );
}

export default MyModal;
