import logo from './images/logo.png'
import washingM from  './images/washing-machines.jpg'
import laundryB from  './images/laundrybag.jpg'
import React from "react";
import manIron from "./images/man-ironing.jpg";
import washM from './images/washing-mash.jpg';
import packageC from "./images/pack-cloths.jpg"
import delivery from './images/delivery.jpg'

export const images = {
    mainLogo: logo,
    washingMachines: washingM,
    laundry_bag : laundryB,
    pack_cloths : packageC,
    washingMach : washM,
    manIroning : manIron,
    delivery : delivery
};

export const colors = {
    gradientColor :"bg-gradient-to-r from-blue-700 to-green-600",
};

export const services = [
    {title : "Washing" , image: images.washingMach },
    {title : "Ironing" , image: images.manIroning},
    {title : "Neat packaging" , image: images.pack_cloths}
];
