const Tarifs = () => {
  return (
    <a name="t" >
<div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
    <div>
    <h1 className="text-2xl font-bold text-slate-50 lg:text-5xl dark:text-dark">
                Tarifications
            </h1>
    </div>
    <a class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-dark-900 sm:text-4xl md:mx-auto">
      <span class="relative inline-block">
        <svg viewBox="0 0 52 24" fill="currentColor" class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
          <rect fill="url(#7e5e8ff8-1960-4094-a63a-2a0c0f922d69)" width="52" height="24"></rect>
        </svg>       
      </span>
    </a>
  </div>
  <div class="grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
    <div class="flex flex-col justify-between p-8 transition-shadow duration-200 bg-blue-100 border rounded shadow-sm sm:items-center hover:shadow">
      <div class="text-center">
        <div class="text-lg font-semibold text-pink-900">Basic</div>
        <div class="flex items-center justify-center mt-2">
          <div class="mr-1 text-5xl font-bold text-pink-900">50€</div>
          
        </div>
        <div class="mt-2 space-y-3">
          <div class="text-pink-900">25 Photos</div>
          <div class="text-pink-900">25 retocuhes</div>
          <div class="text-pink-900">Clé-USB</div>
        </div>
      </div>
      <div>
        <a href="/" class="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-blue-100 transition duration-200 bg-rose-900 rounded shadow-md hover:bg-amber-500 focus:shadow-outline focus:outline-none">
          Seléctionner 
        </a>
        <p class="max-w-xs mt-6 text-xs text-neutral-900 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
          Le shooting parfait pour dévoiller vos talents cachés
        </p>
      </div>
    </div>
    <div class="relative flex flex-col justify-between p-8 transition-shadow duration-300 bg-blue-100 border rounded shadow-sm sm:items-center hover:shadow border-deep-purple-accent-400">
      <div class="text-center">
        <div class="text-lg font-semibold text-pink-900">Pro</div>
        <div class="flex items-center justify-center mt-2">
          <div class="mr-1 text-5xl font-bold text-pink-900">80€</div>
        </div>
        <div class="mt-2 space-y-3">
          <div class="text-pink-900">50 photos </div>
          <div class="text-pink-900">50 retouches</div>
          <div class="text-pink-900">Clé-USB</div>
        </div>
      </div>
      <div>
        <a
          href="/"
          class="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-blue-100 transition duration-200 bg-rose-900 rounded shadow-md hover:bg-amber-500 focus:shadow-outline focus:outline-none">
          sélectionner
        </a>
        <p class="max-w-xs mt-6 text-xs text-neutral-900 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
          Le shooting du lancement de carrière professionel
        </p>
      </div>
    </div>
    <div class="flex flex-col justify-between p-8 transition-shadow duration-300 bg-blue-100 border rounded shadow-sm sm:items-center hover:shadow">
      <div class="text-center">
        <div class="text-lg font-semibold text-pink-900">Expert</div>
        <div class="flex items-center justify-center mt-2">
          <div class="mr-1 text-5xl font-bold text-pink-900">150€</div>
          <div class="text-gray-700"></div>
        </div>
        <div class="mt-2 space-y-3">
          <div class="text-pink-900">100 photos</div>
          <div class="text-pink-900">70 retouches </div>
          <div class="text-pink-900">Clé-USB</div>
        </div>
      </div>
      <div>
        <a href="/" class="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-blue-100 transition duration-200 bg-rose-900 rounded shadow-md hover:bg-amber-500 focus:shadow-outline focus:outline-none">
        sélectionner
        </a>
        <p class="max-w-xs mt-6 text-xs text-neutral-900 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
          Le plus qulicatif des shootings professionel
        </p>
      </div>
    </div>
  </div>
</div>
</a>
)
}

export default Tarifs;