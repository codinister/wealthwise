import useGetQuery from '@/data/query/queryprovider/useGetQuery';

const Sectionfive = () => {
  const data: {
    excerpt: string;
    image: string;
    title: string;
    role: string;
  }[] = useGetQuery('testimonials', '/testimonials') || [];

  return (
    <section className="sectionfive">
      <div className="container">
        <h2>Testimonials</h2>
        <p>Kind words from our customers and partners</p>
      </div>

      <div className="container">
        {data.map((v, k) => {
          return (
            <div key={k} className="testimony-box">
              <div>{v?.excerpt}</div>
              <div>
                <picture
                style={{
                  backgroundImage: `url(${v?.image})`, 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center'
                }}
                ></picture>
                <div>
                  <strong>{v?.title}</strong>
                  <p>{v?.role}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Sectionfive;
