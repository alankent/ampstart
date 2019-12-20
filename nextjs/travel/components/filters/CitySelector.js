import {
  AmpIncludeAmpList,
  AmpIncludeAmpBind,
} from '../amp/AmpIncludeCustomElement';
import AmpListProps from '../utils/AmpListProps';

export default function CitySelector(props) {
  return (
    <amp-list
      className="travel-block-list travel-city-selector"
      layout="flex-item"
      src={AmpListProps(false).src}
      data-amp-bind-src={AmpListProps(false).srcBind}>

      <AmpIncludeAmpList />
      <AmpIncludeAmpBind />

      <template type="amp-mustache">
        <amp-selector
          layout="container"
          name="city"
          multiple=""
          on="select: AMP.setState({display: {
                ui_reset: false,
                fields_city: display.fields_city.includes(event.targetOption)
                    ? copyAndSplice(display.fields_city, display.fields_city.indexOf(event.targetOption), 1)
                    : display.fields_city.concat([event.targetOption]),
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
