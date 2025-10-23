import React from "react";

export default function Home() {
  return (
    <>
      <header className="header-section">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-12">
              <img
                src="/images/hamburger.jpg"
                alt="Hamburger"
                className="img-fluid w-100 header-image"
              />
            </div>
          </div>
        </div>
      </header>

      <section className="about-section py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="about-image-wrapper">
                <img
                  src="/images/tablesetting2.jpg"
                  alt="Table Setting"
                  className="img-fluid rounded shadow about-image"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-12">
              <div className="about-content text-center text-md-start">
                <h2 className="section-title mb-3">About Catering</h2>
                <p className="subtitle text-muted mb-4">Tradition since 1889</p>
                <p className="description mb-3">
                  The Catering was founded in blabla by Mr. Smith in lorem ipsum
                  dolor sit amet, consectetur adipiscing elit consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>
                <p className="text-muted mb-3">
                  We only use <span className="seasonal-badge">seasonal</span>{" "}
                  ingredients.
                </p>
                <p className="text-secondary">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum consectetur
                  adipiscing elit, sed do eiusmod temporincididunt ut labore et
                  dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider my-5" />

      <section className="menu-section py-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 col-12">
              <h2 className="section-title text-center mb-5">Our Menu</h2>

              <div className="menu-items ">
                <div className="menu-item mb-4 py-3">
                  <h5 className="item-title">Bread Basket</h5>
                  <p className="item-description text-muted">
                    Assortment of fresh baked fruit breads and muffins 5.50
                  </p>
                </div>

                <div className="menu-item mb-4 py-3">
                  <h5 className="item-title">
                    Honey Almond Granola with Fruits
                  </h5>
                  <p className="item-description text-muted py-3">
                    Natural cereal of honey toasted oats, raisins, almonds and
                    dates 7.00
                  </p>
                </div>

                <div className="menu-item mb-4 py-3">
                  <h5 className="item-title">Belgian Waffle</h5>
                  <p className="item-description text-muted">
                    Vanilla flavored batter with malted flour 7.50
                  </p>
                </div>

                <div className="menu-item mb-4 py-3">
                  <h5 className="item-title">Scrambled eggs</h5>
                  <p className="item-description text-muted">
                    Scrambled eggs, roasted red pepper and garlic, with green
                    onions 7.50
                  </p>
                </div>

                <div className="menu-item mb-4 py-3">
                  <h5 className="item-title">Blueberry Pancakes</h5>
                  <p className="item-description text-muted">
                    With syrup, butter and lots of berries 8.50
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
