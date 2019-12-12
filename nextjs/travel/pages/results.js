/*
Copyright 2017 The AMP Start Authors. All Rights Reserved.

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
import { AmpIncludeAmpBind, } from '../components/amp/AmpIncludeCustomElement';
import AmpState from '../components/amp/AmpState';
import LikeButton from '../components/LikeButton';
import HomeButton from '../components/HomeButton';
import ActivityInfo from '../components/ActivityInfo';
import ResultsNavBar from '../components/ResultsNavBar';
import Results from '../components/Results';
import FilterBar from '../components/FilterBar';
import FilterPane from '../components/FilterPane';
import SortBar from '../components/SortBar';

export default () => (
  <>
    <Head>
      <title>Travel Template</title>
      <link
        rel="canonical"
        href="https://www.ampstart.com/templates/travel/travel-results.amp"
      />
      <meta name="amp-google-client-id-api" content="googleanalytics" />
      <link
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700"
        rel="stylesheet"
      />
      <link rel="stylesheet" type="text/css" href="/css/travel-results.css" />
    </Head>

    <AmpIncludeAmpBind />

    {/* This div makes it easier to collapse in document outline tools. */}
    <div>
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

    <div role="main">
      <div
        className="travel-overlay-fx-scale"
        data-amp-bind-class="'travel-overlay-fx-scale' + (ui_filterPane ? ' travel-overlay-fx-scale-active' : '')">
        <div
          className="travel-no-focus"
          role="button"
          tabIndex="-1"
          on="tap:AMP.setState({ui_filterPane: false, ui_reset: false, ui_sortPane: false})">
          <ResultsNavBar />
        </div>

        <FilterBar />
        <FilterPane />
        <SortBar />

        <div
          className="travel-no-focus flex-auto overflow-auto"
          role="button"
          tabIndex="-1"
          on="tap:AMP.setState({ui_filterPane: false, ui_reset: false, ui_sortPane: false})">
          <Results />
        </div>
      </div>
    </div>
  </>
);
