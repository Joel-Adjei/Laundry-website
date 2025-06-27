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

                {/* Message Display (Success/Error/Info) */}
                {message && (
                    <div className={`
                        ${'confirmation' === 'confirmation' ? 'bg-green-100 border-green-400 text-green-700' : 'bg-yellow-100 border-yellow-400 text-yellow-700'}
                            px-4 py-3 rounded-lg relative mb-6
          `                 }>
                        <strong className="font-bold">Info!</strong>
                        <span className="block sm:inline ml-2">{message}</span>
                    </div>
                )}

                <div>
                    <BookingForm />
                </div>

            </AppSection>
        </>
    )
}

export default Book;