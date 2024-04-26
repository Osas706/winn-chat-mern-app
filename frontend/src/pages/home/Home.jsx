import React from 'react';
import MessageContainer from "../../components/messages/MessageContainer"
import Sidebar from '../../components/sidebar/Sidebar';
const Home = () => {
  return (
    <div className='flex max-sm:h-[750px] max-md:h-[650px] max-lg:h-[650px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 z-10'>
			<Sidebar />
			<MessageContainer />
		</div>
  )
}

export default Home
