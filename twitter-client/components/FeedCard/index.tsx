import React from 'react'
import Image from 'next/image';
import {BiMessageRounded} from 'react-icons/bi'
import {AiOutlineRetweet} from 'react-icons/ai'
import {BsHeart} from 'react-icons/bs'
import {BiUpload} from 'react-icons/bi'

const FeedCard: React.FC = () =>{
    return <div className='border border-r-0 border-l-0 border-b-0 border-gray-600 p-3 transition-all cursor-pointer hover:bg-zinc-700'>
        <div className='grid grid-cols-12 gap-3'>
            <div className='col-span-1'>
                <Image src="https://avatars.githubusercontent.com/u/44976328?v=4" alt='user-image' height={50} width={50}/>
            </div>
            <div className='col-span-11'>
                <h5>Piyush Garg</h5>
                <p>
                    José Mourinho explaining why Paul Pogba always played better for France than he did for Man United.
                    "It's not about us getting the best out of him, it's about him giving the best he has to give."
                </p>
                <div className='flex justify-between mt-5 text-xl items-center p-2 w-[90%]'>
                <div>
                    <BiMessageRounded/>
                </div>
                <div>
                    <AiOutlineRetweet/>
                </div>
                <div>
                    <BsHeart/>
                </div>
                <div>
                    <BiUpload/>
                </div>
                </div>
                
            </div>
        </div>
    </div>
};

export default FeedCard