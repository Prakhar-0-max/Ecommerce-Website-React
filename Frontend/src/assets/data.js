import p1_img from '../assets/p1.jpg'
import p2_img from '../assets/p2.jpg'
import p3_img from '../assets/p3.avif'
import p4_img from '../assets/p4.jpg'

let data_product= [
     {
            id: 1,
            name: "Kurti",
            category: "women",
            image: p1_img,
            new_price: 999,
            old_price: 1499
        },
    
        { id: 2, name: "One Piece", category: "women", image:p2_img, new_price: 999, old_price: 1299 },
        { id: 3, name: "Saree", category: "women", image:p3_img, new_price: 399, old_price: 699 },
        { id: 4, name: "Jacket", category: "men", image: p4_img, new_price: 799, old_price: 899 }
]

export default data_product;