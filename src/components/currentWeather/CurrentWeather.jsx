const WeatherForecast = () => {
  const weatherLabels = "text-left font-[500] text-md";
  const weatherDetails = "text-right font-[600] text-md";
  return (
    <div className="w-[400px] rounded-md shadow-customShadow mt-10 text-white mx-auto bg-[#333] px-[20px] pb-[20px]">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-[600] text-[18px] leading-4 m-0 tracking-wide">
            Kathmandu
          </p>
          <p className="font-[400] text-[14px] leading-4 m-0">Sunny</p>
        </div>
        <img alt="weather" className="w-[110px]" src="icons/01d.png" />
      </div>
      <div className="flex items-center justify-between">
        <p className="font-[600] text-[70px] w-auto tracking-tighter my-3">
          18°C
        </p>
        <div className="w-full pl-10">
          <span className={weatherLabels}>Weather Details</span>
          <div className="flex justify-between">
            <span className={weatherLabels}>Feels Like</span>
            <span className={weatherDetails}>22°C</span>
          </div>
          <div className="flex justify-between">
            <span className={weatherLabels}>Wind</span>
            <span className={weatherDetails}>2</span>
          </div>
          <div className="flex justify-between">
            <span className={weatherLabels}>Humidity</span>
            <span className={weatherDetails}>15%</span>
          </div>
          <div className="flex justify-between">
            <span className={weatherLabels}>Pressure</span>
            <span className={weatherDetails}>15 hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherForecast;
