import './App.css';

function Food ({foodlist}){
    return(
    <div className="food">
       
        {foodlist.map ((element => {
            const {id, name, price, searchTerm, image, desctiption, addition} = element;
            return <div key={id} className="card">
                <div className="card-box">
                <h3 className="mealname">{name}</h3>
                <img src={image} alt="food" width="183px" height='106px' />
                <p className="descr">{desctiption}</p>
                <p className='addition'>{addition}</p>
                <p className='price'>{price}</p>
                </div>
                <div className='none'>
                    <p>{searchTerm}</p>
                </div>
            </div>
        }))}
    </div>
    )
}

export default Food;
