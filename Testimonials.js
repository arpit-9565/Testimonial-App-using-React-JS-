import Card from './Card.js';
import {FiChevronLeft,FiChevronRight} from "react-icons/fi";
import {useState} from 'react';

function Testimonials(props){
    let reviews=props.reviews;
    const[id,setId]=useState(0);

    function leftShiftHandler(){
        let currId=id===reviews.length-1?0:id+1;
        setId(currId);
    }

    function rightShiftHandler(){
        let currId=id===0?reviews.length-1:id-1;
        setId(currId);
    }

    function surpriseHandler(){
        let currId=Math.floor(Math.random()*5);
        setId(currId);
    }

    return(
        <div className="flex flex-col w-[85vw] md:w-[700px] bg-white justify-center items-center mt-10 p-10 transition-all duration-700
        hover:shadow-xl">
                <div><Card review={reviews[id]}></Card></div>
                <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto">
                <button 
                onClick={leftShiftHandler}
                className="cursor-pointer hover:text-violet-500"><FiChevronLeft/></button>
                <button
                onClick={rightShiftHandler}
                className="cursor-pointer hover:text-violet-500"><FiChevronRight/></button>
                </div>
                
                <div className="mx-auto mt-[6px]">
                <button 
                onClick={surpriseHandler}
                className="bg-violet-400 hover:bg-violet-500 transition:all duration
                -200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg">Surprise Me</button>
                </div>         
        </div>
    );
}

export default Testimonials;