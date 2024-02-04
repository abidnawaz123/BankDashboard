import { ActivityChart } from "../components/Charts/ActivityChart/Chart"
import { ExpenseChart } from "../components/Charts/ExpenseChart/Chart"
import CustomCreditCard from "../components/shared/customCard/customCard"
import TransactionDetails from "../layout/pages/dashboard/recent/Transaction"
import { images } from "./images"

//dashboard top section data 
const dashboardTopCardData = {
    currentBalance: 576,
    cardHolder: "Abid Nawaz",
    validThru: "12/24//2024",
    cardNumber: "3730 **** **** 1234",
}

export const DashboardHeadingCardList = [
    { heading: "My Cards", component: <CustomCreditCard otherCard cardDetails={dashboardTopCardData} /> },
    { heading: "See All", component: <CustomCreditCard cardDetails={dashboardTopCardData} /> },
    { heading: "Recent Transactions", component: <TransactionDetails otherCard /> },
]

//dashboard middle section
export const dashboardGraphSection = [
    { name: "Weekly Activity", align: "left", component: <ActivityChart /> },
    { name: "Expense Statistics", align: "right", component: <ExpenseChart /> },
]

export const contactList = [
    { name: "Livia Bator", image: images.person1, status: "CEO" },
    { name: "Randy Press", image: images.person2, status: "Director" },
    { name: "Workman", image: images.person3, status: "Designer" },
]