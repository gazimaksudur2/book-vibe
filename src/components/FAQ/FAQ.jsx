const FAQ = () => {
    return (
        <div className='w-[60%] mx-auto my-20 flex flex-col justify-between items-center gap-3'>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                How do I sign up for an account on Readiverse?
                </div>
                <div className="collapse-content">
                    <p>Signing up for an account on Readiverse is simple! Just click on the Sign Up button on the homepage, fill in your details, and you are all set to explore our extensive collection of books.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                Can I access Readiverse on my mobile device?
                </div>
                <div className="collapse-content">
                    <p> Absolutely! Readiverse is fully optimized for mobile devices, allowing you to enjoy your favorite books anytime, anywhere, right from the palm of your hand.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                How often is the book collection updated?
                </div>
                <div className="collapse-content">
                    <p>We strive to update our book collection regularly to bring you the latest releases and timeless classics. You can expect new additions to our library on a weekly basis.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                Are there any membership fees or subscription plans?
                </div>
                <div className="collapse-content">
                    <p>Readiverse offers both free and premium membership options. While our basic membership is free and provides access to a wide range of books, our premium membership unlocks additional features and exclusive content for a nominal subscription fee.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                Can I download books for offline reading?
                </div>
                <div className="collapse-content">
                    <p>Yes, with our offline reading feature, you can download your favorite books to your device and enjoy reading them even when you are offline. Simply select the Download option next to the book you wish to read.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                How does the personalized recommendation system work?
                </div>
                <div className="collapse-content">
                    <p>Our personalized recommendation system analyzes your reading history, preferences, and interests to suggest books that are tailored to your taste. The more you read and interact with our platform, the better our recommendations become.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                Is there a way to interact with other readers on Readiverse?
                </div>
                <div className="collapse-content">
                    <p>Absolutely! Readiverse offers various community engagement features such as discussion forums, book clubs, and social sharing options. Connect with fellow book lovers, share your thoughts on your favorite reads, and discover new books through community interactions.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                What if I canot find a specific book in the library?
                </div>
                <div className="collapse-content">
                    <p>If you canot find a specific book in our library, feel free to reach out to our support team. We are constantly expanding our collection and would be happy to consider adding your requested book to our library.</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;