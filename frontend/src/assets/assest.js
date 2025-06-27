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

// Data for halls and cities/towns
export const legonHalls = [
    'Commonwealth Hall',
    'Volta Hall',
    'Sarbah Hall',
    'Akuafo Hall',
    'Legon Hall',
    'Jubilee Hall',
    'African Union Hall (Pentagon)',
    'Valco Trust Hall',
    'Limann Hall',
    'Hilla Limann Hall',
    'Elizabeth Sey Hall',
    'Jean Nelson Aka Hall',
    // Add more halls as needed
];

export const accraCitiesTowns = [
    'Accra Central',
    'Tema',
    'Madina',
    'Osu',
    'Labadi',
    'East Legon',
    'Lapaz',
    'Dansoman',
    'Spintex',
    'Achimota',
    // Add more cities/towns as needed
];

// Laundry basket sizes and their details (price and placeholder image URL)
export const basketSizes = [
    {
        id: 'small',
        name: 'Small Basket',
        price: 15.00,
        imageUrl: '', // Placeholder for small basket
    },
    {
        id: 'medium',
        name: 'Medium Basket',
        price: 25.00,
        imageUrl: '', // Placeholder for medium basket
    },
    {
        id: 'large',
        name: 'Large Basket',
        price: 35.00,
        imageUrl: '', // Placeholder for large basket
    },
];
