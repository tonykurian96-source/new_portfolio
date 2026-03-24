import Link from "next/link";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

const ContactInfo = () => {
    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
                        <div className="flex flex-col xs:flex-row gap-5 items-center justify-between">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Contact Information</p>
                        </div>
                    </div>
                    <div className="border-t border-primary/10">
                        <div className="flex flex-col gap-8 max-w-3xl mx-auto px-4 sm:px-7 py-9 md:py-16">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">Let's build something amazing together.</h3>
                            <div className="flex flex-col gap-6">
                                <Link href="mailto:tonykurian96@gmail.com" className="flex items-center gap-4 group">
                                    <div className="flex items-center justify-center w-12 h-12 border border-primary/10 rounded-full group-hover:bg-primary/5 group-hover:border-primary/30 transition-all">
                                        <Mail className="w-5 h-5 text-secondary group-hover:text-primary transition-colors" />
                                    </div>
                                    <span className="text-base sm:text-lg font-medium text-secondary group-hover:text-primary transition-colors">tonykurian96@gmail.com</span>
                                </Link>
                                <Link href="tel:+919746826062" className="flex items-center gap-4 group">
                                    <div className="flex items-center justify-center w-12 h-12 border border-primary/10 rounded-full group-hover:bg-primary/5 group-hover:border-primary/30 transition-all">
                                        <Phone className="w-5 h-5 text-secondary group-hover:text-primary transition-colors" />
                                    </div>
                                    <span className="text-base sm:text-lg font-medium text-secondary group-hover:text-primary transition-colors">+91 9746826062</span>
                                </Link>
                                <Link href="https://linkedin.com/in/tonykurian13" target="_blank" className="flex items-center gap-4 group">
                                    <div className="flex items-center justify-center w-12 h-12 border border-primary/10 rounded-full group-hover:bg-primary/5 group-hover:border-primary/30 transition-all">
                                        <Linkedin className="w-5 h-5 text-secondary group-hover:text-primary transition-colors" />
                                    </div>
                                    <span className="text-base sm:text-lg font-medium text-secondary group-hover:text-primary transition-colors">linkedin.com/in/tonykurian13</span>
                                </Link>
                                <div className="flex items-center gap-4 group">
                                    <div className="flex items-center justify-center w-12 h-12 border border-primary/10 rounded-full">
                                        <MapPin className="w-5 h-5 text-secondary" />
                                    </div>
                                    <span className="text-base sm:text-lg font-medium text-secondary">Kerala, India</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;
