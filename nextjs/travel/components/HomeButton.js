import HomeIconSvg from './svg/HomeIconSvg';

export default function HomeButton(props) {
  return (
    <a
      href="/"
      className="travel-results-navbar-icon h2 circle my1 md-my2">
      <HomeIconSvg />
    </a>
  );
}
