import { useState } from "react";

function SelectQuestion() {
  const [question, setQuestion] = useState("");

  return (
    <div>
      

      <select value={question}
        onChange={(e) => setQuestion(e.target.value)}
      >
        <option value="">FAQ</option>
        <option value="hrsoperation">
          What are your hours of operation?
        </option>
        <option value="bnm">
          Do you have a brick-and-mortar establishment?
        </option>
        <option value="mobile">
          Are you mobile?
        </option>
         <option value="kinds">
          What kinds of tears do you repair?
        </option>
        
        
      </select>

     {question && (
  <div className="faq-response">
    {question === "hrsoperation" &&
      "We are appointment-based only."}

    {question === "bnm" &&
      "We do not. We operate virtually and can handle all inquiries via the form sheet"}

    {question === "mobile" &&
      "Yes, within Chicago. All other locations require shipment."}
    {question === "kinds" &&
      "We repair everything from 'blow out' rips, which are rips that are over 4 inches long, to smaller rips. The kinds of rips that occur around the lip, nose and eye region are a unique challenge to repair and thus require additional consultation from our Experts. " }
  </div>
)}
    </div>
  );
}

export default SelectQuestion;