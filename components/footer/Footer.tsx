'use client'

import useGetQuery from '@/data/query/queryprovider/useGetQuery';
import Link from 'next/link';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';
import { IoLogoFacebook } from 'react-icons/io';
import { FaEnvelopeOpen } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  const data = useGetQuery('settings', '/settings') || [];

  return (
    <footer>
      <div className="container">
        <div>
          {data[0]?.comp_logo ? (
            <Link href="/">
              {' '}
              <Image width="150" height="150" src={data[0]?.comp_logo} alt="" />
            </Link>
          ) : (
            ''
          )}
        </div>
        <div>
          <h3>Quick Links</h3>

          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Contact Info</h3>

          <ul>
            <li>
              <FaPhoneAlt /> {data[0]?.phone1 ? data[0]?.phone1 : ''}
            </li>
            <li>
              <FaMapMarkerAlt /> {data[0]?.location ? data[0]?.location : ''}
            </li>
            <li>
              <FaEnvelopeOpen /> {data[0]?.email ? data[0]?.email : ''}
            </li>
          </ul>
        </div>
      </div>

      <div className="container">
        <p>
          &copy; 2025 Wealth Wise Investment. All Rights Reserved. Powered by
          Emagweb
        </p>

        <ul>
          <li>
            <a
              href={data[0]?.instagram ? data[0]?.instagram : ''}
              title="Instagram"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href={data[0]?.twitter ? data[0]?.twitter : ''} title="Twitter">
              <BsTwitterX />
            </a>
          </li>
          <li>
            <a
              href={data[0]?.facebook ? data[0]?.facebook : ''}
              title="Facebook"
            >
              <IoLogoFacebook />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
