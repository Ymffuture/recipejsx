import Imgsection from "./imgsection";



export default function Herosc() {
// start ===================

  //end =============
  const images = [
    {
      src: "https://www.thespruceeats.com/thmb/HFlJi-AjjiAR_Ek6s5MvnFHwhM8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/basic-muffin-recipe-simple-and-easy-995207-11-9_preview-5b105f2443a1030036685f01.jpeg",
      description: "Basic Muffin",
      link: "/page1",
    },
    {
      src: "/img/galary/img2.webp",
      description: "Assortment of gourmet pastries",
      link: "/page2",
    },
    {
      src: "/img/galary/img3.jpeg",
      description: "Our signature chocolate cake",
      link: "/page3",
    },
    {
      src: "/img/galary/img4.webp",
      description: "Artisan sourdough loaf",
      link: "/sourdough",
    },
    {
      src: "/img/galary/img5.jpg",
      description: "Selection of our finest muffins",
      link: "/muffins",
    },
    {
      src: "/img/galary/img6.avif",
      description: "Delightful seasonal fruit tarts",
      link: "/fruit-tarts",
    },
    {
      src: "/img/galary/img7.jpeg",
      description: "Classic croissants",
      link: "/croissants",
    },
  ];

  const list = [
    "Knife Skills - Learn how to chop, dice, and julienne like a pro - 1 hour",
    "Sauce Making - Master the five mother sauces of French cuisine - 2 hours",
    "Baking Basics - Understand the principles of baking bread and pastries - 3 hours",
    "Grilling Techniques - Get the perfect sear on meats and vegetables - 1 hour 30 mins",
    "Advanced Pastry Techniques - Create intricate desserts and decorations - 4 hours",
    "Seafood Preparation - Clean and cook various types of seafood - 2 hours",
  ];
  
  return (
    <>
      <div className="section hero">
        <div className="col bar">
          <div className="heromove">
            <span className="animated-text">food+</span>
          </div>

          <h1 className="title">About Us</h1>
          <p className="info">
            Welcome to <b>Food plus</b>, your destination for artisanal baked
            goods. We offer fresh bread, pastries, and cakes made with the
            finest ingredients. Committed to quality and community, our bakery
            supports local suppliers and sustainable practices. Visit us for a
            delightful experience and follow us on social media for updates.
          </p>
          <button className="btn">Explore Now</button>
        </div>
        <div className="col galary ">
          <h1 className="title-2">Our best recipes</h1>
          {images.map((image, index) => (
            <Imgsection
              key={index}
              imgSrc={image.src}
              description={image.description}
              link={image.link}
              pt={"95%"}
            />
          ))}
        </div>
      </div>
      <div className="section onstore">
        <div className="col bar">
          <h1 className="title">On our Food+ get skilled!</h1>
          {list.map((item, index) => (
            <p className="list" key={index}>
              {item}
            </p>
          ))}
          <button className="btn">Join Us</button>
        </div>
        <div className="col pic">
          <img src="img/galary/img10.png" alt="" />
        </div>
      </div>

{/* eds */}
      
    </>
  );
}
