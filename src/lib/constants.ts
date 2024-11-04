import { BusinessType } from "@/types/index.types";
import { FcDonate, FcGraduationCap, FcHome, FcLike, FcPaid, FcStart } from "react-icons/fc";
import { FaTshirt } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";

export const businessItems: BusinessType[] = [
    {
        id: 1,
        name: "Health & Wellness",
        icon: FcLike
    },
    {
        id: 2,
        name: "Finance",
        icon: FcDonate
    },
    {
        id: 3,
        name: "Education",
        icon: FcGraduationCap
    },
    {
        id: 4,
        name: "E-commerce",
        icon: FcPaid
    },
    {
        id: 5,
        name: "Digital Marketing",
        icon: FcStart
    },
    {
        id: 6,
        name: "Retail & Fashion",
        icon: FaTshirt
    },
    {
        id: 7,
        name: "Real Estate",
        icon: FcHome
    },
    {
        id: 8,
        name: "Pet Care & Products",
        icon: MdOutlinePets
    }
];

