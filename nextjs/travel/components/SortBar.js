import {AmpIncludeAmpSelector} from '../components/amp/AmpIncludeCustomElement.js';

export default function SortPane(props) {
  return (
    <section className="travel-filter-bar md-hide lg-hide">
      <AmpIncludeAmpSelector />
      <div className="px1 md-px2">
        <amp-selector
          className="travel-row-selector px1 mxn1 md-px2 md-mxn2"
          layout="container"
          name="sort"
          on="
            select:AMP.setState({display: {
              query_sort: event.targetOption,
              fields_sort: event.targetOption
            }})
          "
          data-amp-bind-selected="display.fields_sort">
          <ul className="list-reset">
            <li className="bold" option="popularity-desc" selected="">
              Popular
            </li>
            <li className="bold" option="rating-desc">
              Best Rated
            </li>
            <li className="bold" option="age-asc">
              New
            </li>
            <li className="bold" option="price-asc">
              Lowest Price
            </li>
          </ul>
        </amp-selector>
      </div>
    </section>
  );
}
