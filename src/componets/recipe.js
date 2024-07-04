import cinnamon from '../images/cinnamon-bun.jpg';
import fudgeBrownie from '../images/Fudge-Brownie-Delish.jpg';
import cheeseCake from '../images/Sopapilla-Cheesecake.jpg';
import vanillaBread from '../images/Vanilla-Bean-Pound-Cake.jpg';
import '../styles/index.scss'
const Recipe = () => {
    const workInfoData = [
        {
            image: cinnamon,
            title: "Cinnamon",
            text: "Home-made delicious baked cinnamon buns.",
        },
       
        {
            image: cheeseCake,
            title: "CheeseCake",
            text: "Bake some freshly mouth-watering cheesecake. ",
        },
        {
            image: fudgeBrownie,
            title: "FudgeBrownie",
            text: "Bake some fresh chocolate fudge brownies.",
        },
        {
            image: vanillaBread,
            title: "VanillaBread",
            text: "Home made Vanilla Bean Bread for your family.",
        }
    ];

    return (
        <div className="work-section-bottom">
            {workInfoData.map((data, index) => (
                <div className="work-section-info" key={index}>
                    <div className="info-boxes-img-container">
                        <img src={data.image} alt={data.title} />
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                        <div className="about-buttons-container">
                            <button style={{ backgroundColor: 'orange' }} className="secondary-button">Recipe</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Recipe;