import React from 'react';
import background from './ga.jpeg';
import tk from './tk.jpeg';
import er from './er.jpeg';

export default function About () {



    return (
        <>

<div class="container mx-auto my-5">

    <div class="relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-72 mx-2">
        
                <div class="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg"> 
            <div class="absolute inset-0 w-full h-full object-fill object-center bg-blue-400 bg-opacity-30 bg-cover bg-bottom" style={{ backgroundImage: `url(${background})`, backgroundBlendMode: 'multiply'}}></div>
            <div class="md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900">
                <h3 class="w-full font-bold text-2xl text-white leading-tight mb-2">Grant Achatz</h3>
                <h4 class="w-full text-xl text-gray-100 leading-tight">Chef/Owner</h4>
            </div>
            <svg class="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
        </div>

        <div class="z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
            <div class="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
                <h4 class="hidden md:block text-xl text-gray-400">Chef/Owner</h4>
                <h3 class="hidden md:block font-bold text-2xl text-gray-700">Grant Achatz</h3>
                            <p class="text-gray-600 text-justify">Chef Grant Achatz is one of the most awarded and recognized chefs in the world. Known for his innovative, emotional, and modernist style of cuisine, he has been named Best Chef in the United States by the James Beard Foundation, honored by Time Magazine as one of the 100 Most Influential People in the World, and has given talks and lectures on gastronomy and design at conferences and universities around the world.</p>
             
            </div>
        </div>

    </div>
</div>

<div class="container mx-auto my-5">

    <div class="relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-72 mx-2">
        
                <div class="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg"> 
            <div class="absolute inset-0 w-full h-full object-fill object-center bg-blue-400 bg-opacity-30 bg-cover bg-bottom" style={{ backgroundImage: `url(${tk})`, backgroundBlendMode: 'multiply'}}></div>
            <div class="md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900">
                <h3 class="w-full font-bold text-2xl text-white leading-tight mb-2">Thomas Keller</h3>
                <h4 class="w-full text-xl text-gray-100 leading-tight">Chef de Cuisine</h4>
            </div>
            <svg class="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
        </div>

        <div class="z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
            <div class="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
                <h4 class="hidden md:block text-xl text-gray-400">Chef de Cusine</h4>
                <h3 class="hidden md:block font-bold text-2xl text-gray-700">Thomas Keller</h3>
                            <p class="text-gray-600 text-justify">Chef Thomas Keller is renowned for his culinary skills and high standards. He has established a collection of restaurants that sets a new paradigm within the hospitality profession. Now celebrating its twenty-six year, Keller took ownership of The French Laundry in Yountville, CA and quickly garnered worldwide acclaim.   He is the first and only American-born chef to hold multiple three-star ratings from the prestigious Michelin Guide.</p>
            </div>
        </div>

    </div>
</div>


<div class="container mx-auto my-5">

    <div class="relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-72 mx-2">
        
                <div class="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg"> 
            <div class="absolute inset-0 w-full h-full object-fill object-center bg-blue-400 bg-opacity-30 bg-cover bg-bottom" style={{ backgroundImage: `url(${er})`, backgroundBlendMode: 'multiply'}}></div>
            <div class="md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900">
                <h3 class="w-full font-bold text-2xl text-white leading-tight mb-2">Eric Ripert</h3>
                <h4 class="w-full text-xl text-gray-100 leading-tight">Sous Chef</h4>
            </div>
            <svg class="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
        </div>

        <div class="z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
            <div class="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
                <h4 class="hidden md:block text-xl text-gray-400">Sous Chef</h4>
                <h3 class="hidden md:block font-bold text-2xl text-gray-700">Eric Ripert</h3>
                            <p class="text-gray-600 text-justify">Ripert has been recognized as one of the top chefs in the world. In 1998, the James Beard Foundation named Ripert “Top Chef in New York City” and in 2003, “Outstanding Chef in the United States.”  Ripert is the Vice Chairman of the board of City Harvest, working to bring together New York’s top chefs and restaurateurs to raise funds and increase the quality and quantity of food donations to New York’s neediest.</p>
            </div>
        </div>

    </div>
</div>
</>
    )
}