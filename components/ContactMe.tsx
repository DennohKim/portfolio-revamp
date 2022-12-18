import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Props = {};

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;

};

const ContactMe = (props: Props) => {

    const { handleSubmit, register, formState: { errors } } = useForm<Inputs>();
    const onSubmit:  SubmitHandler<Inputs> = formData => {
        window.location.href = `mailto:kimathidennis38@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}(${formData.email})`;
    };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 sm:text-md md:text-2xl lg:pb-10 ">
        Contact
      </h3>
      <div className="flex flex-col space-y-6 mt-12">
        <h4 className="xs:text-xl md:text-3xl font-semibold text-center">
          I have got just what you need.
          <span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-3 justify-center ">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"  />
            <p className="xs:text-lg md:text-xl">+254743312265</p>
          </div>

          <div className="flex items-center space-x-3 justify-center ">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"  />
            <p className="xs:text-lg md:text-xl">kimathidennis38@gmail.com</p>
          </div>

          <div className="flex items-center space-x-3 justify-center ">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"  />
            <p className="xs:text-lg md:text-xll">Nairobi Garage, General Mathenge, Westlands</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 xxs:w-3/4 md:w-full mx-auto ">
            <div className="flex  xxs:flex-col md:flex xs:space-x-0 xxs:space-y-2">
                <input {...register('name')} placeholder="Name"  type="text"   className="contactInput"/>
                <input {...register('email')} placeholder="Email"  type="email" className="contactInput"/>
            </div>

            <input {...register('subject')} placeholder="Subject" type="text" className="contactInput"/>

            <textarea {...register('message')}  placeholder="Message" className="contactInput"/>
            <button type="submit" className="bg-[#f7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg ">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
