import React, { useState } from "react";


import "./Home.css";

export default function Home() {


  const [FormData, setFormData] = useState({
    name: "",
    people: "",
    datetime: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

 const handleSubmit = (e) => {
   e.preventDefault();
  
   alert("errer");
   setFormData({
     name: "",
     people: "",
     datetime: "",
     message: "",
   });
 };

  return (
    <>
      <header className="header-section" id="home">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-12">
              <img
                src="/images/hamburger.jpg"
                alt="Hamburger"
                className="img-fluid "
              />
            </div>
          </div>
        </div>
      </header>

      <section className="about-section py-5" id="about">
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

      <section className="menu-section  w-100 h-100" id="menu">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6  ">
              <h2 className="section-title text-center mb-5 fw-light">
                Our Menu
              </h2>
              <div className="menu-items">
                <div className="menu-item">
                  <h5 className="item-title">Bread Basket</h5>
                  <p className="text-secondary">
                    Assortment of fresh baked fruit breads and muffins 5.50
                  </p>
                </div>
                <div className="menu-item">
                  <h5 className="item-title">
                    Honey Almond Granola with Fruits
                  </h5>
                  <p className="text-secondary">
                    Natural cereal of honey toasted oats, raisins, almonds and
                    dates 7.00
                  </p>
                </div>
                <div className="menu-item">
                  <h5 className="item-title">Belgian Waffle</h5>
                  <p className="text-secondary">
                    Vanilla flavored batter with malted flour 7.50
                  </p>
                </div>
                <div className="menu-item">
                  <h5 className="item-title">Scrambled eggs</h5>
                  <p className="text-secondary">
                    Scrambled eggs, roasted red pepper and garlic, with green
                    onions 7.50
                  </p>
                </div>
                <div className="menu-item ">
                  <h5 className="item-title ">Blueberry Pancakes</h5>
                  <p className="text-secondary">
                    With syrup, butter and lots of berries 8.50
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="images/tablesetting.jpg"
                alt="tablesetting2"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
      <hr className="divider my-5" />
      <section className="contact" id="contact">
        <div className="w-100 vh-100 ">
          <div className="container-fluid  text-left ">
            <h4>Contact</h4>
            <p>
              We offer full-service catering for any event, large or small. We
              understand your needs and we will cater the food to satisfy the
              biggerst criteria of them all, both look and taste. Do not
              hesitate to contact us.
            </p>
            <p className="catering">
              Catering Service, 42nd Living St, 43043 New York, NY
            </p>
            <p>
              You can also contact us by phone 00553123-2323 or email
              catering@catering.com, or you can send us a message here
            </p>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                id="inputPassword5"
                className="form-control mb-3"
                aria-describedby="passwordHelpBlock"
                placeholder="Name"
                value={FormData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="number"
                name="people"
                id="inputPassword5"
                className="form-control mb-3"
                aria-describedby="passwordHelpBlock"
                placeholder="How many people"
                value={FormData.people}
                onChange={handleInputChange}
                required
              />
              <input
                type="datetime-local"
                id="inputPassword5"
                name="datetime"
                className="form-control mb-3"
                aria-describedby="passwordHelpBlock"
                placeholder="Date and time"
                value={FormData.datetime}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                id="inputPassword5"
                name="message"
                className="form-control mb-3"
                aria-describedby="passwordHelpBlock"
                placeholder="Message \ Special requirements"
                value={FormData.message}
                onChange={handleInputChange}
                required
              />

              <button type="submit" className="send mb-3">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>
      <footer className="footer">
        <p className="text-center p-5">
          Powered by
          <a
            href="https://www.w3schools.com/w3css/default.asp"
            className="text-dark"
          >
            {" "}
            w3.css
          </a>
        </p>
      </footer>
    </>
  );
}
