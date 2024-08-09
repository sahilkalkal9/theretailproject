import "../../App.scss"
import simgg from "./simg.jpg"

function Story() {
    return (
        <div className="StoryPage">
            <div className="story-box">
                <div className="story-section">
                    <div className="story-left">
                        <img className="simg" src={simgg} />
                    </div>
                    <div className="story-right">
                        <p className="contact-head">
                            Our Story
                        </p>
                        <p className="story-content">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <button className="view-more">
                            View Work
                        </button>
                    </div>
                </div>
                <div className="story-section rf">
                    <div className="story-left">
                        <img className="simg" src={simgg} />
                    </div>
                    <div className="story-right">
                        <p className="contact-head">
                            Who are we ?
                        </p>
                        <p className="story-content">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Story