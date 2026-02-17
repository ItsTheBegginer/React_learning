import picture from './assets/react.svg'

function Card(){
    return(
    <div className="card">
        <img class='card-img' src={picture}alt="" />
        <h2>Creatify</h2>
        <p>Hey how are you?</p>
            
    </div>
    );
}
export default Card