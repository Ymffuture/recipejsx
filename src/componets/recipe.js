import cinnamon from '../images/cinnamon-bun.jpg';
import fudgeBrownie from '../images/Fudge-Brownie-Delish.jpg';
import cheeseCake from '../images/Sopapilla-Cheesecake.jpg';
import vanillaBread from '../images/Vanilla-Bean-Pound-Cake.jpg';
import '../styles/index.scss';

const Recipe = () => {
    const workInfoData = [
        {
            image: cinnamon,
            title: "Cinnamon",
            text: "Home-made delicious baked cinnamon buns.",
            url: "https://www.allrecipes.com/recipe/241917/quick-cinnamon-rolls/"
        },
        {
            image: cheeseCake,
            title: "CheeseCake",
            text: "Bake some freshly mouth-watering cheesecake.",
            url: "https://sallysbakingaddiction.com/classic-cheesecake/"
        },
        {
            image: fudgeBrownie,
            title: "FudgeBrownie",
            text: "Bake some fresh chocolate fudge brownies.",
            url: "https://example.com/fudge-brownie-recipe"
        },
        {
            image: vanillaBread,
            title: "VanillaBread",
            text: "Home made Vanilla Bean Bread for your family.",
            url: "https://example.com/vanilla-bread-recipe"
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
                            <button
                                style={{ backgroundColor: 'orange' }}
                                className="secondary-button"
                                onClick={() => window.location.href = data.url}
                            >
                                Recipe
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Recipe;
