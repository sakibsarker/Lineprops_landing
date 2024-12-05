"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import Icon from "../Icon";
import Link from "next/link";

function ContactsSection() {
  const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    companyName: z.string().optional(),
    role: z.string().optional(),
    phoneNumber: z
      .string()
      .min(10, { message: "Phone number must be at least 10 digits." }),
    country: z
      .string()
      .min(2, { message: "Country must be at least 2 characters." }),
    message: z.string().optional(),
  });

  type FormValues = z.infer<typeof formSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const [isFormVisible, setFormVisible] = useState(false);
  const [isSuccessfull, setSuccessfull] = useState(false);

  const toggleForm = () => {
    setFormVisible(!isFormVisible);
    setSuccessfull(false);
  };

  const onSubmit = (values: FormValues) => {
    console.log(values);
    setSuccessfull(true);
  };

  const [backgroundImage, setBackgroundImage] = useState("/footer-bg.png");
  useEffect(() => {
    const handleResize = () => {
      const imageUrl =
        window.innerWidth <= 768 ? "/mobile-footer-bg.png" : "/footer-bg.png";
      setBackgroundImage(imageUrl);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="contacts">
      <div className="relative">
        <div>
          <Image
            src={backgroundImage}
            height="50"
            width="1920"
            alt="footer bg"
            className="w-full"
          />
          <div className="absolute z-20 top-0 left-[50%] translate-x-[-50%] w-full max-w-[1702px] h-full flex max-md:flex-col items-center justify-center md:justify-between md:flex-row flex-col px-[30px] max-md:py-[56px] md:px-6 lg:px-16 xl:px-20 max-md:gap-3">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white font-light text-base sm:text-2xl lg:text-4xl xl:text-[40px] leading-snug max-md:text-center"
            >
              <p className="font-openSans font-light text-[16px] md:text-[40px] leading-[108%] text-white text-center md:text-left mx-auto max-w-[324px] md:max-w-[522px]">
                <span className="font-bold">200% bonus</span>
                {""} is simply dummy text of the printing and typesetting
                industry.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* <button onClick={() => toggleForm()}
                    className={`btn-2 w-[219px] md:w-[394px] py-[15px] px-10 rounded-lg bg-transparent border-[3px] md:border-[6px] border-[#f01e2a] text-white max-w-full mx-auto md:ml-0 h-[51px] md:h-auto md:[91px]`}
                  >
                    <div className={`font-semibold text-sm sm:text-base md:text-xl lg:text-2xl xl:text-[32px]`}>Contact us</div>
                    <Icon iconName={isFormVisible ? 'chevronDown':'chevronRight'} iconColor={'white'} width={50} height={50} className="icon icon-tabler icon-tabler-chevron-right"  />
                  </button> */}
              <button
                className="flex justify-between items-center font-openSans font-bold text-[14px] md:text-[16px] xl:text-[20px] leading-[108%] text-[#EEE] py-[7px] md:py-[12px] px-[22px] md:pl-[45px] md:pr-[25px] h-[51px] md:h-[60px] xl:h-[65px] w-[219px] md:w-[240px] xl:w-[283px] border-[3px] md:border-[4px] border-solid border-[#F01E2A] rounded-[5px] md:rounded-[10px] mt-[11px] md:mt-[35px] xl:mt-[65px] uppercase hover:duration-300 btn-2"
                onClick={() => toggleForm()}
              >
                Contact us
                <Icon
                  iconName={isFormVisible ? "chevronDown" : "chevronRight"}
                  iconColor={"white"}
                  width={30}
                  height={30}
                  className="icon icon-tabler icon-tabler-chevron-right"
                />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isFormVisible && !isSuccessfull && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="p-4 bg-white sm:grid grid-cols-12"
          >
            <div className=" col-span-4 pt-[50px] md:pt-24 lg:ps-16">
              <h3 className="font-openSans font-bold text-[24px] md:text-[32px] leading-[108%] text-[#333333]">
                CONTACT US
              </h3>
              <div className="mt-2">
                <p className="font-openSans font-light text-[16px] md:font-[20px] leading-[108%] text-[#B9B9B9]">
                  <span className="font-bold">Send us a message </span>
                  and <br /> we will get in touch with <br /> you.
                </p>
              </div>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className=" col-span-8 sm:grid grid-cols-2 gap-8 "
              >
                <div className=" col-span-1 space-y-4 my-8 ">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Name*" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Email*" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Company Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Role" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Phone Number*" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Country*" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className=" col-span-1 space-y-8 my-8">
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder="Message"
                            {...field}
                            className=" h-60"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* <button type="submit"
                    className={`btn-2 sm:w-[15vw] w-[80vw]  p-2 rounded-lg bg-[#F01E2A] text-white  `}
                  >
                    <div className={`font-semibold `}>SEND MESSAGE</div>
                    <Icon iconName={'chevronRight'} iconColor={'white'} width={30} height={30} className="icon icon-tabler icon-tabler-chevron-right"  />
                  </button> */}
                  {/* <button className="flex justify-between items-center font-openSans font-bold text-[12px] md:text-[16px] xl:text-[20px] leading-[108%] text-black py-[7px] md:py-[12px] px-[7px] md:pl-[45px] md:pr-[25px] h-[35px] md:h-[60px] xl:h-[65px] w-[150px] md:w-[240px] xl:w-[283px] border-[1px] md:border-[4px] border-solid border-[#F01E2A] rounded-[5px] md:rounded-[10px] mt-[11px] md:mt-[35px] xl:mt-[65px] uppercase btn-2" onClick={() => toggleForm()}>
                    SEND MESSAGE
                    <Icon iconName={'chevronRight'} iconColor={'black'} width={30} height={30} className="icon icon-tabler icon-tabler-chevron-right"  />
                  </button> */}
                  <button className="flex justify-between items-center font-openSans font-bold text-[14px] md:text-[16px] xl:text-[20px] leading-[108%] text-[#EEE] py-[7px] md:py-[12px] px-[22px] md:pl-[45px] md:pr-[25px] h-[51px] md:h-[60px] xl:h-[65px] w-[219px] md:w-[240px] xl:w-[283px] border-[1px] md:border-[4px] border-solid border-[#F01E2A] bg-[#F01E2A] rounded-[5px] md:rounded-[10px] mt-[11px] md:mt-[35px] xl:mt-[65px] uppercase hover:duration-300">
                    SEND MESSAGE
                    <Icon
                      iconName={"chevronRight"}
                      iconColor={"#EEE"}
                      width={30}
                      height={30}
                      className="icon icon-tabler icon-tabler-chevron-right"
                    />
                  </button>
                </div>
              </form>
            </Form>
          </motion.div>
        )}
      </AnimatePresence>

      {isSuccessfull && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-4 min-h-96 items-center justify-center flex flex-col"
        >
          <div className="bg-white p-4 min-h-96 items-center justify-center flex flex-col">
            <div className=" flex gap-4">
              <div className="h-8 w-8 items-center justify-center">
                <Image
                  src="/send.png"
                  layout="responsive"
                  height={2}
                  width={2}
                  quality={20}
                  alt="Background Image"
                />
              </div>
              <div className="text-3xl font-bold font-openSans">
                Message Sent
              </div>
            </div>
            <div className="mt-[22px] text-center">
              <p className="font-openSans font-light text-[16px] md:text-[20px] leading-[107%] text-[#B9B9B9]">
                <span className="font-bold">Thank you for your message, </span>
                we will contact you as soon as possible.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default ContactsSection;
