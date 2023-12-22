import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import Benefits from "./Conponents/Benefits";

const Home = () => {
  return (
    <>
      {/* Banner Section */}
      <section
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/src/assets/home.jpeg)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="text-cyan-100">
            <h1 className="mb-5 text-5xl font-bold">
              Your Task Manager
            </h1>
            <div className="font-medium mb-5 text-xl text-black">
              <Typewriter
                options={{
                  strings: [
                    "TaskTide: Surf Through Your To-Dos with Ease",
                    "Effortless Task Mastery: Your Personal Productivity Hub",
                    "Achieve More, Stress Less: The Ultimate Task Manager",
                    "Task Symphony: Harmonize Your Work and Life Goals",
                    "Navigate Your Day: A Task Manager Beyond Limits",
                    "ZenTask: Where Productivity Meets Peace of Mind",
                    "TaskCraft: Sculpt Your Day with Precision",
                    "TaskVista: See Your Goals Clearly, Achieve Them Seamlessly",
                    "TaskMagnet: Attract Success, One Task at a Time",
                    "Master Your Day: Task Mastery for Modern Achievers",
                    "TaskSphere: Explore a Universe of Possibilities",
                    "TaskFlow: Ride the Wave of Effortless Productivity",
                    "StriveSync: Synchronize Your Goals, Conquer Your Day",
                    "TaskRise: Elevate Your Productivity to New Heights",
                    "ChronoTask: Your Journey to Time Mastery Begins Here",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>

            <Link to="/dashboard" className="btn btn-primary">
              Let&apos;s Explore
            </Link>
          </div>
        </div>
      </section>

      {/* Benefit section */}
      <section>
        <Benefits />
      </section>

      <Helmet>
        <title>TaskWavelet | Home</title>
      </Helmet>
    </>
  );
};

export default Home;
