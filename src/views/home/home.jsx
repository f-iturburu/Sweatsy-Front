import { useEffect, useState } from "react"
import Loader from "../../layouts/loader/loader"
import WorkoutCard from "./workoutCard"

function Home (){
   const [loader,setLoader] = useState()

   useEffect(()=>{

   },[])

   const fetchApi = () =>{

   }

    return <>
    <section className="container-fluid bg-body min-height-100 w-100 d-flex justify-content-center"> 
    
    <div className="m-auto text-center">
    <div className="container-fluid d-flex text-center ">
    <i className="fa-solid fa-dumbbell fa-2x text-light my-auto"></i>
        <h1 className="text-light mb-0 ms-2 my-auto ">My workouts</h1>
    </div>


        <div>
            <WorkoutCard />
        </div>
    </div>
    </section>
    </>
}

export default Home