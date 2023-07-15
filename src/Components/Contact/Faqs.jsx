import React from "react";
import ReactDOM from "react-dom";
import { MdClose } from "react-icons/md";

const Faqs = ({ showFaqs, setShowFaqs }) => {
  if (showFaqs) {
    return (
      <div className={`Faqs ${showFaqs ? "show" : "noshow"}`}>
        <main>
          <header>
            <h1>FAQs</h1>
            <h2>(Frequently Asked Questions)</h2>
            <aside>
              <button
                onClick={() => {
                  setShowFaqs((s) => (s = !s));
                }}
              >
                <MdClose />
              </button>
            </aside>
          </header>
          <hr />
          <div className="wrapper">
            <div className="container">
              <h2>What is Lithium ?</h2>
              <p>
                Lithium is a chemical element with the symbol Li and atomic
                number 3. It is a soft, silvery-white alkali metal. Under
                standard conditions, it is the least dense metal and the least
                dense solid element. Basically, lithium is a highly reactive
                alkali metal with excellent heat and electrical conductivity.
                Such characteristics make it especially useful to manufacture
                lubricants, pharmaceuticals, glass and, most importantly,
                lithium-ion batteries for electric cars and consumer
                electronics.
              </p>
            </div>
            <div className="container">
              <h2>What is lithium used for ?</h2>
              <p>
                Lithium is a mood stabilising medicine used to treat certain
                mental illnesses, such as: mania (feeling highly excited,
                overactive or distracted) hypomania (like mania, but less
                severe) bipolar disorder, where your mood changes between
                feeling very high (mania) and very low (depression).
              </p>
            </div>
            <div className="container">
              <h2>Should I invest in Lithium ?</h2>

              <p>
                More than $8 billion are to be investment in Latam Lithium which
                is just a head-start for the business. Lithium demand is
                expected to nearly triple by 2025, and this will lead to a major
                boom in lithium mining. Chile owns 48% of the world's reserves
                of this metal and has the Atacama Salar, one of the areas with
                greater power and competitiveness at the global level of
                lithium’s extraction Chile invests US $2 billion in lithium
                projects which will allow the country to triple its production
                by the year 2022 Recently discovered lithium resources deposit
                in Peru is expected to require an investment ofUS$ 800 million
              </p>
            </div>
            <div className="container">
              <h2>Does the Government approve of it ?</h2>

              <p>
                Argentina’s Government wants to make Argentina a Lithium World
                Leader. For this reason, the government has flexible policies to
                support the industry.
              </p>
            </div>
            <div className="container">
              <h2>What are the uses of lithium ?</h2>

              <p>
                Lithium and its compounds have several industrial applications,
                including heat-resistant glass and ceramics, lithium grease
                lubricants, flux additives for iron, steel and aluminium
                production, lithium metal batteries, and lithium-ion batteries.
                These uses consume more than three-quarters of lithium
                production. The most important use of lithium is in rechargeable
                batteries for mobile phones, laptops, digital cameras and
                electric vehicles. Lithium is also used in some non-rechargeable
                batteries for things like heart pacemakers, toys and clocks.
                Lithium oxide is used in special glasses and glass ceramics.
                Lithium chloride is one of the most hygroscopic materials known,
                and is used in air conditioning and industrial drying systems
                (as is lithium bromide). Lithium stearate is used as an
                all-purpose and high-temperature lubricant. Lithium carbonate is
                used in drugs to treat manic depression, although its action on
                the brain is still not fully understood. Lithium hydride is used
                as a means of storing hydrogen for use as a fuel.
              </p>
            </div>
            <div className="container">
              <h2>Where can Lithium be found ?</h2>
              <p>
                Lithium salts can be found in underground deposits of clay,
                mineral ore and brine, as well as in geothermal water and
                seawater. Most of the world’s lithium comes from mines, from
                where it’s extracted. Briny lakes, also known as salars, have
                the highest concentration of lithium, ranging from 1,000 to
                3,000 parts per million. But lithium can’t just be found in
                nature, as it’s highly reactive. Instead, it’s present as a
                constituent of salts or other compounds. Most of the lithium
                available in the market can be found as lithium carbonate, a
                more stable compound that can then transformed into chemicals or
                salts. Bolivia has the largest deposits of the three countries
                of the lithium triangle, which are in the Salar de Uyuni area.
              </p>
            </div>
            <div className="container">
              <h2>Is there lithium in Africa ?</h2>
              <p>
                Lithium deposits are found in many African countries. Zimbabwe
                is home to Africa's largest lithium reserves, which are also the
                fifth largest lithium reserves in the world. In 2018, Zimbabwe
                and Namibia were among the top ten lithium producers worldwide.
              </p>
            </div>
            <div className="container">
              <h2>Where else can lithium be found ?</h2>

              <p>
                The salars with the highest lithium concentrations are located
                in Bolivia, Argentina, and Chile, in an area called “the lithium
                triangle.” Lithium obtained from salars is then recovered in the
                form of lithium carbonate, the main raw material that is used by
                companies in lithium-ion batteries. Argentina, Bolivia and Chile
                have the world’s largest reserves of lithium so to speak. They
                represent 80% of all the lithium of the planet. Argentina owns
                20% of the world lithium deposits, located in the regions of
                Salta, Catamarca and Jujuy, which places it in the fourth global
                position.
              </p>
            </div>
            <div className="container">
              <h2> What are the risks of lithium mining ?</h2>
              <p>
                Lack of water in the region is not just the single potential
                problem with lithium mining. Toxic chemicals can leak from the
                evaporation pools to the water supply, such as hydrochloric
                acid, which is used in the processing of lithium – as well as
                waste products that can filter out of the brine. In the United
                States, Canada, and Australia, lithium is usually extracted from
                the rock by using more traditional methods. Nevertheless, this
                still requires the use of chemicals in order to extract it in a
                useful form. In Nevada, the research found impacts on fish 150
                miles downstream from a lithium processing operation, for
                example. A report by Friends of the Earth argued that extracting
                lithium can affect the soil and causes air contamination. In the
                area Salar del Hombre Muerto in Argentina, residents complain
                that lithium polluted streams that are used by humans and
                livestock, while in Chile there were clashes between mining
                firms and locals.
              </p>
            </div>
            <div className="container">
              <h2>What is the Lithium Mining process ?</h2>
              <p>
                Brine mining in salars is normally a very long process that can
                take from eight months to three years. Mining starts by drilling
                a hole and pumping brine to the surface. Then they leave it to
                evaporate for months, first creating a mix of manganese,
                potassium, borax, and salts which is filtered and placed into
                another evaporation pool. It will take between 12 and 18 months
                for that mix to be filtered enough in order to be able to
                extract the lithium carbonate, also known as white gold. While
                it’s cheap and effective, the process needs a lot of water,
                estimated at 500.000 gallons per ton of lithium extracted. This
                creates a lot of pressure in local communities living in nearby
                areas. For example, in Chile’s Salar de Atacama, mining has
                caused the region to lose 65% of the region’s water. This has
                meant impacts of local farmers, who rely on agriculture and
                cattle for their livelihoods and now need to get the water from
                somewhere else.
              </p>
            </div>
            <div className="container">
              <h2>Are there Improved technologies for lithium extraction ?</h2>
              <p>
                Researchers argue that there’s a need to develop new extraction
                technologies that can allow manufacturing batteries in a more
                environmentally friendly way. That’s why across the world many
                are looking for new alternatives, such as battery chemistries
                that replace cobalt and lithium with more common and less toxic
                materials. Nevertheless, new batteries that are less
                energy-dense or more expensive could end up having a negative
                effect on the environment. “A less durable, yet more sustainable
                device could entail a larger carbon footprint once you factor in
                transportation and the extra packaging required,” said Christina
                Valimaki an analyst at Elsevier. Being able to recycle
                lithium-ion plays a key role as well. In Australia, research
                showed that only 2% of the country’s 3,300 tons of lithium-ion
                waste was recycled. That can cause problems, as unwanted
                electronics with batteries can end up in landfills and metals
                and ionic fluids can leak into underground water reservoirs. The
                Birmingham Energy Institute is using robotics technology
                initially develop for nuclear power plants to look for ways to
                remove and dismantle potentially explosive lithium-ion cells
                from electric vehicles. There were a number of fires at
                recycling plants where lithium-ion batteries have been stored
                improperly.
              </p>
            </div>
            <div className="container">
              <h2>What is Lithium's Demand rate ?</h2>
              <p>
                The global enchantment over mobile devices and all kinds of
                technological gadgets have led to a growing demand for
                lithium-ion batteries. That’s especially applicable for electric
                vehicles, as the world seeks to stop using fossil fuels in the
                near future to reduce global greenhouse gas emissions. By 2025,
                lithium demand is expected to increase to approximately 1.3
                million metric tons of{" "}
                <b> LCE (lithium carbonate equivalent).</b>
                That’s five times today’s levels. A long list of automakers is
                responsible for that. For example, Volkswagen hopes to launch
                more than 70 electric car models in the next 10 years. The
                growth in demand for lithium can also be linked to an
                announcement made by China in 2015, prioritizing electric
                vehicles as part of its five-year plan. Over the period from
                2016 to 2018, lithium prices have more than doubled and are
                expected to keep growing as the demand expands. The open
                question is the consequences that such demand will have on the
                environment and the communities near the salt mines where the
                lithium is extracted. The more gadgets and electric vehicles the
                more lithium that will be needed in the future, raising the need
                to develop more environmentally friendly extraction techniques.
              </p>
            </div>
          </div>
          <span>Last updated on June 21, 2023.</span>
        </main>
      </div>
    );
  }
  return <></>;
};

export default Faqs;
