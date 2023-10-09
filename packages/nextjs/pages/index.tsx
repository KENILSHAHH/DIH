"use client"
import Link from "next/link";
import type { NextPage } from "next";
import { BugAntIcon, MagnifyingGlassIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";
import { SSX } from "@spruceid/ssx";
import SSXComponent from "~~/components/SSXComponent";
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from "react";
import lens from './assets/lens.png'
import onyx from './assets/onyx.png'
import zksync from './assets/zksync.png'
const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]
interface PageProps {
  childComponent: React.ReactNode;
}
const Home: React.FC<PageProps> = ({childComponent}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
     
 <div className="bg-white">
      

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
    
    <div className="text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        LensDao
      </h1>
       <p className="mt-6 text-2xl leading-8 text-gray-600">
                Got a lens handle?
                Join the DAO to claim exclusive benefits with all the gas fees sponsored
                
              </p>
      <p className="mt-6 text-2xl leading-8 text-gray-600">
   
              </p>
              <div  style={{width:"100px",display:"flex", alignItems:"center", justifyContent:"center", marginLeft:"270px"}}>
              <img className="m-6" src={lens.src} />
              <img className="m-6" src={zksync.src} />
                <img className="m-6" style={{width:"150px",
              height:"75px"}} src={onyx.src} />
                  </div>   
      <div className="mt-10 flex items-center justify-center gap-x-6">
  <button  className="btn btn-primary" onClick={() => (document.getElementById('my_modal_2') as HTMLDialogElement)?.showModal()}>Verify your lens handle</button>
						<dialog id="my_modal_2" className="modal">
  <div className="modal-box">
								<h3 className="font-bold text-lg">You have more than 3 followers </h3>
								<p className="py-4">You are eligble to get onyx credentials</p>
								<button  className="btn btn-neutral" >Get onyx credentials and enter the LensDao</button>
  </div>
  <form method="dialog" className="modal-backdrop">
    
  </form>
</dialog>
      
      </div>
    </div>
  </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
 
    </>
  );
};

export default Home;
