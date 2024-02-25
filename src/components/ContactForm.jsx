const ContactForm = () => {
    return(
        <div className="feedbackForm">
              <h1>Get in Contact</h1>
            <div className="column">
                <h2>How would you categorize your event?</h2>
                <input className="input-category" type="text"/>
                <h2>When is it?</h2>
                <input className="input-1" type="text"/>
                <h2>Where is it?</h2>
                <input className="input-1" type="text"/>
                <h2>How much does it cost?</h2>
                <input className="input-1" type="text"/>
                <h2>Anything noteworthy you think people should know?</h2>
                <input className="input-1" type="text"/>
                <h2>Provide any published online links/direct info for the event</h2>
                <input className="input-1" type="text"/>
          
            </div>
            <button className="feedback2">submit</button>
        </div>

    )
}

export default ContactForm;