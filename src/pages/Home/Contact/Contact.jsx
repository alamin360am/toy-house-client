import './contact.css';

const Contact = () => {
    return (
        <section className='section-contact'>
            <h2 className="primary-heading">Contact Us</h2>
            <div className="grid col-2">
                <div className="contact-info">
                    <h2 className="contact-title">Have you any question?</h2>
                </div>
                <form>
                    <h3 className="secondary-heading">Contact Us Now</h3>
                    <div className="input-field">
                        <input type="text" name="name" id="name" placeholder='Your Name' />
                    </div>
                    <div className="input-field">
                        <input type="email" name="email" id="email" placeholder='Your Email' />
                    </div>
                    <div className="input-field">
                       <textarea name="message" id="message" placeholder='Your Message'></textarea>
                    </div>
                    <input type="submit" value="Submit" className='btn' />
                </form>
            </div>
        </section>
    );
};

export default Contact;