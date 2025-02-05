import Rate from "./Rate"
import dot from "../assets/images/dots.png"

const AllRate = () => {
    const data = [
        {
            id: "1",
            num:"115K+",
            title:"Active users",
            className: "border-r"
        },
        {
            id: "2",
            num:"88K+",
            title:"Passive users",
            className: "border-r"
        },
        {
            id: "3",
            num:"30%",
            title:"Increase in users",
            className: "border-r"
        },
        {
            id: "4",
            num:">10K",
            title:"Good Testimonials",
            className: ""
        },
    ]

  return (
    <div className="relative">
    <div className="flex justify-center pt-10 pb-10 lg:py-10">
        {data.map(each => {
            return <Rate key={each.id} num={each.num} title={each.title} className={each.className}/>
        })}
      
    </div>
    <img src={dot} alt="" className="w-10 md:w-20 absolute right-0 -top-10"/>
    </div>
  )
}

export default AllRate
