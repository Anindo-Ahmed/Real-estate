import { Helmet } from "react-helmet-async";

const Faq = () => {
    return (
        <div>
            <Helmet>
                <title> Dream Home | FAQ </title>
            </Helmet>
            <h1 className="text-2xl md:text-4xl font-bold text-center my-10">FAQ</h1>
            <div className="collapse collapse-arrow bg-base-200 mb-6">
                <input type="radio" name="my-accordion-2" defaultChecked /> 
                <div className="collapse-title text-xl font-medium">
                What are the facilities of a single family apartment?
                </div>
                <div className="collapse-content"> 
                    <p>Kitchen: Equipped with appliances such as a stove, refrigerator, microwave, and dishwasher. Some apartments may also have additional features such as a garbage disposal, pantry, or breakfast bar. <br />

                    Bathroom(s): Typically includes a toilet, sink, and bathtub or shower. Some apartments may have multiple bathrooms, en-suite bathrooms, or upgraded features such as a jacuzzi tub or double vanity. <br />

                    Living Room: A spacious area for relaxing, entertaining guests, and spending time with family. It may feature amenities such as hardwood floors, a fireplace, or built-in shelving. <br />

                    Bedroom(s): Separate rooms for sleeping, each equipped with a closet or wardrobe for storage. Larger apartments may have multiple bedrooms, including a master bedroom with an attached bathroom. <br />

                    Parking: Off-street parking spaces or a garage where residents can park their vehicles securely. Depending on the location and size of the apartment, parking may be included in the rental agreement or available for an additional fee. <br />

                    Utilities: Access to essential utilities such as electricity, water, heating, and air conditioning. The specifics of which utilities are included in the rent may vary depending on the rental agreement.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-6">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                How can you rent an apartment easily?
                </div>
                <div className="collapse-content"> 
                    <p>Set a Budget: Determine how much you can afford to spend on rent each month. This will help narrow down your search to apartments within your price range. <br />

                    Research Locations: Consider the location and neighborhood where you want to rent. Factors to consider include proximity to work or school, public transportation options, amenities (such as grocery stores, parks, and restaurants), safety, and overall livability. <br />
                    Start Early: Begin your apartment search well in advance, ideally 1-2 months before you plan to move. This allows you to explore different options and gives you time to make informed decisions. <br />
                    </p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-6">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                    Suggest me the best suitable apartment for a  single family?
                </div>
                <div className="collapse-content"> 
                    <p>Finding the best suitable apartment for a single family depends on various factors such as budget, location preferences, lifestyle, amenities, and specific needs. However, here are a few considerations and suggestions to help you find the right apartment: <br />
                    Location: Consider the neighborhood's safety, proximity to work, schools, public transportation, shopping centers, parks, and other amenities. Choose a location that aligns with your lifestyle and preferences. <br />
                    
                    Size: Determine the size of the apartment based on the number of family members and your space requirements. Consider factors such as the number of bedrooms, bathrooms, and overall square footage. <br />

                    Budget: Set a budget for rent and utilities that is affordable and sustainable for your financial situation. Factor in additional costs such as security deposits, pet fees (if applicable), and monthly expenses. <br />

                    Pet-Friendly: If you have pets, ensure that the apartment allows pets and offers pet-friendly amenities such as designated pet areas, nearby parks, or pet grooming stations.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-6">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                    Please tell me about the best Prices apartments.
                </div>
                <div className="collapse-content"> 
                    <p>It's vary based on places, facilities and apartments sizes, but we can assure you  all are apartments here are budget friendly.</p>
                </div>
            </div>
            
        </div>
    );
};

export default Faq;