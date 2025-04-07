import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const BookingWrapper = styled.div`
  background-color: #ffffff;
  color: #000000;

  h1, h2, h3, h4, h5, h6, p, label {
    color: #000000;
  }

  .hero-header {
    background-color: #007bff;
    color: #ffffff;

    .display-3 {
      color: #ffffff;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }

    .breadcrumb-item a {
      color: rgba(255, 255, 255, 0.8);
    }

    .breadcrumb-item a:hover,
    .breadcrumb-item.active {
      color: #ffffff;
    }

    img {
      max-height: 400px;
      object-fit: cover;
      margin-top: 20px;
      border-radius: 12px;
      width: 100%;
    }
  }

  .process-box {
    background-color: #007bff;
    color: #ffffff;
    border-radius: 8px;
    padding: 1.5rem;
    text-align: center;
  }

  .booking {
    background-color: #ffffff;
    border-radius: 10px;
    padding: 2rem;
    color: #000000;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);

    h1, h6, p, label {
      color: #000000;
    }

    input,
    textarea,
    select {
      background-color: #f9f9f9;
      color: #000000;
      border: 1px solid #cccccc;
    }

    input::placeholder,
    textarea::placeholder {
      color: #666666;
    }

    .form-floating label {
      color: #333333;
    }

    .btn {
      background-color: #000000;
      color: #ffffff;
      border: none;
    }

    .btn:hover {
      background-color: #333333;
    }
  }

  .left-text {
    color: #000000;
    text-align: left;
    margin-bottom: 20px;
  }
`;

const Booking = () => {
  return (
    <BookingWrapper>
      <div className="container-fluid py-5 hero-header mb-5">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h1 className="display-3">Booking</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Booking
                  </li>
                </ol>
              </nav>
              <img
                src="https://via.placeholder.com/800x400"
                alt="Booking banner"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="process-box">
              <h4>Choose Destination</h4>
              <p>Pick your favorite spot for your adventure.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="process-box">
              <h4>Book Your Trip</h4>
              <p>Fill in the form below to confirm your booking.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="process-box">
              <h4>Enjoy the Journey</h4>
              <p>Get ready to explore and make memories!</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container booking mb-5">
        <h1 className="mb-4 text-center">Book Now</h1>
        <div className="row">
          <div className="col-lg-4 left-text">
            <h4>Important Information</h4>
            <p>
              Please fill out the form carefully to ensure your booking is
              processed correctly. Double-check your email and destination
              details.
            </p>
          </div>
          <div className="col-lg-8">
            <form>
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Full Name"
                    />
                    <label htmlFor="name">Full Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email Address"
                    />
                    <label htmlFor="email">Email Address</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="destination"
                      placeholder="Destination"
                    />
                    <label htmlFor="destination">Destination</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <select className="form-select" id="guests">
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4+">4+ Guests</option>
                    </select>
                    <label htmlFor="guests">No. of Guests</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Special Requests"
                      id="requests"
                      style={{ height: '100px' }}
                    ></textarea>
                    <label htmlFor="requests">Special Requests</label>
                  </div>
                </div>
                <div className="col-12 text-center">
                  <button type="submit" className="btn btn-lg px-5">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </BookingWrapper>
  );
};

export default Booking;
