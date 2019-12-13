export default function AmpListProps(includeDates) {
  return {
    src:
      '/api/search?maxPrice=800' +
      (includeDates ? 'departure=&return=' : '') +
      '&query=&sort=popularity-desc',
    srcBind:
      "'/api/search?maxPrice=' + (query_maxPrice < 801 ? query_maxPrice : 0) + " +
      (includeDates ? "'&departure=' + query_departure +" : '') +
      (includeDates ? "'&return=' + query_return +" : '') +
      "'&query=' + query_query +" +
      "(query_city.length ? '&cities[]=' + query_city.join('&cities[]=') : '') +" +
      "(query_type.length ? '&types[]=' + query_type.join('&types[]=') : '') +" +
      "'&sort=' + query_sort",
  };
}
