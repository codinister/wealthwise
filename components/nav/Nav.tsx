'use client';

import useGetQuery from '@/data/query/queryprovider/useGetQuery';
import Image from 'next/image';
import Link from 'next/link';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';
import { IoLogoFacebook } from 'react-icons/io';
import { useEffect, useState } from 'react';

const Nav = () => {
  const data = useGetQuery('settings', '/settings') || [];

  useEffect(() => {
    window.addEventListener('scroll', pageScroll);

    return () => window.removeEventListener('scroll', pageScroll);
  }, []);

  const [scrollHeight, setscrollHeight] = useState('hide');
  const [showmenu, setShowmenu] = useState('hide');

  const hidemenubox = () => {
    setShowmenu('hide');
  };
  const showmenubox = () => {
    setShowmenu('show');
  };

  const pageScroll = () => {
    if (window.scrollY > 100) {
      setscrollHeight('show');
    } else {
      setscrollHeight('hide');
    }
  };

  return (
    <nav className={`navbar ${scrollHeight}`}>
      <div className="container">
        <div>
          <div>
            <FaPhoneAlt /> {data[0]?.phone1 ? data[0]?.phone1 : ''}
          </div>
          <div>
            <FaMapMarkerAlt /> {data[0]?.location ? data[0]?.location : ''}
          </div>
        </div>
        <div>
          <a
            href={data[0]?.instagram ? data[0]?.instagram : ''}
            title="Instagram"
          >
            <FaInstagram />
          </a>
          <a href={data[0]?.twitter ? data[0]?.twitter : ''} title="Twitter">
            <BsTwitterX />
          </a>
          <a href={data[0]?.facebook ? data[0]?.facebook : ''} title="Facebook">
            <IoLogoFacebook />
          </a>
        </div>
      </div>
      <div className={`container mobile-menu ${showmenu}`}>
        <div className="logo">
          {data[0]?.comp_logo ? (
            <Link href="/">
              {' '}
              <Image
                onClick={hidemenubox}
                width="70"
                height="55"
                src={data[0]?.comp_logo}
                alt=""
              />
            </Link>
          ) : (
            ''
          )}
        </div>
        <div className="navlinks">
          <ul>
            <li>
              <Link onClick={hidemenubox} href="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={hidemenubox} href="/about">
                About Us
              </Link>
            </li>

            <li>
              <Link href="#">
                Real Estate <span>{' ^'}</span>
              </Link>
              <ul onClick={hidemenubox}>
                <li>
                  <Link href="/housetobuysell">House to buy/sell</Link>
                </li>
                <li>
                  <Link href="/housetorentforrent">House to rent/for rent</Link>
                </li>
                <li>
                  <Link href="/apartments">Apartments</Link>
                </li>
                <li>
                  <Link href="/landtobuysell">Land to buy/sell</Link>
                </li>
                <li>
                  <Link href="/landhousedocumentation">
                    Land/House documentation
                  </Link>
                </li>
                <li>
                  <Link href="/generalconstruction">General Construction</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="#">
                Insurance<span>{' ^'}</span>
              </Link>
              <ul onClick={hidemenubox}>
                <li>
                  <Link href="/funeralplan">Funeral Plan</Link>
                </li>

                <li>
                  <Link href="/educare">Educare</Link>
                </li>
                <li>
                  <Link href="/travelinsurance">Travel Insurance</Link>
                </li>
                <li>
                  <Link href="/familyplan">Family Plan</Link>
                </li>
                <li>
                  <Link href="/propertyinsurance">Property Insurance</Link>
                </li>
                <li>
                  <Link href="/health">Health</Link>
                </li>
                <li>
                  <Link href="/life">Life</Link>
                </li>
                <li>
                  <Link href="/generalinsurance">General Insurance</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="#">
                Travel & Tour<span>{' ^'}</span>
              </Link>
              <ul onClick={hidemenubox}>
                <li>
                  <Link href="/visaassistance">Visa Assistance</Link>
                </li>
                <li>
                  <Link href="/tours">Tours</Link>
                </li>
                <li>
                  <Link href="/accomodation">Accomodation</Link>
                </li>
                <li>
                  <Link href="/carrental">Car Rental</Link>
                </li>
                <li>
                  <Link href="/ticketing">Ticketing</Link>
                </li>
                <li>
                  <Link href="/meetandgreet">Meet and Greet</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="#">
                Financial Services<span>{' ^'}</span>
              </Link>
              <ul onClick={hidemenubox}>
                <li>
                  <Link href="/accountingservices">Accounting Services</Link>
                </li>
                <li>
                  <Link href="/auditors">Auditors</Link>
                </li>
                <li>
                  <Link href="/taxconsultingservices">
                    Tax Consulting Services
                  </Link>
                </li>
                <li>
                  <Link href="/corporateprojectfinancing">
                    Corporate & Project Financing
                  </Link>
                </li>
                <li>
                  <Link href="/humanresourcesservice">
                    Human Resources Service
                  </Link>
                </li>
                <li>
                  <Link href="/outsourcing">Outsourcing</Link>
                </li>
                <li>
                  <Link href="/sususavings">Susu Savings</Link>
                </li>
                <li>
                  <Link href="/loans">Loans</Link>
                </li>
                <li>
                  <Link href="/investmentsolutions">Investment Solutions</Link>
                </li>
                <li>
                  <Link href="/businessplanning">Business Planning</Link>
                </li>
                <li>
                  <Link href="/financialplanning">Financial Planning</Link>
                </li>
                <li>
                  <Link href="/wealthmanagement">Wealth Management</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="#">
                Roofing Production<span>{' ^'}</span>
              </Link>
              <ul onClick={hidemenubox}>
                <li>
                  <Link href="/selflock">Selflock</Link>
                </li>
                <li>
                  <Link href="/modernselflock">Modern Selflock</Link>
                </li>
                <li>
                  <Link href="/ibr">IBR</Link>
                </li>
                <li>
                  <Link href="/shingles">Shingles</Link>
                </li>
                <li>
                  <Link href="/eurotile">Eurotile</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="#">
                Interior Decor<span>{' ^'}</span>
              </Link>
              <ul onClick={hidemenubox}>
                <li>
                  <Link href="/officewares">Office Furniture</Link>
                </li>
                <li>
                  <Link href="/homedecor">Home Decor</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link onClick={hidemenubox} href="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={`backdrop ${showmenu}`} onClick={hidemenubox}></div>

      <div className="hamburger-wrapper">
        <Image
          src="/hamburger.jpg"
          alt="Hamburger"
          width="40"
          height="40"
          onClick={showmenubox}
        />
        <h5>{data[0]?.title ? data[0]?.title.toUpperCase() : ''}</h5>
      </div>
    </nav>
  );
};

export default Nav;
