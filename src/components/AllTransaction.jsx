import Transaction from "./Transaction"
import pic1 from "../assets/images/healthicons.png"
import pic2 from "../assets/images/fastapi.png"
import pic3 from "../assets/images/mdi_secure.png"

const AllTransaction = () => {
    const data = [
        {
            id: "1",
            title:"Vast Institutions & Applications",
            desc:"Have access to a vast collection of universities and institutions where you can pay expenses to.",
            img: pic1,
            className: ""
        },
        {
            id: "2",
            title:"Instantaneous Transactions",
            desc:"Fast transactions processed in a working day or at most 3 working days.",
            img: pic2,
            className: ""
        },
        {
            id: "3",
            title:"Secure Payments",
            desc:"Make safe, secure and protected payments without fear of lose of funds.",
            img: pic3,
            className: ""
        },
        
    ]

  return (
    <div className="flex flex-col md:flex-row md:flex-wrap xl:flex-nowrap lg:justify-between xl:justify-start gap-4  p-2 md:px-10 lg:px-20 xl:px-28">
        {data.map(each => <Transaction key={each.id} title={each.title} desc={each.desc} pic={each.img}/> )}
    </div>
  )
}

export default AllTransaction
