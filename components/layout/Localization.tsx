export default function Localization() {
    return (
        <section>
            <h2 className="
                text-main mb-4
                text-2xl md:text-3xl
                font-serif font-semibold
                text-center"
            >
                Jak dojechać
            </h2>
            <div 
                className="
                    lg:mx-auto
                    w-full h-64 md:h-96 p-4 lg:w-1/2
                    rounded-lg overflow-hidden shadow-sm"
            >
                <iframe
                    src="
                        https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2379.705525915553!2d14.636383576249186!3d53.38431817188223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x22842da1e496667%3A0x111051c2732c8d7!2sPort%20Zdrowie!5e0!3m2!1spl!2spl!4v1787328851383!5m2!1spl!2spl"
                    width="100%"
                    height="100%"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="border-0;"
                />
            </div>
        </section>
        
    );
}