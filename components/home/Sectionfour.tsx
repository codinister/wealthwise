import { PiUsersThree } from 'react-icons/pi';
import { GrCluster } from 'react-icons/gr';
import { GiRelationshipBounds } from 'react-icons/gi';

const Sectionfour = () => {
  return (
    <section className="sectionfour">
      <div className="container">
        <h5>Our Strength</h5>
        <h2>Why Choose Us</h2>

        <p>
          We help you see the world differently, discover opportunities you may
          never have imagined and achieve results that bridge what is with what
          can be.
        </p>
      </div>

      <div className="container">
        <div className="our-strength">
          <PiUsersThree />
          <h4>Solid Work Force</h4>
          <p>
            Boasts of a huge workforce of young and old talented and skilled
            personnel with a good balance in gender, race, and social
            stratification
          </p>
        </div>

        <div className="our-strength">
          <GrCluster />
          <h4>Experience</h4>
          <p>
            We have extensive experience in our various sectors of operation
            over several years.
          </p>
        </div>

        <div className="our-strength">
          <GiRelationshipBounds />
          <h4>Strong Relationship</h4>
          <p>
            We have built strong relationships with the government and other
            businesses.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sectionfour;
