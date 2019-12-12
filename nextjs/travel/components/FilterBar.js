import {AmpIncludeAmpList, AmpIncludeAmpBind} from '../components/amp/AmpIncludeCustomElement';
import {AmpIncludeAmpMustache} from '../components/amp/AmpIncludeCustomTemplate';
import AmpState from '../components/amp/AmpState';
import script from '../components/amp/JsonScript';
import SortPane from '../components/SortPane';

export default function FilterBar(props) {
  return (
    <section className="travel-filter-bar sm-hide xs-hide relative z2">
      <AmpIncludeAmpBind />
      <AmpIncludeAmpList />
      <AmpIncludeAmpMustache />
      <div className="flex mxn2 px1 md-px2">
        <div
          className="travel-no-focus flex flex-auto overflow-hidden"
          role="button"
          tabIndex="0"
          on="tap:AMP.setState({display: {ui_filterPane: !ui_filterPane, ui_sortPane: false}})">
          <div className="pl2 pr1 py2 nowrap border-bottom travel-border-gray flex-none">
            <span className="bold">Filters</span>
            <span
              className="travel-flip travel-filters-text inline-block"
              data-amp-bind-class="'travel-flip travel-filters-text inline-block' + (display.ui_filterPane ? ' travel-flip-flipped' : '')">
              <svg className="travel-icon" viewBox="0 0 66 100">
                <path
                  fill="currentColor"
                  d="M33.5 56.172l-18.96-18.1c-1.497-1.43-3.922-1.43-5.418 0a3.539 3.539 0 0 0 0 5.17l21.67 20.687a3.914 3.914 0 0 0 2.708 1.07c.98 0 1.96-.357 2.71-1.07l21.668-20.687a3.541 3.541 0 0 0 0-5.172c-1.496-1.427-3.92-1.427-5.417 0L33.5 56.173z"
                />
              </svg>
            </span>
          </div>

          <div className="pl1 py2 nowrap border-bottom travel-border-gray flex-none">
            <span className="travel-filters-text">Price</span>
          </div>

          <div className="pr1 py2 nowrap border-bottom travel-border-gray">
            <span
              className="travel-badge"
              data-amp-bind-class="display.query_maxPrice < 801 ? 'travel-badge green' : 'travel-badge'"
              data-amp-bind-text="display.query_maxPrice < 801 ? 'Up to $ ' + round(display.query_maxPrice) : 'Any price'">
              Any price
            </span>
          </div>

          <div className="pl1 py2 nowrap border-bottom travel-border-gray flex-none">
            <span className="travel-filters-text">Type</span>
          </div>

          <div className="border-bottom travel-border-gray">
            <div className="travel-fade-right pr1 py2">
              <span
                className="travel-badge"
                data-amp-bind-class="'travel-badge' + (display.query_type.length > 0 && display.query_type.length < 10 ? ' hide' : '')">
                All types
              </span>

              <span
                className="travel-badge green hide"
                data-amp-bind-class="'travel-badge green' + (display.query_type.includes('active') ? '' : ' hide')">
                Active
              </span>
              <span
                className="travel-badge green hide"
                data-amp-bind-class="'travel-badge green' + (display.query_type.includes('artistic') ? '' : ' hide')">
                Artistic
              </span>
              <span
                className="travel-badge green hide"
                data-amp-bind-class="'travel-badge green' + (display.query_type.includes('drinks') ? '' : ' hide')">
                Drinks
              </span>
              <span
                className="travel-badge green hide"
                data-amp-bind-class="'travel-badge green' + (display.query_type.includes('fashion') ? '' : ' hide')">
                Fashion
              </span>
              <span
                className="travel-badge green hide"
                data-amp-bind-class="'travel-badge green' + (display.query_type.includes('food') ? '' : ' hide')">
                Food
              </span>
              <span
                className="travel-badge green hide"
                data-amp-bind-class="'travel-badge green' + (display.query_type.includes('music') ? '' : ' hide')">
                Music
              </span>
              <span
                className="travel-badge green hide"
                data-amp-bind-class="'travel-badge green' + (display.query_type.includes('nature') ? '' : ' hide')">
                Nature
              </span>
              <span
                className="travel-badge green hide"
                data-amp-bind-class="'travel-badge green' + (display.query_type.includes('nightlife') ? '' : ' hide')">
                Nightlife
              </span>
              <span
                className="travel-badge green hide"
                data-amp-bind-class="'travel-badge green' + (display.query_type.includes('tours') ? '' : ' hide')">
                Tours
              </span>
              <span
                className="travel-badge green hide"
                data-amp-bind-class="'travel-badge green' + (display.query_type.includes('water') ? '' : ' hide')">
                Water
              </span>
            </div>
          </div>

          <div className="pl1 py2 nowrap border-bottom travel-border-gray flex-none">
            <span className="travel-filters-text">City</span>
          </div>

          <div className="flex-auto border-bottom travel-border-gray">
            <div className="travel-fade-right pr1 py2">
              <amp-list
                className="travel-inline-list"
                layout="flex-item"
                src="/api/search?maxPrice=800&query=&sort=popularity-desc"
                data-amp-bind-src="
                      '/api/search?maxPrice=' + (display.query_maxPrice < 801 ? display.query_maxPrice : 0) +
                      '&query=' + display.query_query +
                      (display.query_city.length ? '&cities[]=' + display.query_city.join('&cities[]=') : '') +
                      (display.query_type.length ? '&types[]=' + display.query_type.join('&types[]=') : '') +
                      '&sort=' + display.query_sort">
                <template type="amp-mustache">
                  {`{{#stats.allCities}}`}
                  <span className="travel-badge">All cities</span>
                  {`{{/stats.allCities}}`}
                  {`{{^stats.allCities}}`}
                  {`{{#stats.cities}}`}
                  {`{{#isSelected}}`}
                  <span className="travel-badge green">{`{{name}}`}</span>
                  {`{{/isSelected}}`}
                  {`{{/stats.cities}}`}
                  {`{{/stats.allCities}}`}
                </template>
              </amp-list>
            </div>
          </div>

          <div className="travel-border-gray px1 md-pr2 py2 nowrap border-bottom flex-none">
            <amp-list
              className="travel-inline-list"
              layout="flex-item"
              src="/api/search?maxPrice=800&query=&sort=popularity-desc"
              data-amp-bind-src="
  '/api/search?maxPrice=' + (display.query_maxPrice < 801 ? display.query_maxPrice : 0) +
  '&query=' + display.query_query +
  (display.query_city.length ? '&cities[]=' + display.query_city.join('&cities[]=') : '') +
  (display.query_type.length ? '&types[]=' + display.query_type.join('&types[]=') : '') +
  '&sort=' + display.query_sort
">
              <template type="amp-mustache">
                <span className="travel-filters-results-text">
                  {`{{stats.resultCount}}`}
                  <span className="sm-hide xs-hide md-hide">
                    Tours & Activities Found
                  </span>
                  <span className="lg-hide">Results</span>
                </span>
              </template>
            </amp-list>
          </div>
        </div>

        <div className="flex-none">
          <div
            className="travel-no-focus travel-border-gray pl1 pr2 py2 md-pl2 nowrap border-left border-bottom relative z2"
            role="button"
            tabIndex="0"
            on="tap:AMP.setState({display: {ui_filterPane: false, ui_reset: false, ui_sortPane: !ui_sortPane}})">
            <span className="travel-filters-text">Sort by </span>
            <div className="inline-block">
              {/* <!--
            Render an invisible set of labels to force the element to always be
            the width of the widest label.
          --> */}
              <div aria-hidden="" className="travel-filter-bar-collapse bold">
                Popular
              </div>
              <div aria-hidden="" className="travel-filter-bar-collapse bold">
                Best Rated
              </div>
              <div aria-hidden="" className="travel-filter-bar-collapse bold">
                New
              </div>
              <div aria-hidden="" className="travel-filter-bar-collapse bold">
                Lowest Price
              </div>

              <span className="bold">
                <span data-amp-bind-class="display.fields_sort == 'popularity-desc' ? '' : 'hide'">
                  Popular
                </span>
                <span
                  className="hide"
                  data-amp-bind-class="display.fields_sort == 'rating-desc' ? '' : 'hide'">
                  Best Rated
                </span>
                <span
                  className="hide"
                  data-amp-bind-class="display.fields_sort == 'age-asc' ? '' : 'hide'">
                  New
                </span>
                <span
                  className="hide"
                  data-amp-bind-class="display.fields_sort == 'price-asc' ? '' : 'hide'">
                  Lowest Price
                </span>
              </span>
            </div>
            <span
              className="travel-flip travel-filters-text inline-block"
              data-amp-bind-class="'travel-flip travel-filters-text inline-block ' + (display.ui_sortPane ? ' travel-flip-flipped' : '')">
              <svg className="travel-icon" viewBox="0 0 66 100">
                <path
                  fill="currentColor"
                  d="M33.5 56.172l-18.96-18.1c-1.497-1.43-3.922-1.43-5.418 0a3.539 3.539 0 0 0 0 5.17l21.67 20.687a3.914 3.914 0 0 0 2.708 1.07c.98 0 1.96-.357 2.71-1.07l21.668-20.687a3.541 3.541 0 0 0 0-5.172c-1.496-1.427-3.92-1.427-5.417 0L33.5 56.173z"
                />
              </svg>
            </span>
          </div>
          <SortPane />
        </div>
      </div>
    </section>
  );
}
