import HomeButton from '../components/HomeButton.js';

export default function ResultsNavBar(props) {
  return (
    <header className="travel-results-navbar pt4 pr4 pl4">
      <div className="px1 md-px2 flex justify-between items-stretch">
        <div className="flex items-stretch">
          <HomeButton />
          <div className="ml3 flex items-center xs-hide sm-hide">
            <amp-list
              className="travel-block-list flex items-center"
              layout="flex-item"
              noloading=""
              src="/api/search?maxPrice=800&query=&sort=popularity-desc"
              data-amp-bind-src="
                      '/api/search?maxPrice=' + (query_maxPrice < 801 ? query_maxPrice : 0) +
                      '&query=' + query_query +
                      (query_city.length ? '&cities[]=' + query_city.join('&cities[]=') : '') +
                      (query_type.length ? '&types[]=' + query_type.join('&types[]=') : '') +
                      '&sort=' + query_sort">
              <template type="amp-mustache">
                <div className="flex items-center">
                  <label className="travel-input-icon relative">
                    <input
                      className="travel-input travel-input-dark rounded"
                      type="text"
                      name="query"
                      placeholder="Location"
                      on="
                      change:
                        AMP.setState({fields_query: event.value}),
                        AMP.setState({query_query: event.value})"
                      defaultValue="{{stats.location}}"
                    />
                    <span className="travel-icon travel-img-icon-map-pin-transparent" />
                  </label>
                  <label className="travel-date-input travel-input-dark travel-date-input-touched bold relative rounded ml2">
                    <input
                      className="block relative p0 z1"
                      type="date"
                      placeholder="yyyy-mm-dd"
                      pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                      title="yyyy-mm-dd"
                      name="departure"
                      defaultValue="{{stats.startDate.raw}}"
                    />
                    <span className="travel-icon travel-img-icon-plane-taking-off-transparent" />
                    <div className="travel-date-input-label">Departure</div>
                  </label>
                  <label className="travel-date-input travel-input-dark travel-date-input-touched bold relative rounded ml2">
                    <input
                      className="block relative p0 z1"
                      type="date"
                      placeholder="yyyy-mm-dd"
                      pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                      title="yyyy-mm-dd"
                      name="return"
                      defaultValue="{{stats.endDate.raw}}"
                    />
                    <span className="travel-icon travel-img-icon-plane-landing-transparent" />
                    <div className="travel-date-input-label">Return</div>
                  </label>
                </div>
              </template>
            </amp-list>
          </div>
        </div>
        <div className="flex flex-auto items-center md-hide lg-hide">
          <amp-list
            className="travel-block-list flex flex-auto center"
            layout="flex-item"
            noloading=""
            src="/api/search?maxPrice=800&query=&sort=popularity-desc"
            data-amp-bind-src="
                    '/api/search?maxPrice=' + (query_maxPrice < 801 ? query_maxPrice : 0) +
                    '&query=' + query_query +
                    (query_city.length ? '&cities[]=' + query_city.join('&cities[]=') : '') +
                    (query_type.length ? '&types[]=' + query_type.join('&types[]=') : '') +
                    '&sort=' + query_sort">
            <template type="amp-mustache">
              <div className="h3 line-height-2 bold">
                {`{{stats.resultCount}}`} Results
              </div>
              <div className="travel-results-navbar-subheading h6 caps line-height-4">
                {`{{stats.location}}`}
                {`{{#stats.startDate}}`}
                {`{{#stats.endDate}}`}
                &bull;
                {`{{stats.startDate.formatted}}`}-
                {`{{stats.endDate.formatted}}`}
                {`{{/stats.endDate}}`}
                {`{{/stats.startDate}}`}
              </div>
            </template>
          </amp-list>
        </div>
        <div
          className="travel-results-navbar-icon h3 my1 md-my2 md-hide lg-hide"
          role="button"
          tabIndex="0"
          on="tap:AMP.setState({ui_filterPane: !ui_filterPane, ui_sortPane: false})">
          <svg className="travel-icon" viewBox="0 0 100 100">
            <g fill="currentColor">
              <path d="M77 74v18.312C77 94.35 78.79 96 81 96s4-1.65 4-3.688V74h-8zm0-37V6.778C77 4.69 78.79 3 81 3s4 1.69 4 3.778V37h-8zM47 52v41.24c0 2.076 1.79 3.76 4 3.76s4-1.684 4-3.76V52h-8zm0-38V6.667C47 4.642 48.79 3 51 3s4 1.642 4 3.667V14h-8zM16 86v7.29c0 2.05 1.79 3.71 4 3.71s4-1.66 4-3.71V86h-8zm0-38V6.75C16 4.68 17.79 3 20 3s4 1.68 4 3.75V48h-8z" />
              <circle cx="20.5" cy="67.5" r="11.5" />
              <circle cx="50.5" cy="33.5" r="11.5" />
              <circle cx="80.5" cy="55.5" r="11.5" />
            </g>
          </svg>
        </div>
      </div>
    </header>
  );
}
