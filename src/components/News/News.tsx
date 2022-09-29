import React, {useState} from 'react';
import c from"/.News.module.css"
const News = () => {

    const [count, setCount] = useState<number>(0)
    const AddOne = () =>{
        setCount(count+1)
    }
    React.useEffect(()=>{
        console.log('WATCH COUNTER')
    },[])
    return (
        <div>
         {/*   {count}*/}
          News
           {/* <button onClick={AddOne}></button>*/}
        </div>
    );
};

export default News;