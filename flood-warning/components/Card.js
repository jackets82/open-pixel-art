function Card({ background, location, severity }) {
  return (
    <div
      className={`flex flex-col w-auto rounded shadow-md justify-between h-auto prose overflow-hidden bg-zinc-300 pt-5`}
    >
      <h3 className="">Area: {location}</h3>
      <h3 className={` ${background} w-full h-24 pt-8`}>Severity Level : {severity}</h3>
    </div>
  );
}

export default Card;
