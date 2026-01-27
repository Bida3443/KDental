import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  time: string;
  notes: string;


}
export function EmailComponent({
  name,
  email,
  phone,
  time,
  notes,
}: EmailTemplateProps) {
    return(
        <div>
      <h2>New Dental Contact</h2>
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
        <strong>Time:</strong> {time || "Not specified"}
      </p>
      
      <p>
        <strong>Note:</strong> {notes}
      </p>
    </div>
    )

}
  
