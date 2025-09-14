import { images } from "@/assets/assest";
import { useNaems } from "@/context/NaemsContext";
import React, { useEffect, useRef, useState } from "react";
import OutlineButton from "../primary/Buttons/OutlineButton";
import { Minus, PlusIcon } from "lucide-react";

const ItemCard = ({ item, value, setField , handleSelect }) => {
    const price = useRef(item.price); // Changed from useState to useRef
    const count = useRef(0); // Changed from useState to useRef
    const selected = useRef(false);

    const { totalItems, updatePrice, totalPrice, itemStatus } = useNaems();

    const fixedPrice = item.price;

    const [iteM, setItem] = useState({
        id: item.id,
        label: item.name,
        count: count.current, // Use count.current
        fixedPrice: item.price,
        totalPrice: price.current, // Use price.current
    });

    useEffect(() => {
        const checkItem = totalItems.find(({ id }) => id === item.id);
        if (checkItem) selected.current = true;
    }, []);

    useEffect(() => {
        setItem((prev) => ({
            ...prev,
            count: count.current, // Use count.current
            totalPrice: price.current, // Use price.current
        }));
        updatePrice(item.id, iteM.totalPrice, count.current); // Set price dynamically

        totalPrice();
    }, [count.current]); // Use count.current

    const handleQuantityChange = () => {
        const selected = [...value.selectedItems];
        const index = selected.findIndex((selectedItem) => selectedItem.id === item.id);
    
        if (index !== -1) {
          // Update the quantity of the selected item
          selected[index].count = count.current;
            selected[index].totalPrice = price.current;
          setField("selectedItems", selected); // Update Formik state
        }
      };

    const toggleSelect = () => {
        if (selected.current) {
            selected.current = false;
            price.current = fixedPrice; // Reset price
            itemStatus(iteM, "remove");
            count.current = 0; // Reset count
        } else {
            selected.current = true;
            itemStatus(iteM, "add");
            count.current = 1; // Set count to 1
        }
    };

    const handleIncrement = () => {
        count.current += 1; // Increment count
        price.current = fixedPrice * count.current; // Update price using useRef
        setField("price", price.current); // Set price dynamically
        setItem((prev) => ({
            ...prev,
            count: count.current, // Update count in iteM
            totalPrice: price.current,
        }));
        handleQuantityChange(); // Update Formik state
    };

    const handleDecrement = () => {
        if (count.current > 0) {
            count.current -= 1; // Decrement count
            price.current = fixedPrice * count.current; // Update price using useRef
            setField("price", price.current); // Set price dynamically
            setItem((prev) => ({
                ...prev,
                count: count.current, // Update count in iteM
                totalPrice: price.current,
            }));
            handleQuantityChange(); // Update Formik state
        }
    };

    const handleCardSelect = () => {
        toggleSelect(); // Set price dynamically
        handleSelect(iteM, value, setField)
    };

    return (
        <div
            key={item.id}
            className={`border-2 rounded-xl p-4 flex flex-col items-center justify-center transition duration-300 ease-in-out transform hover:scale-103 hover:shadow-lg
                          ${selected.current ? "border-green-500 bg-green-50 shadow-md" : "border-green-200 bg-white"}
                        `}
        >
            <img
                src={images.laundry_bag}
                alt={`${item.name} Laundry Basket`}
                className="w-24 h-24 mb-3 rounded-lg object-cover cursor-pointer "
                onClick={handleCardSelect}
            />
            <span className="text-lg font-medium text-gray-700">{item.name}</span>
            <span className="text-xl font-bold text-green-900 mt-1">
                GHS {price.current.toFixed(2)}
            </span>

            <div aria-disabled={!selected.current} className={"flex gap-5 disabled:cursor-not-allowed"}>
                <OutlineButton
                    type={"button"}
                    title={<Minus className="size-5" />}
                    disabled={!selected.current || count.current <= 1}
                    onClick={handleDecrement}
                    className={
                        "px-[8px] cursor-pointer disabled:border-slate-200 disabled:cursor-not-allowed border-slate-400 text-slate-400 hover:text-slate-400 hover:border-slate-300"
                    }
                />

                <input
                    value={count.current}
                    className={" w-7 text-center disabled:cursor-not-allowed disabled:text-slate-200"}
                    disabled={!selected.current}
                    readOnly
                />
                <OutlineButton
                    type={"button"}
                    title={<PlusIcon className="size-5" />}
                    disabled={!selected.current}
                    onClick={handleIncrement}
                    className={
                        "px-[8px] cursor-pointer disabled:border-slate-200 disabled:cursor-not-allowed border-slate-400 text-slate-400 hover:border-slate-300"
                    }
                />
            </div>
        </div>
    );
};

export default ItemCard;