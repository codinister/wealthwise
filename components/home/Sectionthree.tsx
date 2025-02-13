import useGetQuery from '@/data/query/queryprovider/useGetQuery';


const Sectionthree = () => {
  const data: {
    excerpt: string;
    image: string;
    title: string;
  }[] = useGetQuery('featured', '/featured') || [];

  return (
    <div className="sectionthree">

      <h2>Our Services</h2>

      <p>
        These are some of the sevices provided by Wealth Wise Investment
      </p>

      <div className="container">
        {data.map((v, k) => {
          return (
            <div className="serv-card" key={k}>
              <div
                style={{
                  backgroundImage: `url(${v?.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div>
                <h4>{v?.title.toUpperCase()}</h4>
                <div>{v?.excerpt}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sectionthree;
