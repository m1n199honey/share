import React from "react"
import Accordion from 'react-bootstrap/Accordion';
export default function HomePage() {
  return <>
    <div className="relative w-screen h-screen wrapper">
      {/* <div className="absolute z-0 w-screen h-screen bg-pink-300 svg-background">here is SVG ...</div> */}
      <MainBody />
    </div>
  </>
}
interface MenuProps {
  type: string,
  items: Array<{
    name: string,
    price: string,
    img: string,
  }>
}
const MainBody: React.FC = () => {
  const menuProps: Array<MenuProps> = [
    {
      type: "drink",
      items: [
        {
          name: "Asdfg",
          price: "2345",
          img: "wert.png"
        },
      
      ]
    },
    {
      type: "food",
      items: [
        {
          name: "asdfg",
          price: "2345",
          img: "wert.png"
        },
    
      ]
    },
  ];

  return <div className="main-body absolute top-0 w-screen h-[1200px] z-10 bg-green-600 bg-opacity-35">
    <Title name="Title" />
    <div className="fixed top-10 z-30 py-1 w-screen h-screen bg-gray-800 bg-opacity-40 menu">
      <Accordion defaultActiveKey="0">
        {menuProps.map((item, i) => {
          return <MenuItem key={i} index={i} fooType={item} />
        })}
      </Accordion>
    </div>
    <div className="menu-toggle-button fixed top-[45%] -right-[5rem] w-[10rem] h-[10rem] bg-white rounded-[10rem] z-50"></div>
  </div>
}

const AccordionItem: React.FC<{ index: number, items: { name: string, price: string, img: string } }> = ({ items }) => {
  return (
    <div className="flex justify-between items-center px-2">
      <div className="text-xl">
        {items.name}
      </div>
      <div className="font-bold">
        ₹{items.price}
      </div>
      {/* <div>
        <img src={items.img} alt={`${items.name} ${index}`}/>
      </div> */}
      {/* <div className="flex justify-around"> */}
      {/* </div> */}
    </div>
  );
}

const MenuItem: React.FC<{ index: number, fooType: MenuProps }> = ({ index, fooType }) => {
  return <Accordion.Item eventKey={`${index}`} >
    <Accordion.Header className="font-bold uppercase">
      {/* Accordion Type */}
      {fooType.type}
    </Accordion.Header>
    <Accordion.Body>
      {fooType.items.map((item, i) => {
        return (
          <>
            <AccordionItem items={item} index={i} />
          </>
        )
      })}
    </Accordion.Body>
  </Accordion.Item>
}
const Title: React.FC<{ name: string }> = ({ name }) => {
  return <>
    <div className="fixed top-0 z-20 w-full h-10 text-center bg-red-400 title">{name}</div>
  </>
}