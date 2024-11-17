import React from 'react';
import styled from 'styled-components';
import Header from './Header/Header';
import Hero from './Main/Hero/Hero';
import ExploreSection from './Main/ExploreSection/ExploreSection';
import FeaturedJobs from './Main/FeaturedJobsSection/FeaturedJobs';
import Topcompanies from './Main/TopCompanies/Topcompanies';
import Hotcategories from './Main/Hotcategories/Hotcategories';
import Globalconnections from './Main/Globalconnections/Globalconnections';
import Postjob from './Main/Postjob/Postjob';
import Customersay from './Main/Customersay/Customersay';
import Ourclient from './Main/Ourclient/Ourclient';
import News from './Main/News/News';
import Download from './Main/Download/Download';
import Rightjob from './Main/Rightjob/Rightjob';
import Footer from './Footer/Footer';

const TemplateStyled = styled.div``;

export default function Template() {
  return (
    <TemplateStyled>
        <header>
            <Header/>
        </header>

        <main>
          <section>
            <Hero/>
          </section>
          <section>
            <ExploreSection/>
          </section>
          <section>
            <FeaturedJobs/>
          </section>
          <section>
            <Topcompanies/>
          </section>
          <section>
            <Hotcategories/>
          </section>
          <section>
            <Globalconnections/>
          </section>
          <section>
            <Postjob/>
          </section>
          <section>
            <Customersay/>
          </section>
          <section>
            <Ourclient/>
          </section>
          <section>
            <News/>
          </section>
          <section>
            <Download/>
          </section>
          <section>
            <Rightjob/>
          </section>
        </main>

        <footer>
          <Footer/>
        </footer>
    </TemplateStyled>
  )
}
