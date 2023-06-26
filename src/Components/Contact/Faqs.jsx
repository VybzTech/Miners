import React from "react";
import ReactDOM from "react-dom";
import { MdClose } from "react-icons/md";

const Faqs = ({ showFaqs, setShowFaqs }) => {
  if (showFaqs) {
    return (
      // showFaqs ? (
      //   // return
      //   ReactDOM.createPortal(
      <div
        className={`Faqs ${showFaqs ? "show" : "noshow"}`}
        // onClick={() => setShowFaqs(!showFaqs)}
      >
        <main
        // onClick={() => {
        //   console.log("I am Main");
        // }}
        >
          <header>
            <h1>FAQs</h1>
            <h2>(Frequently Asked Questions)</h2>
            <aside>
              <button
                onClick={() => {
                  setShowFaqs((s) => (s = !s));
                }}
              >
                {/* <button onClick={()={setShowFaqs((s)=>s=!s)}}> */}
                <MdClose />
              </button>
            </aside>
          </header>
          <hr />
          <div className="wrapper">
            <div className="container">
              <h2>What is Lithium Mining ? </h2>
              <h2>Introduction</h2>
              <h2>Introduction</h2>
              <h2>Introduction</h2>
              <h2>Introduction</h2>
              <h2>Introduction</h2>
              <h2>Introduction</h2>
              <p>{`
              More than $8 billion are to be investment in Latam Lithium

              Lithium demand is expected to nearly triple by 2025, and this will lead to a major boom in lithium mining
              
              Argentina, Bolivia and Chile have the world’s largest reserves of lithium. They represent 80% of all the lithium of the planet
              
              Argentina owns 20% of the world lithium deposits, located in the regions of Salta, Catamarca and Jujuy, which places it in the fourth global position
              
              Argentina’s Government wants to make Argentina a Lithium World Leader. For this reason, the government has flexible policies to support the industry
              
              Chile owns 48% of the world's reserves of this metal and has the Atacama Salar, one of the areas with greater power and competitiveness at the global level of lithium’s extraction
              
              Chile invests US $2 billion in lithium projects which will allow the country to triple its production by the year 2022
              
              Recently discovered lithium resources deposit in Peru is expected to require an investment ofUS$ 800 million
              
              Bolivia has the largest deposits of the three countries of the lithium triangle, which are in the Salar de Uyuni area
              
              Basically, lithium is a highly reactive alkali metal with excellent heat and electrical conductivity. Such characteristics make it especially useful to manufacture lubricants, pharmaceuticals, glass and, most importantly, lithium-ion batteries for electric cars and consumer electronics.
              
              But lithium can’t just be found in nature, as it’s highly reactive. Instead, it’s present as a constituent of salts or other compounds. Most of the lithium available in the market can be found as lithium carbonate, a more stable compound that can then transformed into chemicals or salts.
              
              Lithium salts can be found in underground deposits of clay, mineral ore and brine, as well as in geothermal water and seawater. Most of the world’s lithium comes from mines, from where it’s extracted. Briny lakes, also known as salars, have the highest concentration of lithium, ranging from 1,000 to 3,000 parts per million.
              
              Lithium extraction
              
              The salars with the highest lithium concentrations are located in Bolivia, Argentina, and Chile, in an area called “the lithium triangle.” Lithium obtained from salars is then recovered in the form of lithium carbonate, the main raw material that is used by companies in lithium-ion batteries.
              Brine mining in salars is normally a very long process that can take from eight months to three years. Mining starts by drilling a hole and pumping brine to the surface. Then they leave it to evaporate for months, first creating a mix of manganese, potassium, borax, and salts which is filtered and placed into another evaporation pool.
              
              It will take between 12 and 18 months for that mix to be filtered enough in order to be able to extract the lithium carbonate, also known as white gold. While it’s cheap and effective, the process needs a lot of water, estimated at 500.000 gallons per ton of lithium extracted.
              
              This creates a lot of pressure in local communities living in nearby areas. For example, in Chile’s Salar de Atacama, mining has caused the region to lose 65% of the region’s water. This has meant impacts of local farmers, who rely on agriculture and cattle for their livelihoods and now need to get the water from somewhere else.
              
              The risks of lithium mining
              
              Lack of water in the region is not just the single potential problem with lithium mining. Toxic chemicals can leak from the evaporation pools to the water supply, such as hydrochloric acid, which is used in the processing of lithium – as well as waste products that can filter out of the brine.
              
              In the United States, Canada, and Australia, lithium is usually extracted from the rock by using more traditional methods. Nevertheless, this still requires the use of chemicals in order to extract it in a useful form. In Nevada, the research found impacts on fish 150 miles downstream from a lithium processing operation, for example.
              A report by Friends of the Earth argued that extracting lithium can affect the soil and causes air contamination. In the area Salar del Hombre Muerto in Argentina, residents complain that lithium polluted streams that are used by humans and livestock, while in Chile there were clashes between mining firms and locals.
              
              Improved technologies for lithium extraction
              
              Researchers argue that there’s a need to develop new extraction technologies that can allow manufacturing batteries in a more environmentally friendly way. That’s why across the world many are looking for new alternatives, such as battery chemistries that replace cobalt and lithium with more common and less toxic materials.
              
              Nevertheless, new batteries that are less energy-dense or more expensive could end up having a negative effect on the environment. “A less durable, yet more sustainable device could entail a larger carbon footprint once you factor in transportation and the extra packaging required,” said Christina Valimaki an analyst at Elsevier.
              Being able to recycle lithium-ion plays a key role as well. In Australia, research showed that only 2% of the country’s 3,300 tons of lithium-ion waste was recycled. That can cause problems, as unwanted electronics with batteries can end up in landfills and metals and ionic fluids can leak into underground water reservoirs.
              
              The Birmingham Energy Institute is using robotics technology initially develop for nuclear power plants to look for ways to remove and dismantle potentially explosive lithium-ion cells from electric vehicles. There were a number of fires at recycling plants where lithium-ion batteries have been stored improperly.
              
              A key problem is that manufacturers are usually secretive regarding what actually goes into the batteries, which makes it difficult to recycle them properly. Now, recovered cells are mostly shredded, leading to a mixture of metals that can be separated using pyrometallurgical techniques.
              
              Growing demand
              
              The global enchantment over mobile devices and all kinds of technological gadgets have led to a growing demand for lithium-ion batteries. That’s especially applicable for electric vehicles, as the world seeks to stop using fossil fuels in the near future to reduce global greenhouse gas emissions.
              
              By 2025, lithium demand is expected to increase to approximately 1.3 million metric tons of LCE (lithium carbonate equivalent). That’s five times today’s levels. A long list of automakers is responsible for that. For example, Volkswagen hopes to launch more than 70 electric car models in the next 10 years.
              
              The growth in demand for lithium can also be linked to an announcement made by China in 2015, prioritizing electric vehicles as part of its five-year plan. Over the period from 2016 to 2018, lithium prices have more than doubled and are expected to keep growing as the demand expands.
              
              The open question is the consequences that such demand will have on the environment and the communities near the salt mines where the lithium is extracted. The more gadgets and electric vehicles the more lithium that will be needed in the future, raising the need to develop more environmentally friendly extraction techniques.
              
              Source: https://www.zmescience.com
              
              
              Lithium can do a number of nifty tricks. As a pure metal, it bursts into flames when it touches water. In its salt form, it treats mood disorders. (It was an ingredient in the original recipe for 7 Up).
              
              And — most significantly for the global economy — a single particle of lithium will readily shed an electron, and then zip back and forth between the positive and negative ends of a rechargeable battery, storing and discharging power as it goes.
              
              Lithium-ion batteries are a key part of every feasible path to reducing the climate crisis. Electric vehicles can help reduce the use of gasoline and diesel. Giant batteries can store electricity from wind and solar farms to displace coal and natural gas. The batteries' promise: the quality of life that fossil fuels have provided, minus the fossil fuels themselves.
              
              What this means for demand for minerals like lithium is almost hard to comprehend.
              
              "We'll hit the first million [metric tons] of demand within the next few years," says Cameron Perks, a lithium expert with Benchmark Minerals Intelligence. "And then thereafter every few years adding another 1 million [metric tons] ... every few years, which is staggering."
              
              That's an incredible pace of expansion. And it's already underway. Global lithium production has already doubled in just a few years. Now it needs to do it again. And again. And again ...
              
              Silver Peak had been quietly supplying about 5,000 of those metric tons per year, with no expectation for any big future growth. Now it's invested some $60 million in an expansion, and is on track to make 10,000 metric tons a year by 2024.
              
              As the name suggests, Silver Peak was once a silver mine — the kind where men tunneled into the earth to extract ore from rich veins. But more than 50 years ago, it kicked off a revolution in lithium mining by proving you could extract the mineral from liquid, not just from rock.
              
              A lithium-rich ancient volcano sits below this dry lakebed. Workers drill down beneath the playa, pump up brine that's been soaking up that lithium, and spread it out underneath the hot sun. As water evaporates out, and salt precipitates down, the liquid that's left has a higher and higher concentration of lithium.
              
              After at least 18 months spent journeying through 23 separate, progressively smaller evaporation ponds, the brine is pumped out and treated with a chemical that reacts with the dissolved lithium to create lithium carbonate — a white powder that's loaded into sacks weighing more than a ton each, which are shipped off to customers.
              
              Not all of the lithium made here goes to batteries, but if it did, it could potentially meet demand for a few hundred thousand electric vehicles per year. That makes Silver Peak a relatively small player on world lithium markets; the global auto industry is already making millions of electric vehicles a year.
              
              But as it scrambles to double its output, it's not alone. S&P Global Platts wrote in late 2021 that every major lithium producer in the world was planning an expansion.
              
              "We're doing everything in our power to keep up with our customers' demand, and I know most of our competitors are, too," says Meredith Bandy, the vice president of investor relations and sustainability at Albemarle, the company that owns Silver Peak -- as well as other, larger lithium mines around the world.
              
              There's a very simple reason to do it, and it's not a sense of duty to help with the global fight against climate change. Lithium prices have tripled. That soaring price, combined with rising production, propelled Albemarle to record profits last quarter.
              
  `}</p>
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
