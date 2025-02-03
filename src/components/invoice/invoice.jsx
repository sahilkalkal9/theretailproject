import "./invoice.scss"
import jsPDF from 'jspdf';
import html2canvas from "html2canvas";

function Invoice() {

    const createPDF = async () => {
        const pdf = new jsPDF("portrait", "pt", "a4");
        const data = await html2canvas(document.querySelector("#invoice"));
        const img = data.toDataURL("image/png");
        const imgProperties = pdf.getImageProperties(img);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
        pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("resume.pdf");
    };


    return (
        <div className="Invoice">
            <button onClick={createPDF} >
                Print
            </button>
            <div id="invoice" className="invoice-box">
                <div className="invoice-upper">
                    <div className="invoice-upper-left">
                        <p className="invoice-head">
                            INVOICE
                        </p>
                        <div className="in-box">
                            <p className="in-text">
                                INVOICE NUMBER
                            </p>
                            <p className="in-text">
                                XXXXXXXXXX
                            </p>
                        </div>

                        <div className="in-box">
                            <p className="in-text">
                                Date
                            </p>
                            <p className="in-text">
                                02 Feb 2025
                            </p>
                        </div>
                    </div>
                    <div className="invoice-upper-right">
                        <div className="in-logo-box">
                            <img src={require("./pawb.png")} alt="" className="in-logo" />
                            <p className="in-text">
                                The ReTail Project
                            </p>
                            <p className="in-text">
                                GSTIN : 08ANNPC2902R3ZL
                            </p>
                        </div>
                    </div>
                </div>
                <div className="invoice-lower">

                </div>
            </div>
        </div>
    )
}

export default Invoice