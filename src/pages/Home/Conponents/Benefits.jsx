import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Benefits = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }

        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }

        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });

        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <div ref={sliderRef} className="keen-slider min-h-60">
        <div className="keen-slider__slide number-slide1 flex flex-col justify-center items-center text-start gap-5">
          <p className="italic">
            Efficiently manage coding tasks and project timelines.
          </p>
          <div className="flex items-center gap-5">
            <img
              src="/src/assets/user.png"
              alt="Developer"
              className="w-14 rounded-full"
            />
            <div>
              <h2>Muhammad Hamid</h2>
              <p>- Developers</p>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide2 flex flex-col justify-center items-center text-start gap-5">
          <p className="italic">
            Streamline work tasks and collaborate seamlessly with teams.
          </p>
          <div className="flex items-center gap-5">
            <img
              src="/src/assets/user.png"
              alt="Corporate Professional"
              className="w-14 rounded-full"
            />
            <div>
              <h2>Muhammad Abdullah</h2>
              <p>- Corporate Professionals</p>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide3 flex flex-col justify-center items-center text-start gap-5">
          <p className="italic">
            Organize financial tasks and deadlines with ease.
          </p>
          <div className="flex items-center gap-5">
            <img
              src="/src/assets/user.png"
              alt="Bankers"
              className="w-14 rounded-full"
            />
            <div>
              <h2>John Doe</h2>
              <p>- Bankers</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
