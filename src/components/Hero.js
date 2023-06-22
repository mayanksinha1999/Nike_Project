import './Hero.css';

const Hero = () =>{
    return(
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
                    YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
                </p>
            <div className="hero-btn">
                <button>Shop Now</button>
                <button className="secondary-btn">Category</button>
            </div>

            <div className="shopping">
                <p>Also Available on</p>
            </div>

            <div className="brand-icons">
                <img src="/images/amazon.png" alt="Amazon logo"/>
                <img src="/images/flipkart.png" alt="Flipkart logo"/>

            </div>
            </div>
            <div className="hero-image">
            <img src="/images/shoe_image.png" alt="Shoe Image"/>

            </div>

        </main>
    );
}

export default Hero;