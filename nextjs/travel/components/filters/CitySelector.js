import {
  AmpIncludeAmpList,
  AmpIncludeAmpBind,
} from '../amp/AmpIncludeCustomElement';

export default function CitySelector(props) {
  return (
    <amp-list
      className="travel-block-list travel-city-selector"
      layout="flex-item"
      src="/api/search?maxPrice=800&query=&sort=popularity-desc"
      data-amp-bind-src="
        '/api/search?maxPrice=' + (display.query_maxPrice < 801 ? display.query_maxPrice : 0) +
        '&query=' + display.query_query +
        (display.query_city.length ? '&cities[]=' + display.query_city.join('&cities[]=') : '') +
        (display.query_type.length ? '&types[]=' + display.query_type.join('&types[]=') : '') +
        '&sort=' + display.query_sort">

      <AmpIncludeAmpList />
      <AmpIncludeAmpBind />

      <template type="amp-mustache">
        <amp-selector
          layout="container"
          name="city"
          multiple=""
          on="select: AMP.setState({display: {
                ui_reset: false,
                fields_city: fields_city.includes(event.targetOption)
                    ? copyAndSplice(fields_city, fields_city.indexOf(event.targetOption), 1)
                    : fields_city.concat([event.targetOption]),
                fields_city_edited: true
            }})"
          data-amp-bind-selected="display.fields_city">
          <ul className="list-reset">
            {`{{#stats.cities}}`}
            {`{{#isSelected}}`}
            <li option="{{name}}" selected="">
              {`{{/isSelected}}`}
              {`{{^isSelected}}`}
            </li>
            {/* This closing </li> is a hack */}
            <li option="{{name}}">
              {`{{/isSelected}}`}
              <span>
                <div className="travel-city-selector-img">
                  <amp-img
                    className="circle"
                    layout="flex-item"
                    src="/img/travel/city/{{img}}.jpg"
                  />
                </div>
                {`{{name}}`}
              </span>
            </li>
            {`{{/stats.cities}}`}
          </ul>
        </amp-selector>
      </template>
    </amp-list>
  );
}
