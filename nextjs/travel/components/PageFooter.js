export default function PageFooter(props) {
  return (
    <footer className="travel-footer overflow-hidden">
      <div className="relative bg-black">

        {/* <!-- Angle --> */}
        <div className="travel-footer-angle-block absolute top-0 bottom-0 right-0 xs-hide sm-hide" />
        <div className="travel-footer-angle absolute xs-hide sm-hide" />
        {/* <!--/ Angle --> */}

        {/* <!-- Right Column --> */}
        <div className="travel-newsletter-signup">
          <header className="max-width-3 mx-auto px1 md-px2">
            <h4 className="travel-footer-right-column-heading travel-spacing-none h2 mb3 blue">
              Want travel deals
              <br />
              straight to your inbox?
            </h4>
            <div className="h4 bold mb1">Sign up to our newsletter</div>
          </header>
          <div className="relative">
            <div className="travel-footer-input-bg bg-black absolute right-0 left-0 md-hide lg-hide" />
            <div className="max-width-3 mx-auto px1 md-px2 relative">
              <div className="travel-input-group flex items-center col-12 rounded travel-shadow">
                <input
                  className="travel-input travel-input-big block col-12 flex-auto rounded-left"
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                />
                <span className="travel-input-group-sep travel-border-gray relative z1 block" />
                <button
                  type="button"
                  className="travel-link travel-input-big nowrap rounded-right">
                  Sign up now
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /Right Column --> */}

        {/* <!-- Left Column --> */}
        <div className="max-width-3 mx-auto px1 md-px2">
          <div className="flex pt3 md-pt4 col-12 md-col-6 pr3">
            <div className="col-2">
              <a
                href="/?amp=1"
                className="inline-block h2 line-height-1 circle white">
                <svg
                  className="travel-icon travel-icon-logo h2"
                  viewBox="0 0 100 100">
                  <g
                    fill="none"
                    fillRule="evenodd"
                    stroke="currentColor"
                    strokeWidth="7.5">
                    <circle cx="50" cy="50" r="45" />
                    <path d="M20.395 83.158c-2.37-10.263-.79-18.553 4.737-24.87 8.29-9.472 17.763-1.183 26.052-9.472 8.29-8.29 2.37-18.948 10.658-26.053 5.526-4.737 12.237-6.316 20.132-4.737M39.084 95c-2.788-10.2-1.912-17.304 2.627-21.316 6.808-6.017 14.956-.68 24.088-9.623 9.13-8.94 3.062-17.133 10.255-23.534 4.795-4.267 10.282-5.668 16.46-4.203" />
                  </g>
                </svg>{' '}
              </a>
            </div>
            <div className="col-5">
              <h4 className="travel-spacing-none mb2 h3 gray bold">Company</h4>
              <div className="line-height-4 mb4">
                <a href="#" className="travel-link block gray">
                  About
                </a>
                <a href="#" className="travel-link block gray">
                  Careers
                </a>
                <a href="#" className="travel-link block gray">
                  Contact
                </a>
              </div>
            </div>
            <div className="col-5">
              <h4 className="travel-spacing-none mb2 h3 gray bold">Discover</h4>
              <div className="line-height-4 mb4">
                <a href="#" className="travel-link block gray">
                  Activities
                </a>
                <a href="#" className="travel-link block gray">
                  Tours
                </a>
                <a href="#" className="travel-link block gray">
                  Experiences
                </a>
                <a href="#" className="travel-link block gray">
                  Featured Adventures
                </a>
                <a href="#" className="travel-link block gray">
                  Search
                </a>
              </div>
            </div>
          </div>
          <div className="py3 gray">&copy; Copyright 2017</div>
        </div>
        {/* <!-- /Left Column --> */}

      </div>
    </footer>
  );
}
