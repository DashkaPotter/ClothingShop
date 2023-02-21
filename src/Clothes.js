
function Clothes({itemsForSale}){
    return(
        <div className="products">
            {itemsForSale.map((element =>{
                const {id,name,searchTerm,price,image} = element;
                return(
                    <div key={id} className="product-card">
                        <img src={image} width="400px" height="500px" alt="pic"/>
                        <div className="product-info">
                            <h3>{name}</h3>
                            <h4>{searchTerm}</h4>
                            <h4>${price}</h4>

                        </div>
                    </div>
                )
            }))}
        </div>
    )
}
export default Clothes;