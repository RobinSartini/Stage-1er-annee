import Link from "next/link"
import React from "react"

const Navigation = () => {
    return (

<div class="bg-neutral-900">
  <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
    <div class="relative flex items-center justify-between">
      <a href="/" aria-label="KuyPhotoGraphy" title="KuyPhotoGraphy" class="inline-flex items-center">
        <span class="ml-2 text-xl font-bold tracking-wide text-slate-50 uppercase">KuyPhotoGraphy</span>
      </a>
      <ul class="flex items-center hidden space-x-8 lg:flex">
        <li><a href="/" aria-label="Acceuil" title="Acceuil" class="font-medium tracking-wide text-slate-50 transition-colors duration-200 hover:text-teal-accent-400">Acceuil</a></li>
        <li><a href="#o" aria-label="Mon Portfolio" title="Mon Portfolio" class="font-medium tracking-wide text-slate-50 transition-colors duration-200 hover:text-teal-accent-400">PortFolio</a></li>
        <li><a href="#t" aria-label="Tarifs" title="Tarifs" class="font-medium tracking-wide text-slate-50 transition-colors duration-200 hover:text-teal-accent-400">Tarifs</a></li>
        <li><a href="#f" aria-label="Contact" title="Contact" class="font-medium tracking-wide text-slate-50 transition-colors duration-200 hover:text-teal-accent-400">Contact</a></li>
      </ul>
      <div class="lg:hidden">
        <button aria-label="Open Menu" title="Open Menu" class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline">
          <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
            <path fill="currentColor" d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path>
            <path fill="currentColor" d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"></path>
            <path fill="currentColor" d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"></path>
          </svg>
        </button>
      </div>
    </div>
</div>
</div>

    )
}

export default Navigation;