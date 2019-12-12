/*
Copyright 2019 The AMP Start Authors. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS-IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

export const config = {amp: true};

import Head from 'next/head';
import AmpState from '../components/amp/AmpState';
import TravelHero from '../components/TravelHero';
import DiscoverSection from '../components/DiscoverSection';
import HomeButton from '../components/HomeButton';
import AnglesArtwork from '../components/AnglesArtwork';
import ActivitiesPanel from '../components/ActivitiesPanel';
import PopularPanel from '../components/PopularPanel';
import FeaturedPanel from '../components/FeaturedPanel';
import SearchPanel from '../components/SearchPanel';
import DiscoverMobilePanel from '../components/DiscoverMobilePanel';
import PageFooter from '../components/PageFooter';

export default function Index(props) {
  return (
    <>
      <Head>
        <title>Travel Template</title>
        <meta name="amp-google-client-id-api" content="googleanalytics" />
        <link
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700"
          rel="stylesheet"
        />
        {/* TODO: This CSS file reference needs to be removed */}
        <link rel="stylesheet" type="text/css" href="/css/travel.css" />{' '}
      </Head>

      {/* Put in a div so can collapse these easily in developer tools */}
      <div>
        <AmpState id="ui_hero">{true}</AmpState>
        <AmpState id="ui_reset">{false}</AmpState>
        <AmpState id="ui_filterPane">{false}</AmpState>
        <AmpState id="ui_sortPane">{false}</AmpState>

        <AmpState id="fields_query">{''}</AmpState>
        <AmpState id="fields_query_initial">{''}</AmpState>
        <AmpState id="fields_query_live">{''}</AmpState>
        <AmpState id="fields_query_edited">{false}</AmpState>
        <AmpState id="query_query">{''}</AmpState>

        <AmpState id="fields_departure">{''}</AmpState>
        <AmpState id="fields_departure_initial">{''}</AmpState>
        <AmpState id="fields_departure_edited">{false}</AmpState>
        <AmpState id="query_departure">{''}</AmpState>

        <AmpState id="fields_return">{''}</AmpState>
        <AmpState id="fields_return_initial">{''}</AmpState>
        <AmpState id="fields_return_edited">{false}</AmpState>
        <AmpState id="query_return">{''}</AmpState>

        <AmpState id="fields_type">{[]}</AmpState>
        <AmpState id="fields_type_initial">{[]}</AmpState>
        <AmpState id="fields_type_edited">{false}</AmpState>
        <AmpState id="query_type">{[]}</AmpState>

        <AmpState id="fields_city">{[]}</AmpState>
        <AmpState id="fields_city_initial">{[]}</AmpState>
        <AmpState id="fields_city_edited">{false}</AmpState>
        <AmpState id="query_city">{[]}</AmpState>

        <AmpState id="fields_sort">{'popularity-desc'}</AmpState>
        <AmpState id="fields_sort_initial">{'popularity-desc'}</AmpState>
        <AmpState id="fields_sort_edited">{false}</AmpState>
        <AmpState id="query_sort">{'popularity-desc'}</AmpState>

        <AmpState id="fields_maxPrice">{801}</AmpState>
        <AmpState id="fields_maxPrice_initial">{801}</AmpState>
        <AmpState id="fields_maxPrice_live">{801}</AmpState>
        <AmpState id="fields_maxPrice_edited">{false}</AmpState>
        <AmpState id="query_maxPrice">{801}</AmpState>
      </div>

      <section className="travel-main-wrapper overflow-hidden" role="main">
        <section className="relative z2">
          <header className="travel-header absolute top-0 right-0 left-0">
            <div className="px1 md-px2 py1 md-py2 flex justify-between items-center">
              <HomeButton />
            </div>
          </header>
        </section>

        <TravelHero />

        <div
          id="travel-landing-content"
          className="travel-landing-content relative">
          <AnglesArtwork />
          <DiscoverSection />
          <ActivitiesPanel />

          <div className="travel-footer-wrapper">
            <PopularPanel />
            <FeaturedPanel />
            <SearchPanel />
            <DiscoverMobilePanel />
            <PageFooter />
          </div>
        </div>
      </section>
    </>
  );
}
