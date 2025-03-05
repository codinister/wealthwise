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

  const mission = [...data].map((v) => {
    if (v.title === 'Mission') {
      return v;
    }
  })

  const vision = [...data].map((v) => {
    if (v.title === 'Vision') {
      return v;
    }
    else{
      return null
    }
  }).filter(Boolean)

  const about = [...data].map((v) => {
    if (v.title === 'About Us') {
      return v;
    }
  }).filter(Boolean)

  return (
    <section className="sectiontwo">
      <div className="container">
        <div>
          <div>
            <div>
              <div>
                <div>
                  <h2>{vision[0]?.title}</h2>
                  <div>{vision[0]?.excerpt}...</div>
                </div>
              </div>

              <div>
                <div>
                  <h2>{mission[0]?.title}</h2>
                  <div>{mission[0]?.excerpt }...</div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <h2>{about[0]?.title}</h2>
                <div>{about[0]?.excerpt}...</div>
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
