import React from "react";
import CardItem from "./CardItem";
import img9 from '../images/img-9.jpg';
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={img9}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="https://www.sailbali.com/wp-content/uploads/2018/07/sail-bali-2.jpg"
              text="Visit the beautiful island of Bali on a private cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://www.eblf.com/azure/files/ContentFiles/1213Image.jpg?w=673&h=440&mode=crop&scale=both"
              text="Earn Airline Miles through these hot deals"
              label="Flight"
              path="/services"
            />
            <CardItem
              src="https://ak.jogurucdn.com/media/image/p17/place-2016-05-2-7-Rome9d0e24f9716aa0860f90b64e954609a8.jpg"
              text="Immerse yourself in these historic locations"
              label="Historical"
              path="/services"
            />
            <CardItem
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNny4KVBH2JAPs_QN0jJtp4MLmJfB_QnHUhA&usqp=CAU"
              text="Traverse majestic sand dunes in these exotic selections"
              label="Desert"
              path="/services"
            />
            <CardItem
              src="https://ak-d.tripcdn.com/images/100o1a0000018xtj56B0C_Z_640_10000.jpg"
              text="Breathtaking views from the top of the world"
              label="Hike"
              path="/services"
            />
          </ul>
         
        </div>
      </div>
      
    </div>
  );
}

export default Cards;
