

export default function Onoutstore() {
  const list = [
    "Knife Skills - Learn how to chop, dice, and julienne like a pro - 1 hour",
    "Sauce Making - Master the five mother sauces of French cuisine - 2 hours",
    "Baking Basics - Understand the principles of baking bread and pastries - 3 hours",
    "Grilling Techniques - Get the perfect sear on meats and vegetables - 1 hour 30 mins",
    "Advanced Pastry Techniques - Create intricate desserts and decorations - 4 hours",
    "Seafood Preparation - Clean and cook various types of seafood - 2 hours",
];

  return (
    <div className="section onstore">
      
      <div className="col bar">
        <h1 className="title">On our Food+ get skilled!</h1>
        { list.map((item, index) => (
          <p className="list" key={index}>{item}</p>
        ))}
        <button className="btn">Join Us</button>
      </div>
      <div className="col pic">
        <img src='img/galary/img10.png'  alt=''/>
      </div>
     
    </div>
  );
}
