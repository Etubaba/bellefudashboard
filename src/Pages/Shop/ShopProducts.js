import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const ShopProducts = () => {
  //const shopSlug = useSelector(state => state.login.shopSlug);
  const {shopSlug} = useParams();
  const [shopProducts, setShopProducts] = useState([]);

  useEffect(() => {
    const getShopProducts = async () => {
      try {
        const res = await axios.get(`https://bellefu.inmotionhub.xyz/api/shop/view/single/${shopSlug}`);
        setShopProducts(res.data.data);
      } catch (error) {
        console.log(error.message);
      }
    }

    if (shopSlug) getShopProducts();
  }, [shopSlug]);


  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    //justifyContent: "space-between",
  }
  const itemStyle = {
    ...containerStyle,
  }
  const descriptionStyle = {
    ...containerStyle,
    justifyContent: "space-between",
    flexWrap: "nowrap",
    alignItems: "center",
    marginTop: "-30px",
    marginBottom: "-30px",
    paddingTop: "0px",
    paddingBottom: "0px",
  }
  return (
    <div>
      { shopProducts.length && 
        <>
          <h1 style={{textAlign: "center",}}><span>Shop Name</span> <span style={{textTransform: "uppercase"}}>{shopProducts[0].shopName}</span></h1> 
          <div>
            {shopProducts.map(shopProduct => (<div style={itemStyle}>
              <div>
                <img src={`https://bellefu.inmotionhub.xyz/get/product/image/${shopProduct.images[0]}`} alt={shopProduct.title} width={200} height={200} />
              </div>
              <div style={{paddingLeft: "15px"}}>
                <p><span>Name</span>: {shopProduct.title}</p>
                <div style={descriptionStyle}>
                  <p>Description:</p> <p dangerouslySetInnerHTML={{__html: shopProduct.description}}></p>
                </div>
                <p><span>Normal Price</span>: <span dangerouslySetInnerHTML={{__html: shopProduct.currencySymbol}}></span>{shopProduct.price}</p>
                <p><span>Promo Price</span>: <span dangerouslySetInnerHTML={{__html: shopProduct.currencySymbol}}></span>{shopProduct.promoPrice}</p>
                <p><span>Product Plan</span>: {shopProduct.planName}</p>
                <p><span>Owner</span>: {shopProduct.username}</p>
              </div>
            </div>
          ))}
          </div>
        </>
      }
    </div>
  )
}

export default ShopProducts;