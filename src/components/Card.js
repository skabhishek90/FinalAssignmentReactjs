import './card.css'
export default function Card(props){
   
    return(
        <div className='skillcard'>
            <img src={props.src} alt='' />
            {console.log(props.details)}
            <h1>{props.name}</h1>
            <p>{props.details}</p>
        </div>
    );
}

