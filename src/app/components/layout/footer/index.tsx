import Link from "next/link"

const Footer = () => {
    return (
        <footer className="-translate-y-[1px] bg-white border-t border-primary/10">
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="max-w-3xl mx-auto  gap-10 sm:gap-16 px-4 sm:px-7 py-4 md:py-7">
                        <p>2026 © Tony Kurian — Full Stack Developer</p>
                        <p>tonykurian96@gmail.com · <a href="tel:+919746826062" className="hover:text-primary">+91 9746826062</a> · <a href="https://linkedin.com/in/tonykurian13" target="_blank" className="hover:text-primary">linkedin.com/in/tonykurian13</a></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer