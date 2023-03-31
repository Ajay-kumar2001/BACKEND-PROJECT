import "./Prod.css"
let Prod=(props)=>{
    let data=props.data
    let imgurl="http://localhost:5000/images/"+data.pimgname
    return(
        <div>
            <h1>pname:{data.pname}</h1>
            <img src={imgurl} alt="imagtext"/>
            <p>Price:{data.price}</p>
            <button>Add cart</button>
        </div>

    )
}
export default Prod