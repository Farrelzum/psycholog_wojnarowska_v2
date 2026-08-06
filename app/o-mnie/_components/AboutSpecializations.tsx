import Image from 'next/image';
import { specialization } from '@/lib/constants/aboutMe';
import IvoryCard from '@/components/ui/IvoryCard';

export default function AboutSpecializations() {
    return (
            <section className="
                w-full max-w-5xl px-4 md:px-8 flex flex-col"
            >
                <h2 className='
                    mb-4 text-2xl md:text-3xl lg:text-4xl
                    font-bold text-main'
                >
                    Specjalizacje i obszary wsparcia
                </h2>
                <p className='mb-10 text-green-800 lg:text-lg'>
                    Oferuję konsultacje psychologiczne, diagnozę psychologiczną oraz wsparcie dzieci, młodzieży i osób dorosłych. Pomagam osobom doświadczającym trudności emocjonalnych, rozwojowych oraz kryzysów życiowych.
                </p>
                
                <div className='
                    w-full flex flex-col items-center gap-8
                    lg:grid lg:grid-cols-2 lg:items-stretch'
                >
                    {specialization.map((el, index) => (
                    <IvoryCard
                        key={el.title ? el.title : `spec-card-${index}`}
                        title={el.title}
                        list={el.specialties}
                        icon={
                        <Image
                            alt=""
                            src={el.image}
                            className={`
                            w-40 md:w-60 h-auto
                            object-cover object-center text-main
                            ${index === 0 ? 'scale-140' : ''}`}
                            aria-hidden
                        />
                        }
                        splitList={index === 0 ? true : false}
                    />
                    ))}
                </div>
            </section>
    );
}