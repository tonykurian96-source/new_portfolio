import Image from "next/image"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const HeroSection = () => {
    const socialLinks = [
        {
            icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />,
            href: "https://linkedin.com/in/tonykurian13",
            name: "LinkedIn"
        },
        {
            icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />,
            href: "mailto:tonykurian96@gmail.com",
            name: "Email"
        },
        {
            icon: <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />,
            href: "tel:+919746826062",
            name: "Phone"
        },
    ];
    return (
        <section>
            <div className="container">
                <div className="">
                    <div className="w-full h-72">
                        <Image src={"/images/hero-sec/banner-bg-img.png"} alt="banner-img" width={1080} height={267} className="w-full h-full object-cover" />
                    </div>
                    <div className="border-x border-primary/10">
                        <div className="relative flex flex-col xs:flex-row items-center xs:items-start justify-center xs:justify-between max-w-3xl mx-auto gap-10 xs:gap-3 px-4 sm:px-7 pt-22 pb-8 sm:pb-12">
                            <div className="absolute top-0 transform -translate-y-1/2">
                                <Image src={"/images/hero-sec/user-img.png"} alt="Tony Kurian" width={145} height={145} className="border-4 border-white rounded-full object-cover aspect-square bg-slate-100" />
                            </div>
                            <div className="flex flex-col gap-2 sm:gap-3 items-center text-center xs:items-start xs:text-left">
                                <h1>Tony Kurian</h1>
                                <p className="text-violet-700 font-normal">Full Stack Developer — Python · FastAPI · Django · React</p>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-primary" />
                                    <p className="text-primary">Kerala, India</p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row items-center gap-4 mt-4 xs:mt-0">
                                <div className="flex items-center gap-2">
                                    {socialLinks.map((item, index) => (
                                        <Link href={item.href} key={index} className="flex flex-col items-center justify-center p-2.5 sm:p-3 hover:bg-primary/5 border border-primary/10 rounded-full transition-colors">
                                            {item.icon}
                                        </Link>
                                    ))}
                                </div>
                                <Button asChild className="h-auto rounded-full p-0.5!">
                                    <a
                                        href="/documents/Tony_kurian_fullstack_developer_Resume.pdf"
                                        download="Tony_Kurian_Resume.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block p-0.5 rounded-full bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)]"
                                    >
                                        <span className="flex items-center gap-3 bg-primary hover:bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)] py-2.5 px-5 rounded-full text-white">
                                            <Download className="w-4 h-4" />
                                            <span className="text-sm sm:text-base font-semibold">Download Resume</span>
                                        </span>
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection

