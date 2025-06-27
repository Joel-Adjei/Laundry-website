import React, {useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import {useNaems} from "@/context/NaemsContext";
import Loading from "@/components/Loading";
import Book from "@/pages/Book";

const BookLayout = () => {

    return (
        <div>
            <Book />
            <div>
                <Outlet />
            </div>

        </div>
    )
}

export default BookLayout