
const main = () => {
    const country = "Nigeria";
    return (
        <main className="main">
            <section className="about-section">
                <h2 className="aboutUs">About Us</h2>
                <p className="about-us-text">
                We are a small team of web developers based in the {country}. We
                pecialise in creating modern and responsive websites for businesses
                and individuals.
                </p>
            </section>
            <section className="second-section">
                <h2 className="service-title">Our Services</h2>
                <ul className="service-list">
                    <li className="service-item">Web Design</li>
                    <li className="service-item">Web Development</li>
                    <li className="service-item">E-commerce Solutions</li>
                    <li className="service-item">Search Engine Optimization (SEO)</li>
                </ul>
            </section>
        </main>
    )
}

export default main;