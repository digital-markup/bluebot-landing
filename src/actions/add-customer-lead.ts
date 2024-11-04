import { db } from "@/firebase.config";
import { Customer } from "@/types/index.types";
import { addDoc, collection } from "@firebase/firestore";

const addCustomerLead = async (customer: Customer) => {
    try {
        // add query here
        const reference = await addDoc(collection(db, "customers"), {
            ...customer,
            timeStamp: new Date(),
        });
        return {
            status: 200,
            message: "Registered successfully",
            reference: reference.id,
        }
    } catch (error) {
        console.log(`Error: ${error}`)
        return
    }
}

export default addCustomerLead