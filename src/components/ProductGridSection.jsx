export default function ProductGridSection() {
    const products = [
      {
        title: " Enterprise",
        img: "https://assets1.cleartax-cdn.com/cleartax/images/1619775001_1605872682_desktop_fold_productsforeveryone_card_enterprise.webp", // replace with actual image paths
      },
      {
        title: " Tax Experts",
        img: "https://assets1.cleartax-cdn.com/cleartax/images/1620106405_1605872216_desktop_fold_productsforeveryone_card_taxexperts.webp",
      },
      {
        title: " SMEs",
        img: "https://assets1.cleartax-cdn.com/cleartax/images/1619783039_1605872581_desktop_fold_productsforeveryone_card_smes.webp",
      },
      {
        title: " Individuals",
        img: "https://assets1.cleartax-cdn.com/cleartax/images/1620019995_1605863309_desktop_fold_productsforeveryone_card_individuals.webp",
      },
    ];
  
    return (
      <div className="bg-white py-20 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-start justify-between">
          {/* Right Text */}
          <div className="mt-10 lg:mt-0 max-w-md">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 leading-tight">
            Products<br />for everyone
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Built for scale, made by experts and secure by design. Bringing you
            maximum tax savings, unmatched speed and complete peace of mind.
          </p>
        </div>
       
        {/* Left Grid */}
        <div className="grid grid-cols-1 lg:ml-16  sm:grid-cols-2 gap-6 w-full lg:w-3/5">
          {products.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition flex flex-col justify-between h-64"
            >
              <img src={item.img} alt={item.title} className="h-28 w-auto mx-auto flex justify-end items-end mb-4" />
              <div className="flex justify-between items-center mt-auto">
                <h3 className="text-2xl font-semibold text-gray-800">
                  For <br />{item.title}
                </h3>
                <span className="text-xl text-gray-700">→</span>
              </div>
            </div>
          ))}
        </div>
  
     
      </div>
    );
  }
  