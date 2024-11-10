// import { useEffect,useState } from 'react';
// function Change() {
//     const [font , setFont] = useState("")
//     const [size , setSize] = useState(14)
//     const [color , setColor] = useState('#ff5733', '#33ff57', '#3357ff')
//     const [currentColor , setCurrentColor] = useState(color)

//     const colorStock = [
//         "#FF0000",  Red
//         "#FF7F00",  Orange
//         "#FFFF00",  Yellow
//         "#7FFF00",  Chartreuse
//         "#00FF00",  Green
//         "#00FF7F",  Spring Green
//         "#00FFFF",  Cyan
//         "#007FFF",  Sky Blue
//         "#0000FF",  Blue
//         "#7F00FF",  Violet
//         "#FF00FF",  Magenta
//         "#FF1493",  Deep Pink
//         "#FF69B4",  Hot Pink
//         "#FFB6C1",  Light Pink
//         "#FFD700",  Gold
//         "#FFA500",  Orange
//         "#FF4500",  Orange Red
//         "#DC143C",  Crimson
//         "#B22222",  Firebrick
//         "#FF6347",  Tomato
//         "#FF8C00",  Dark Orange
//         "#D2691E",  Chocolate
//         "#8B4513",  Saddle Brown
//         "#A0522D",  Sienna
//         "#F5DEB3",  Wheat
//         "#FFF8DC",  Cornsilk
//         "#FFE4B5",  Moccasin
//         "#FFDAB9",  Peach Puff
//         "#FFEFD5",  Papaya Whip
//         "#FFE4E1",  Misty Rose
//         "#F0E68C",  Khaki
//         "#BDB76B",  Dark Khaki
//         "#FFF0F5",  Lavender Blush
//         "#DDA0DD",  Plum
//         "#DA70D6",  Orchid
//         "#BA55D3",  Medium Orchid
//         "#9370DB",  Medium Purple
//         "#8A2BE2",  Blue Violet
//         "#4B0082",  Indigo
//         "#800080",  Purple
//         "#6A5ACD",  Slate Blue
//         "#483D8B",  Dark Slate Blue
//         "#4169E1",  Royal Blue
//         "#1E90FF",  Dodger Blue
//         "#00BFFF",  Deep Sky Blue
//         "#87CEEB",  Sky Blue
//         "#ADD8E6",  Light Blue
//         "#B0E0E6",  Powder Blue
//         "#AFEEEE",  Pale Turquoise
//         "#00CED1",  Dark Turquoise
//         "#20B2AA",  Light Sea Green
//         "#3CB371",  Medium Sea Green
//         "#2E8B57",  Sea Green
//         "#32CD32",  Lime Green
//         "#98FB98",  Pale Green
//         "#90EE90",  Light Green
//         "#8FBC8F",  Dark Sea Green
//         "#B0C4DE",  Light Steel Blue
//         "#D3D3D3",  Light Gray
//         "#A9A9A9",  Dark Gray
//         "#696969",  Dim Gray
//         "#708090",  Slate Gray
//         "#778899",  Light Slate Gray
//         "#F5F5F5",  White Smoke
//         "#FFFFFF",  White
//         "#FFFAFA",  Snow
//         "#F0FFF0",  Honeydew
//         "#F5FFFA",  Mint Cream
//         "#F0F8FF",  Alice Blue
//         "#E6E6FA",  Lavender
//         "#FFF0F5",  Lavender Blush
//         "#E0FFFF",  Light Cyan
//         "#AFEEEE",  Pale Turquoise
//         "#FFE4E1",  Misty Rose
//         "#D3FFCE",  Light Mint
//         "#FFD700",  Gold
//         "#FFFFE0",  Light Yellow
//         "#FAFAD2",  Light Goldenrod Yellow
//         "#FFEFD5",  Papaya Whip
//         "#E6E6FA",  Lavender
//         "#FFF5EE",  Seashell
//         "#FFB6C1",  Light Pink
//         "#FF69B4",  Hot Pink
//         "#FF1493",  Deep Pink
//         "#C71585",  Medium Violet Red
//         "#DB7093",  Pale Violet Red
//         "#F08080",  Light Coral
//         "#FF4500",  Orange Red
//         "#FFD700",  Gold
//         "#FFA07A",  Light Salmon
//         "#FF8C00",  Dark Orange
//         "#DDA0DD",  Plum
//         "#E6E6FA",  Lavender
//         "#FFF8DC",  Cornsilk
//         "#FFEBCD",  Blanched Almond
//         "#FFE4B5",  Moccasin
//         "#FFF5EE",  Seashell
//         "#F5DEB3",  Wheat
//         "#F0E68C",  Khaki
//         "#FFDAB9",  Peach Puff
//         ];

//     useEffect(()=>{
//         const intv=setInterval(()=>{
//             const newColors = colorStock.map(()=>{
//                 const randomColor = colorStock[Math.floor(Math.random() * colorStock.length)];
//                 return randomColor;
//             });
//             setCurrentColor(newColors)
//         },1000);
//             return ()=>clearInterval(intv);
//         },[]);
//         return (
//             <>
//             <div>
//          {currentColor.map((color,index)=>(
//             <div key={index} style={{width:'100px',height:'100px',backgroundColor:color}}>
//                  <h2 style={{color:'#fff'}}> Square{index +1}</h2>
//              </div>
//              </>
//         ))}
// {/* return ( */}
//     {/* // <div> */}
//     {/* //      {currentColor.map((color,index)=>( */}
//     {/* //         <div key={index} style={{width:'100px',height:'100px',backgroundColor:color}}> */}
//     {/* //              <h2 style={{color:'#fff'}}> Square{index +1}</h2> */}
//     {/* //          </div> */}
//     {/* //     ))} */}
//     {/* </div>
//     <div style={{backgroundColor:font}}>
//         <p style={{fontSize:size+'px'}}>dsjgfvdcgjdsavcjhabvcjscva ghscvcacjbsickxnjzhbiacuskcjbxnizxkujnccncxzb</p> 
//         <button onClick={()=>setSize(size+2)}>Increment Font</button>
//         <button onClick={()=>setSize(size-2)}>Decrement Font</button>
//         <input type='color' value={font} onChange={(event)=>setFont(event.target.value)}/>
//     </div> */}
// }
// export default  Change;