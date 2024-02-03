import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/mainblog.jpg'

const PostDetail = () => {
  return (
    
    <section className="post-detail">
      <div className="container post detail__container">
         <div className="post-detail_header">
          <PostAuthor/>
         <div className="post-detail__buttons">
          <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
          <Link to={`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>
          
        </div>
     </div>
     <h1>Filipino Cousine</h1>
     <div className="post-detail__thumbnail">
      <img src={Thumbnail} alt="" />
     </div>

     <p>
     Food is essential for our bodies because it provides the energy and nutrients they need to function. For this reason, everyone is encouraged to eat a balanced diet, which is easily achieved when you eat foreign cuisine because it exposes you to various new flavors and ingredients. Filipino cuisine is notable for its usage of various types of meat, including chicken, pork, beef, and seafood, which are often cooked in soups or sauces. Conversely, rice is also a staple food, and to say that Filipinos can’t live without it is an understatement. Because of this, Filipino cuisine is a perfect example of the saying, “variety is the spice of life.” However, many people tend to shun Filipino food because they think it ss too greasy or flavorful. This is nott always the case, and if you do not see its value, here are some reasons you should eat Filipino food
     </p>

     <p>
     Filipino food is simple to cook and always a pleasure to serve and eat. The blend of flavor and texture makes for bold cuisine. The typical Filipino meal is composed of vegetables, seafood, dairy, meat, and rice. In fiestas, food is displayed, in all its appetizing and mouth-watering color, in every home as an aesthetic.
     </p>

     <p>
     It is characterized by the combination of three flavors: sweet, sour, and salty. Compared to other Southeast Asian countries, spices and heat don’t figure as prominently in traditional Filipino cuisine. Garlic, ginger, bay leaves, and black pepper are most often used. Filipinos encourage the use of sawsawan, or dipping sauces. This is usually a combination of calamansi (a Philippine lime), soy sauce, vinegar, fish sauce, onions, garlic, and chilies. As in most Asian countries, the staple food in the Philippines is rice. It is most often steamed and always served with meat, fish, and vegetable dishes. Leftover rice is often fried with garlic to make sinangag, which is usually served at breakfast together with a fried egg and cured meat or sausages.
     </p>

     <p>
     In the end, Filipino cousine is the best menu for everyone because it can eat by anyone even for international person. In our menu, you can find any types of taste that you want to eat and try, spicy, sour, sweet, you name it and we have it in our menu. Thank you for visiting my blog I hope you enjoy your stay here and I hope to see you soon again for my new blogs. 
     
     </p>
     
      </div>

      
    </section>
  )
}

export default PostDetail
