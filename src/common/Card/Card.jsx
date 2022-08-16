import './Card.css';
import axios from "axios";

const Card = ({ id, url, setModalActive, setChosenImage }) => {

    const cardClickedHandler = async (id) => {
        try {
            const response = await axios.get(`https://boiling-refuge-66454.herokuapp.com/images/${id}`);
            setChosenImage(response.data)
            setModalActive(true);
        } catch (error) {
            setChosenImage("error")
        }
    }

    return (
       <div className="card" onClick={() => cardClickedHandler(id)}>
        <img className="image" src={url} alt="img" />
        <p className="image_id">{id}</p>
    </div> 
    )
}
    



export default Card;
