import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <h2 className="text-4xl text-center font-black font-mono">Home Page</h2>

      <Helmet>
        <title>TaskWavelet | Home</title>
      </Helmet>
    </div>
  );
};

export default Home;
