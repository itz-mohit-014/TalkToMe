const FeatureCard = ({ card }) => {
  return (
    <div
      key={card.id}
      className={`relative rounded-3xl text-center w-fit p-8 ${card.gradient} relative z-0 hover:z-10 hover:-translate-y-4 animation duration-300 hover:rotate-6`}
    >
      <span
        className={`absolute -top-6 font-semibold left-4 text-sm ${card.textColor}`}
      >
        {card.tag}
      </span>
      <div className="flex items-center justify-center h-24 w-28 mx-auto mb-4">
        {<img src={card.svg} alt="image" className="object-fit scale-150" />}
      </div>
        <div className="flex flex-col justify-end ">
          <h3 className={`text-xl font-serif text-slate-800 font-medium mb-2`}>
            {card.title}
          </h3>
          <p className="text-gray-400 text-sm font-medium mx-auto w-full max-w-[400px]">
            {card.description}
          </p>
        </div>
    </div>
  );
};

export default FeatureCard;
