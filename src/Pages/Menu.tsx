import { useEffect, useState } from "react";

interface Menu{
    name: string;
    type: string;
    price: number;
}

export default function Menu()
{
    const [food,setFood] = useState([] as Menu[]);
    
    useEffect(()=>{
        async function LoadData(){
        const response = await fetch('http://localhost:3000/menu');
        if (response.ok) {
          const data = await response.json() as Menu[];
          setFood(data);
      }
      else{
          const errorOsbj = await response.json();
        
      }
    }
    console.log(food);
    LoadData();
    },[])

    return(
        <div>
      {food.map((x,item)=><p key={item}>{x.name}</p>)}
    </div>
    )
}
