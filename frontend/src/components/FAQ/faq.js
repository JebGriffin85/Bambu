import React from 'react';
import './modal.css';


export default function FAQ () {


    return (
     <div>
      <section class="text-gray-700">
        <div class="faq-container px-5 py-24 mx-auto">
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
      
          </div>
          <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div class="w-full lg:w-1/2 px-4 py-2">
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4 cursor-pointer">
                    Are guests required to wear masks at Bambù?
                </summary>

                <span>
                    Bambù updates our safety policies to reflect the most recent guidance from CDC and the City of Chicago on Covid19 protocols.
                    Effective starting Wednesday, August 4th, 2021 all guests, regardless of vaccination status, are required to wear masks when not seated at their table. Vaccinated guests are permitted to remove their masks once seated, but will be asked to wear a mask when entering, exiting, and walking in the restaurant. Unvaccinated guests are required to wear their masks any time they are not actively eating or drinking.
                </span>
              </details>
              <details class="mb-4">
                  <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4 cursor-pointer">
                    Are you able to accommodate dietary restrictions?
                </summary>

                <span>
                    At Bambù, we try to make the fewest number of changes possible when accommodating dietary restrictions, so that our guests may enjoy the menu as Chef Achatz originally envisioned. We are not able to make substitutions for aversions, as this will compromise the integrity of the experience. We are able to make accommodations for certain common dietary restrictions (Ovo-Lacto Vegetarian, Pescetarian, No shellfish or Finfish, No Nuts, No Gluten) with at least 72 hours advance notice.
                </span>
              </details>
              <details class="">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4 cursor-pointer">
                    What happens if I am running late?
                </summary>

                <span>
                    Contact host@bambu.com if you are running late. Please note that arriving more than ten minutes late may result in missing part of your experience.
                </span>
              </details>
            </div>
            <div class="w-full lg:w-1/2 px-4 py-2">
              <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4 cursor-pointer">
                    Can I reschedule my booking?
                </summary>

                <span class="px-4 py-2">
                    We are able to reschedule your booking with at least 72 hours’ advance notice. After that time we are unable to accommodate changes.
                </span>
              </details>
              <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4 cursor-pointer">
                    What is the dress code at Bambù?
                </summary>

                <span class="px-4 py-2">
                    Our dress code is “elevated casual” - we only ask guests to be comfortable yet polished. Jackets are not required, though many guests do opt to wear them.
                </span>
              </details>
              <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4 cursor-pointer">
                    What is your corkage policy?
                </summary>

                <span class="px-4 py-2">
                    Per the policy set in place by the Chef and Owner, we do not allow any outside wine. We do, however, offer carefully selected and curated wine pairings to accompany each menu. In addition, we offer an extensive a la carte selection of wine by the bottle, and a limited selection of beer and sake.
                </span>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
    )
}