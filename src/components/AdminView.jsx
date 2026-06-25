import { useEffect, useState } from "react";
import { supabase } from "../supabase";

function AdminView() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  async function fetchBookings() {
    const { data, error } = await supabase
      .from("bookings1")
      .select("*");

    if (error) {
      console.log(error);
      return;
    }

    setBookings(data);
  }

return (
  <div className="booking-card">

    <h1>ADMIN VIEW TEST</h1>

    {bookings.map((booking) => (
      <div key={booking.id}>
        <p><strong>Name:</strong> {booking.name}</p>
        <p><strong>Email:</strong> {booking.email}</p>
        <p><strong>Phone:</strong> {booking.phone}</p>
        <p><strong>Description:</strong> {booking.description}</p>
        <hr />
      </div>
    ))}
  </div>
);
}

export default AdminView;