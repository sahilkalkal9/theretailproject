import { useEffect, useState } from "react"
import "./faq.scss"
import faqs from "./faq.json"
import showi from "./showi.png"

function FAQQ() {

    const [openfaqs, setopenfaqs] = useState([])

    useEffect(() => {
        faqs.map((f) => {
            if (openfaqs.includes(f.id)) {
                document.getElementById(f.id).style.display = "flex"
                document.getElementById(f.checkId).style.rotate = "180deg"
            }
            else {
                document.getElementById(f.id).style.display = "none"
                document.getElementById(f.checkId).style.rotate = "0deg"
            }
        })  

    }, [openfaqs])

    const handleOpenFaq = (faqId) => {
        setopenfaqs((prev) => {
            // Check if the FAQ is already open
            if (prev.includes(faqId)) {
                // If it's open, remove it from the list (close it)
                return prev.filter((id) => id !== faqId);
            } else {
                // If it's closed, add it to the list (open it)
                return [...prev, faqId];
            }
        });
    };

    return (
        <div className="FAQ">
            <div className="faq-box">
                <p className="faq-head-n">
                    FAQs
                </p>
                <div className="faqs">
                    {
                        faqs.map((f) => (
                            <div className="faq">
                                <div onClick={() => { handleOpenFaq(f.id) }} className="ques-sec">
                                    <p className="faq-ques">
                                        {f.question}
                                    </p>
                                    <img id={f.checkId} src={showi} alt="" className="showimg" />
                                </div>
                                <p id={f.id} className="faq-ans">
                                    {f.answer}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default FAQQ