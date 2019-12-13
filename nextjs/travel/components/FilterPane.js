import {
  AmpIncludeAmpList,
  AmpIncludeAmpBind,
} from '../components/amp/AmpIncludeCustomElement';
import {AmpIncludeAmpMustache} from '../components/amp/AmpIncludeCustomTemplate';
import FiltersCitySelector from '../components/FiltersCitySelector';
import TravelInputRangeSvg from '../components/svg/TravelInputRangeSvg';
import ActiveSvg from '../components/svg/ActiveSvg';
import ArtisticSvg from '../components/svg/ArtisticSvg';
import DrinksSvg from '../components/svg/DrinksSvg';
import FashionSvg from '../components/svg/FashionSvg';
import FoodSvg from '../components/svg/FoodSvg';
import MusicSvg from '../components/svg/MusicSvg';
import NatureSvg from '../components/svg/NatureSvg';
import NightlifeSvg from '../components/svg/NightlifeSvg';
import ToursSvg from '../components/svg/ToursSvg';
import WaterSvg from '../components/svg/WaterSvg';

export default function FilterPane(props) {
  return (
    <div
      className="travel-pane"
      data-amp-bind-class="'travel-pane' + (display.ui_filterPane ? ' travel-pane-visible' : '')">
      <AmpIncludeAmpBind />
      <AmpIncludeAmpList />
      <AmpIncludeAmpMustache />
      <div className="travel-pane-overflow absolute overflow-hidden left-0 right-0 pb2">
        <div className="travel-pane-content travel-shadow travel-border-gray border-bottom">
          <div className="max-width-3 mx-auto px1 md-px2 py1">
            {/* <!-- Filters --> */}
            <div
              className="travel-filters clearfix mxn2"
              data-amp-bind-class="'travel-filters clearfix mxn2' + (display.ui_reset ? ' travel-filters-reset' : '')">
              <div className="col col-12 md-col-4 px2 py1">
                <div className="travel-filters-text h5 mb1 caps">max price</div>

                {/* <!-- Price Selector --> */}
                <div
                  className="h1"
                  data-amp-bind-text="display.fields_maxPrice_live < 801 ? '$' + round(display.fields_maxPrice_live) : '$800+'">
                  $800+
                </div>
                {/* <!--
                  This should be rendered with path data from the api but rendering SVG with
                  amp-mustache is currently blocked.
                  see: https://github.com/ampproject/amphtml/issues/8214
                --> */}
                <TravelInputRangeSvg />
                <div className="mb1 pb2">
                  <input
                    type="range"
                    className="travel-input-range col-12"
                    name="maxPrice"
                    step="1"
                    min="1"
                    max="801"
                    defaultValue="801"
                    data-amp-bind-value="'' + display.fields_maxPrice"
                    on="
                      change:AMP.setState({display: {
                        ui_reset: false,
                        fields_maxPrice: event.value,
                        fields_maxPrice_live: event.value,
                        fields_maxPrice_edited: event.value != query_maxPrice
                      }});
                      input-debounced:AMP.setState({display: {
                        fields_maxPrice_live: event.value
                      }});
                    "
                  />
                </div>
                {/* <!--/ Price Selector --> */}
                <div className="travel-filters-text h3 line-height-3">
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
                      Average Price for activites in {`{{stats.location}}`}
                      is between ${`{{stats.price.average.min}}`} and $
                      {`{{stats.price.average.max}}`}.
                    </template>
                  </amp-list>
                </div>
              </div>
              <div className="col col-12 md-col-5 px2 py1">
                <div className="travel-filters-text h5 mb2 caps">type</div>

                {/* <!-- Type Selector --> */}
                <amp-selector
                  className="travel-type-selector clearfix"
                  layout="container"
                  name="type"
                  multiple=""
                  on="
                    select:AMP.setState({display: {
                      ui_reset: false,
                      fields_type: fields_type.includes(event.targetOption)
                        ? copyAndSplice(fields_type, fields_type.indexOf(event.targetOption), 1)
                        : fields_type.concat([event.targetOption]),
                      fields_type_edited: true
                    }})
                  "
                  data-amp-bind-selected="display.fields_type">
                  <ul className="list-reset">
                    {[
                      {
                        option: 'active',
                        icon: <ActiveSvg />,
                        title: 'Active',
                        cls: 'col col-6 travel-type-active',
                      },
                      {
                        option: 'artistic',
                        icon: <ArtisticSvg />,
                        title: 'Artistic',
                        cls: 'col col-6 travel-type-artistic',
                      },
                      {
                        option: 'drinks',
                        icon: <DrinksSvg />,
                        title: 'Drinks',
                        cls: 'col col-6 travel-type-drinks',
                      },
                      {
                        option: 'fashion',
                        icon: <FashionSvg />,
                        title: 'Fashion',
                        cls: 'col col-6 travel-type-fashion',
                      },
                      {
                        option: 'food',
                        icon: <FoodSvg />,
                        title: 'Food',
                        cls: 'col col-6 travel-type-food',
                      },
                      {
                        option: 'music',
                        icon: <MusicSvg />,
                        title: 'Music',
                        cls: 'col col-6 travel-type-music',
                      },
                      {
                        option: 'nature',
                        icon: <NatureSvg />,
                        title: 'Nature',
                        cls: 'col col-6 travel-type-nature',
                      },
                      {
                        option: 'nightlife',
                        icon: <NightlifeSvg />,
                        title: 'Nightlife',
                        cls: 'col col-6 travel-type-nightlife',
                      },
                      {
                        option: 'tours',
                        icon: <ToursSvg />,
                        title: 'Tours',
                        cls: 'col col-6 travel-type-tours',
                      },
                      {
                        option: 'water',
                        icon: <WaterSvg />,
                        title: 'Water',
                        cls: 'col col-6 travel-type-water',
                      },
                    ].map(b => (
                      <li option={b.option} className={b.cls}>
                        <div className="travel-type-selector-inactive flex relative items-center justify-between nowrap">
                          <span className="travel-type-selector-content nowrap">
                            {b.icon}
                            {b.title}
                          </span>
                        </div>
                        <div className="travel-type-selector-active flex items-center justify-between nowrap absolute top-0 bottom-0 left-0 right-0">
                          <span className="travel-type-selector-content nowrap">
                            {b.icon}
                            {b.title}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </amp-selector>
                {/* <!--/ Type Selector --> */}
              </div>
              <div className="col col-12 md-col-3 px2 py1">
                <div className="travel-filters-text h5 mb2 caps">city</div>

                <FiltersCitySelector />

              </div>
            </div>
            {/* <!--/ Filters --> */}
          </div>
          <div className="travel-border-gray mx1 md-mx2 border-top" />
          <div className="max-width-3 mx-auto px1 md-px2 py1 center">
            <button
              className="travel-filters-reset-btn ampstart-btn rounded bold"
              on="
                tap:AMP.setState({display: {
                    ui_reset: true,
                    query_maxPrice: fields_maxPrice_initial,
                    fields_maxPrice: fields_maxPrice_initial,
                    fields_maxPrice_live: fields_maxPrice_initial,
                    fields_maxPrice_edited: false,
                    query_city: fields_city_initial,
                    fields_city: fields_city_initial,
                    fields_city_edited: false,
                    query_type: fields_type_initial,
                    fields_type: fields_type_initial,
                    fields_type_edited: false,
                }})
              ">
              Reset Filters
            </button>
            <button
              className="travel-filters-apply-btn ampstart-btn rounded bold"
              disabled=""
              data-amp-bind-disabled="!display.fields_maxPrice_edited && !display.fields_city_edited && !display.fields_type_edited && !display.ui_reset"
              on="
                tap:AMP.setState({display: {
                    ui_reset: false,
                    ui_filterPane: false,
                    query_query: fields_query,
                    fields_query_edited: false,
                    query_departure: fields_departure,
                    fields_departure_edited: false,
                    query_return: fields_return,
                    fields_return_edited: false,
                    query_maxPrice: fields_maxPrice,
                    fields_maxPrice_edited: false,
                    query_city: fields_city,
                    fields_city_edited: false,
                    query_type: fields_type,
                    fields_type_edited: false,
                    query_sort: fields_sort,
                    fields_sort_edited: false,
                }})
              ">
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
