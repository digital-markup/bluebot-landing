import { IconType } from "react-icons/lib"

export type Customer = {
    firstName: string
    lastName: string
    email: string
}

export type BusinessType = {
    id: number
    name: string
    icon: IconType
}