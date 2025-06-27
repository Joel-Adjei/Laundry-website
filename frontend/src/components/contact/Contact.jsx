import React from "react";
import AppHeader from "@/components/primary/text/AppHeader";
import AppSection from "@/components/primary/AppSection";
import AppText from "@/components/primary/text/AppText";

const Contact =()=>{
    return(
        <AppSection id={"Contact"} className={"bg-gray-50"}>

            <AppHeader
                title_1={"Contact "}
                title_2={"Us"}
            />

            <div>
                {/* Main Content Area */}
                <main className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* Contact Information Section */}
                    <section className="flex flex-col justify-center">
                        <h2 className="text-2xl font-semibold text-blue-800 mb-6 pb-2 border-b-1 border-green-500">
                            Our Details
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-center text-gray-700">
                                <svg className="w-6 h-6 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <AppText className="text-lg">123 Laundry Lane, Accra, Ghana</AppText>
                            </div>
                            <div className="flex items-center text-gray-700">
                                <svg className="w-6 h-6 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                <AppText className="text-lg">055 680 7422 / 050 570 5463</AppText>
                            </div>
                            <div className="flex items-center text-gray-700">
                                <svg className="w-6 h-6 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <AppText className="text-lg">info@laundryservice.com</AppText>
                            </div>
                        </div>
                    </section>

                    {/* Google Map Section */}
                    <section className="w-full h-80 md:h-full ">
                        <h2 className="text-2xl font-semibold text-blue-800 mb-6 pb-2 border-b-1 border-green-500 hidden md:block">Find Us</h2>
                        <iframe
                            title="Google Map Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.6380608779943!2d-0.1870636848135837!3d5.568478995963779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a1b9e1d871b%3A0x6b4c10c6d3b2e5d!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1678912345678!5m2!1sen!2sgh"
                            width="100%"
                            height="100%"
                            style={{ border: 0, borderRadius: '8px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </section>
                </main>
            </div>

        </AppSection>
    )
}

export default Contact;