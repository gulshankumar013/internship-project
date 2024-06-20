import React from 'react'
import "../css/about.css"
import Nav from './Nav';
import Footer from './Footer';


const About = () => {
  return (
    <>
      <div className='about-page'>
      
        <div className='about-parent1'>
              <div className='about-parent-child'><p>What is?</p></div>
              <div className='about-parent-child'> <p>Why</p></div>
              <div className='about-parent-child'> <p>Role</p></div>
              <div className='about-parent-child'> <p>Founder</p></div>
              <div className='about-parent-child'> <p>Category</p></div> 
        </div>
        <div className='about-parent2'>
              <div className='about-parent-child'><p>Web App</p> </div>
              <div className='about-parent-child'> <p>Internship Project</p></div>
              <div className='about-parent-child'> <p>Full Stack Developer</p></div>
              <div className='about-parent-child'> <p>Gulshan Kumar</p></div>
              <div className='about-parent-child'> <p>Gaming & Entertainment</p></div> 
        </div>
        <div className='about-parent3'>
            <div className='about-parent3-child1'>
                <h2>WHY I CREATED THIS APP ?.</h2><br />
                <br />
                <p>I have developed this app for the gamers and tech-professionals who are seeking to optimize their computer for the ultimate gaming experience or seeking quick upgrades for professional and personal use. 
                This app not only features the latest products, but also provides real-time pricing of these products on various shopping platforms.</p>
            </div>
            <div className='about-parent3-child2'></div>
        </div>
        </div>

        <div className='about-parent4'>
            <div className='about-parent4-child1'>  
            </div>
            <div className='about-parent4-child2'>
                <h3>MARKET RESEARCH</h3><br />
                <h1>THE CLAIM</h1><br />
                <br />
                <p>Gaming Industry is one of the booming industry of India’s growing economy.
                India’s Gaming Report 2022 suggests fast growing gaming market with improving user engagement stats & booming investments.
                India’s gaming market which stood $2.6 billion in 2022, it will be worth $8.6 billion by 2027 as it is expected to grow at a Compoud Annual Rate (CAR) of 27%. Due to its emerging economy and resilient supply chains, it is high time to prioritise and tap onto the emerging market force to stay ahead in the game.</p>
            </div>
        </div>
        
       
        

          {/* 2nd about scroll screen   */}
           <div className='about-page2'>
              <div className='about-page2-parent'>
                    <div className='about-page2-child1'>
                    <p>India Gaming Sector Timeline</p>
                          <div className='about-page2-child1-b'></div>
                          <div  className='about-page2-child1-a'>
                            <pre>2016 Entry of Jio leding to democratized internet access                         2020 Covid lockdown</pre>
                          </div>
                          <div  className='about-page2-child1-a'>
                                <div className='ab'> 2005-2011</div>
                                <div className='ab'>2012-2015</div>
                                <div className='ab'>2016-2019</div>
                                <div className='ab'>2019-2022</div>
                                <div className='ab'>2023 and Beyond</div>

                          </div>
                          <div className='about-page2-child1-a'>
                                <div className='ac'><p>Emergence of Digital Gaming</p></div>
                                <div className='ac'><p>Experimentation Phase</p></div>
                                <div className='ad'><p>Monetization phase</p></div>
                                <div className='ad'><p>Adoption & crystallization Phase</p></div>
                          </div>
                          <div className='about-page2-child1-c'>
                                <div className='about-page2-child1-c-a'>
                                    <p>Improved hardware allowed evolution of complex games like Bounce & Prince of Persia on mobile etc.</p>
                                      <br />
                                    <p>Pre-installed games like Snake were popular on mobile phones</p>
                                    <br />
                                    <p>PC and and consoles games were considered aspirational</p>
                                </div>
                                <div className='about-page2-child1-c-a'>
                                  <p>Early adoption of downloading games on phones , especially with popularity of Android started.</p><br />
                                  <p>PC and console games like Age of Empires, and FIFA were popular.</p>
                                </div>
                                <div className='about-page2-child1-c-b'>
                                    <div className='cb-a'>
                                          <div className='cb-aa'><h1>A</h1></div>
                                          <div className='cb-bb'><h4>Growth of free to play games</h4></div>
                                    </div>
                                    <div className='cb-a'>
                                          <div className='cb-aa a1'><h1>B</h1></div>
                                          <div className='cb-bb'><h4>Emergence of Real money games</h4></div>
                                    </div>
                                    <div className='cb-a'>
                                          <div className='cb-aa a2'><h1>C</h1></div>
                                          <div className='cb-bb'><h4>Growth of Social/Multiplayer games</h4></div>
                                    </div>
                                    <div className='cb-a'>
                                        <div className='cb-aa a3'><h1>D</h1></div>
                                        <div className='cb-bb'><h4>Onset of WEB 3 technologies </h4></div>
                                    </div>
                                        <div className='about-page2-child1-c-bb'>
                                              <div className='cb-b'><p>Access to affordable data encouraged gamers to explore, download and play more games on their mobile phone</p></div>
                                              <div className='cb-b'><p>COVID-19 lockdowns & social distancing encouraged the growth of users exploring social & multiplayer games including RMG</p></div>
                                        </div>
                                        
                                          
                                </div>
                                
                          </div>
                    </div>
                        <div className='about-page2-side'>
                              <div className='about-page2-side-a'><h1>Major Milestones</h1></div>
                              <div className='about-page2-side-b'><h1>Launch of Jio</h1><br /><p>led to growth in game downloads and online gaming. Also thrusted trustedIndia fron from and experimentation phase to a monetization of games phase</p></div>
                              <div className='about-page2-side-b'><h1>Emergence of Online RMG</h1><br /><p>Real Money Game (RMG) like Rummy, Fantasy Sports and Poker became popular, providing the viability of monetization models</p></div>
                              <div className='about-page2-side-b'><h1>Growth of Social Gaming</h1><br /><p>COVID led lockdowns encouraged a growth of Social/community gaming</p></div>
                              <div className='about-page2-side-b'><h1>Onset of Web3.0</h1><br /><p>Web 3.0 Technologies like Metaverse are revolutionizing the way internet is consumed. It aims at a more secure and decentralized internet with high immersive user experience</p></div>
                        </div>
              </div>
                  
          </div> 
          {/* 3rd about scroll screen */}
          <div className='about-page3'>
                <div className='about-page3-parent'>
                    <div className='about-page3-parent-child1'><h1>THE PROBLEM</h1><br /><p>Upgrading a PC to meet gaming standards can be a time-consuming and overwhelming process as users are required to conduct extensive research for various gaming tools, including price comparison and product reviews.
                    Users often have to visit various online and offline shops like e-malls, to find the best deals available in the market, even if it is located at a very distant location.
                    Many shopping websites do not provide real-time information about the product launch dates, making it difficult for the users to stay updated with the current trends.</p></div>
                    <div className='about-page3-parent-child2'></div>
                    <div className='about-page3-parent-child3'></div>
                    <div className='about-page3-parent-child4'><h1>THE SOLUTION</h1><br /><p>GigaNexus will be the one stop solution, for various potential users who want to enhance their user experience related to product based services with ease, thus providing hassle free purchase of the product. It will provide user with real time updates related to a specific product, regarding to its availability, launch dates, price notifications, future updates and upcoming releases under the palm of their hand.</p></div>
                </div>
          </div>
           {/* 4th about scroll screen */}
           <div className='about-page4'>
                      <div className='about-page4-parent'>
                            <div className='about-page4-child1'><h1>Business Goal</h1><br /><p>To tap into the potential of huge Indian market, which is still in the transition phase. Starting early will not only establish the brand value but also provide ample time to experiment in various fields due to lack of potential competitors, like user related services , which will eventually help in building the brand value. Thus attracting big tech giants to endorse their products on this platform, pooling huge investment opportunities to grow and thrive in the long run.</p></div>
                            <div className='about-page4-child2'><h1>User Goal</h1><br /><p>To get latest and best product deals in the market. To do away with long research process for a specific product, related to price and description. Avoid treading to far off places to purchase a certain item and avail hassle free door delivery services with easy return policy.</p></div>
                      </div>
                </div>

                  {/* 4th about scroll screen */}
                <div className='about-page5'>
                      <div className='about-page5-child'><h1>TARGET AUDIENCE</h1></div>
                      <div className='about-page5-child2'></div>
                      <div className='about-page5-child3'>
                              <div className='about-page5-child3-a'><h1>18-24 years old</h1><br /><p>This age group belong to college students. 59% of this age group are involved in gaming</p></div>
                              <div className='about-page5-child3-a'><h1>25-44 years old</h1><br /><p>This age group belong to working professionals. 31% of this age group involved in gaming</p></div>
                              <div className='about-page5-child3-a'><h1>45+ years old</h1><br /><p>10% of this age group constitute to gaming</p></div>
                      </div>
                </div>
    
    <Footer/>
    </>
    
  )
}

export default About
