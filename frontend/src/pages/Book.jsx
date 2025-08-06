import React from 'react';
import { TextAnimate } from "@/components/magicui/text-animate";
import AppSection from "@/components/primary/AppSection";
import AppHeader from "@/components/primary/text/AppHeader";
import BookingForm from "@/components/book/BookingForm";
import {useNaems} from "@/context/NaemsContext";

const Book =()=>{
    const {message} = useNaems()

    return(
        <>
            <AppSection className={"mt-10"}>
                <AppHeader title_1={"Book"} />

                <div>
                    <BookingForm />
                </div>

            </AppSection>
        </>
    )
}

export default Book;