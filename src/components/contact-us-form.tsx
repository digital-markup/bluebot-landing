import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
import addCustomerLead from "@/actions/add-customer-lead";

function ContactUsForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // add customer lead
    addCustomerLead({
      firstName: data.get("firstName") as string,
      lastName: data.get("lastName") as string,
      email: data.get("email") as string,
    }).then((response) => console.log(response));
  };

  return (
    <div className="bg-white rounded-2xl px-4 py-8 shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Label htmlFor="name">First Name</Label>
          <Input id="firstName" name="firstName" type="text" />
        </div>
        <div className="mb-4">
          <Label htmlFor="name">Last Name</Label>
          <Input id="lastName" name="lastName" type="text" />
        </div>
        <div className="mb-4">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="text" />
        </div>
        <div className="pt-6">
          <Button
            type="submit"
            variant="default"
            size={"lg"}
            className="w-full"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ContactUsForm;
