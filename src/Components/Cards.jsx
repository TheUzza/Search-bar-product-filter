function Cards({ items }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 padding-6 w-full max-w-[960px] mx-auto rounded-2xl">
      {items.slice(0, 6).map((product) => (
        <div
          key={product.id}
          className=" rounded-2xl overflow-hidden duration-300 backdrop-blur-sm border border-white/30"
        >
          {/* Card */}
          <img
            src={product.image}
            alt={product.title}
            className="object-cover transition-transform duration-300 rounded-2xl hover:scale-105 "
          />
          {/* Image Card */}
          <div className="p-4 text-stone-300 bg-opacity-40 rounded-b-2xl backdrop-blur-sm">
            {/* Text Card */}
            <h2
              className="text-lg font-semibold flex items-center justify-center object-cover 
            transition-transform hover:text-sky-300"
            >
              {/* text */}
              {product.title}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
