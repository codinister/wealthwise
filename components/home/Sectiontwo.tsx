import useGetQuery from '@/data/query/queryprovider/useGetQuery';

import { FaServicestack } from 'react-icons/fa';
import { LiaUsersSolid } from 'react-icons/lia';
import { PiUsersFourLight } from 'react-icons/pi';
import { GoClock } from 'react-icons/go';

const Sectiontwo = () => {
  type PagesType = {
    title: string;
    body: string;
    slug: string;
    excerpt: string;
  }[];

  const data: PagesType = useGetQuery('pages', '/pages') || [];

  const filta = [...data].filter((v) => {
    return ['Mission', 'Vision', 'About Us'].includes(v.title);
  });

  return (
    <section className="sectiontwo">
      <div className="container">
        <div>
          <div>
            <div>
              <div>
                <div>
                  <h2>{filta[1]?.title ? 'Vision' : ''}</h2>
                  <div>{filta[1]?.title ? filta[0]?.excerpt : ''}</div>
                </div>
              </div>

              <div>
                <div>
                  <h2>{filta[0]?.title ? 'Mission' : ''}</h2>
                  <div>{filta[0]?.title ? filta[0]?.excerpt : ''}</div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <h2>{filta[2]?.title ? 'Wealth Wise Investment' : ''}</h2>
                <div>{filta[2]?.title ? filta[2]?.excerpt : ''}</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div>
              <FaServicestack />
              <h2>37</h2>
              <p>Services</p>
            </div>
          </div>
          <div>
            <div>
              <LiaUsersSolid />
              <h2>20+</h2>
              <p>Partners</p>
            </div>
          </div>
          <div>
            <div>
              <PiUsersFourLight />
              <h2>30+</h2>
              <p>Core Staff</p>
            </div>
          </div>
          <div>
            <div>
              <GoClock />
              <h2>10+</h2>
              <p>Years of Existence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sectiontwo;
