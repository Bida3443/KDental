import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  treatment: string;
  patients: string;
  plartform: string;
  notes: string;

}

export function EmailComponent({
  name,
  email,
  phone,
  date,
  time,
  treatment,
  patients,
  plartform,
  notes,
}: EmailTemplateProps) {
  return (
    <div>
      <h2>New Dental Booking</h2>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Phone:</strong> {phone || "N/A"}
      </p>
      <p>
        <strong>Date:</strong> {date}
      </p>
      <p>
        <strong>Time:</strong> {time || "Not specified"}
      </p>
      <p>
        <strong>Treatment:</strong> {treatment}
      </p>
      <p>
        <strong>Patients:</strong> {patients}
      </p>
      <p>
        <strong>Plartform:</strong> {plartform}
      </p>
      <p>
        <strong>Note:</strong> {notes}
      </p>
    </div>
  );
}

