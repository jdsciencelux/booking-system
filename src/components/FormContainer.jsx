import { useState } from "react";
import SelectQuestion from "./SelectQuestion";
import { supabase } from "../supabase";

function FormContainer() {
  const [activeTab, setActiveTab] = useState("repair");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [submittedData, setSubmittedData] = useState(null);
  const [error,setError]=useState("");
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async () => {
    
   if(
      !name ||
      !email ||
      !phone ||
      !description

   ){setError("Please complete all fields.");
      return; }
  
    const phonePattern = /^\d{10}$/;

    const cleanedPhone = phone.replace(/\D/g, "");

    if (!phonePattern.test(cleanedPhone)) {
       setError("Please enter a valid 10-digit phone number.");
  return;
    }


  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(!emailPattern.test(email)){

      setError("Please enter a valid email address.");
      return;
    }setError("");

    const data = {

      name,
      email,
      phone,
      description,
    };


   setLoading(true);

setTimeout(async() => {

const {data: booking, error}= await supabase
  .from("bookings1")
  .insert([
{
  name,
  email,
  phone,
  description,
},


  ])
  .select();

  console.log(booking);

  if(error){
    setError("Failed to save booking.");
    setLoading(false);
    return;

  }
  //SUCCESS MESSAGE
  setError("");
  setSubmittedData(data);
  setLoading(false);
}, 2000);
  };
  const closePreview = () =>{
      setSubmittedData(null);

      setName("");
      setEmail("");
      setPhone("");
      setDescription("");

  };

return (
  <div className = "form-box">
    <div className="layout">
      <div className="tab-nav">
   
    {/* TAB NAVIGATION */}
    <div>
     
      <div className={`tab ${activeTab==="repair"?"active" : ""}`}
      onClick={()=> setActiveTab("repair")}>
        REPAIR LATEX 
      </div>

       <div className={`tab ${activeTab==="faq"?"active" : ""}`}
      onClick={()=> setActiveTab("faq")}>
        FAQ
      </div>

       
    </div>

      {/* TAB CONTENT */}
    <div style={{ marginTop: "45px" }}>
        {activeTab === "repair" && (
        
       <div className="input-section">

             <input type="text" placeholder="Name"
             value = {name}
             onChange={(e) => setName(e.target.value)}
             />
             <input type="email" placeholder="Email"
             value = {email}
             onChange = {(e) =>setEmail(e.target.value)}
             />
             <input type="tel" placeholder="(123) 456-7890"
             value = {phone}
             onChange={(e) => setPhone(e.target.value)}
             />
             

       <textarea placeholder="Describe Your Item By Including: Color, Size, Article(s) Needing Repair and Timeframe in which you need your item repaired by. We will give you a free quote upon receival of your query."  maxLength="500"rows="11"
       value={description}
       onChange={(e) => setDescription(e.target.value)}
       >
        
       </textarea>
       <p>
        {description.length}/500 characters
        </p>
        {error &&(
            <div className="error-message">{error}</div>

        )}


        <div style = {{left: "200px"}}>
          
        <button
      onClick={handleSubmit}
      disabled={loading}
      >
  {loading ? "Submitting..." : "Submit"}
</button>
       
         </div>
     
      {/* Submitted data prompt */}

       {submittedData &&(<div className="submitted-data">
      
        <button 
          className = "close-preview"
          onClick={closePreview}>
            X
        </button>

        <h3>Your inquiry has been sent and we will respond to you within 24 hours. Please exit the text box.</h3>

        <p>Name:{submittedData.name}</p>
        <p>Email:{submittedData.email}</p>
        <p>Phone:{submittedData.phone}</p>
        <p>Description:{submittedData.description}</p>

        
</div>
      

    )}
  </div>
    
        )}

    {activeTab === "faq" && (
  <SelectQuestion />
)}

        
      </div>

    </div>
  </div>
  


  </div>
    
  );
}
export default FormContainer;
