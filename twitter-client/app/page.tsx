import Image from 'next/image'
import React from 'react';
import {BsTwitter,BsBookmark} from 'react-icons/bs'
import {BiHomeCircle, BiMoney,BiHash} from 'react-icons/bi'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {FiMail} from 'react-icons/fi'
import {CgProfile} from 'react-icons/cg'
import {CiCircleMore} from 'react-icons/ci'
import FeedCard from '@/components/FeedCard';


interface TwitterSidebarButton{
  title: string
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[]=[
  {
    title : 'Home',
    icon : <BiHomeCircle/>
  },
  {
    title : 'Explore',
    icon : <BiHash />
  },
  {
    title : 'Notifications',
    icon : <IoMdNotificationsOutline />
  },
  {
    title : 'Messages',
    icon : <FiMail />
  },
  {
    title : 'Bookmarks',
    icon : <BsBookmark />
  },
  {
    title : 'Twitter Blue ',
    icon : <BiMoney />
  },
  {
    title : 'Profile',
    icon : <CgProfile />
  },
  {
    title : 'More',
    icon : <CiCircleMore />
  }
]

export default function Home() {
  return  <div>
    <div className="grid grid-cols-12 h-screen w-screen px-56">
      <div className='col-span-3 pt-1 ml-28'>
        <div className='text-3xl hover:bg-gray-800 h-fit rounded-full w-fit p-4 cursor-pointer transition-all'>
        <BsTwitter />
        </div>
        <div className='mt-4 text-xl pr-4'>
          <ul>
          {sidebarMenuItems.map((item)=> (
              <li className='flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-3 py-3 mt-2 w-fit cursor-pointer transition-all' 
                key={item.title}>
                <span className='text-2xl'>{item.icon}</span>
                <span>{item.title}</span>
                </li>))}
          </ul>
          <div className=' mt-5 py-5'>
          <button className='bg-[#1d9bf0] font-semibold text-lg py-3 rounded-full w-full'>Tweet</button>
          </div>
          
        </div>
      </div>
      <div className='col-span-5 border-r-[1px] border-l-[1px] h-screen overflow-y-scroll scrollbar-hide border-gray-600'>
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </div>
      <div className='col-span-3'></div>
    </div>
  </div>;
}
