import React from 'react';
import a1 from './a1.jpeg';
import a2 from './a2.jpeg';
import a3 from './a3.jpeg';
import a4 from './a4.jpeg';
import a5 from './a5.jpeg';
import a6 from './a6.jpeg';
import a7 from './a7.jpeg';
import a8 from './a8.jpeg';
import a9 from './a9.jpeg';
import a10 from './a10.jpeg';
import a11 from './a11.jpeg';
import a12 from './a12.jpeg';



export default function Gallery () {






    return (
<>
<section class="overflow-hidden text-gray-700 ">
  <div class="container px-5 py-2 mx-auto lg:pt-8 lg:px-32">
  <div class="flex flex-wrap -m-1 md:-m-2">
      <div class="flex flex-wrap w-1/2">
          <div class="w-1/2 p-1 md:p-2">
              <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                  src={a1}/>
          </div>
          <div class="w-1/2 p-1 md:p-2">
              <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                  src={a2} />
          </div>
          <div class="w-full p-1 md:p-2">
              <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                  src={a4} />
          </div>
      </div>
      <div class="flex flex-wrap w-1/2">
          <div class="w-full p-1 md:p-2">
              <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                  src={a3} />
          </div>
          <div class="w-1/2 p-1 md:p-2">
              <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                  src={a5} />
          </div>
          <div class="w-1/2 p-1 md:p-2">
              <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                  src={a6} />
          </div>
      </div>
  </div>
  </div>
</section>
            <section class="overflow-hidden text-gray-700 ">
                <div class="container px-5 py-2 mx-auto lg:px-32">
                    <div class="flex flex-wrap -m-1 md:-m-2">
                        <div class="flex flex-wrap w-1/2">
                            <div class="w-1/2 p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src={a7} />
                            </div>
                            <div class="w-1/2 p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src={a8} />
                            </div>
                            <div class="w-full p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src={a9} />
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/2">
                            <div class="w-full p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src={a10} />
                            </div>
                            <div class="w-1/2 p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src={a11} />
                            </div>
                            <div class="w-1/2 p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src={a12} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
</>
    )
}