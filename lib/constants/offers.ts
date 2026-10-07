import { Brain, ClipboardList, Puzzle, Handshake, Baby, Heart, Scale } from 'lucide-react';
import { Offer } from '../types/Offer';
import adhd_diagnosis from '@/images/offers/adhd_diagnosis.png';
import intelligence_test from '@/images/offers/intelligence_test.png';
import sensory_integration from '@/images/offers/sensory_integration_ev.png';
import social_skill_training from '@/images/offers/social_skill_training.png';
import therapy from '@/images/offers/therapy.png';
import couple_therapy from '@/images/offers/couple_therapy.png';
import family_medation from '@/images/offers/family_medation.png';
import adhdMain from '@/images/offers/adhdMainOffer.jpg';
import intelligenceMain from '@/images/offers/intelligenceMainOffer.jpg';
import sensoryMain from '@/images/offers/sensoryMainOffer.jpg';
import socialMain from '@/images/offers/socialMainOffer.jpg';
import therapyMain from '@/images/offers/therapyMainOffer.jpg';
import coupleMain from '@/images/offers/coupleMainOffer.jpg';
import familyMain from '@/images/offers/familyMainOffer.jpg';





export const offers: Offer[] = [
        {
                name: "Pomoc psychologiczna dzieciom i młodzieży",
                description:
                        "Wiem, jak trudne bywa obserwowanie dziecka, które przeżywa kryzys psychologiczny lub zmaga się z trudnymi emocjami.\n\nW pracy z dziećmi i młodzieżą podchodzę do pacjentów z empatią, tworząc dla nich w pełni bezpieczną, opartą na zaufaniu przestrzeń do rozmowy. Nie oceniam zachowania dziecka ani Ciebie jako rodzica – w spokojnym tempie pomagam Wam zrozumieć przyczyny problemów.\n\nCelem wsparcia psychologicznego jest wyposażenie młodego człowieka w narzędzia do radzenia sobie z trudnościami, by pomóc Wam odzyskać równowagę i spokój na co dzień.",
                price: "200",
                path: "/oferta/pomoc",
                Icon: Baby,
                image: therapy,
                mainPageImage: therapyMain,
                slug: "pomoc"
        },
        {
                name: "Diagnoza ADHD",
                path: "/oferta/diagnoza-adhd",
                description: 
                        "Wiem, jak wyczerpujące bywa codzienne zmaganie się z natłokiem myśli i poczuciem, że Twój umysł nigdy nie odpoczywa.\n\nW mojej pracy do diagnozy ADHD podchodzę przede wszystkim z empatią, rzetelnością i uważnością na Twoje granice. Zależy mi na tym, abyś podczas naszych spotkań czuł się bezpiecznie i komfortowo - to przestrzeń, w której wspólnie, w spokojnym tempie, przyjrzymy się Twoim doświadczeniom. Nie oceniam, lecz pomagam zrozumieć, w jaki sposób funkcjonuje Twój układ nerwowy.\n\nCelem diagnozy nie jest przyklejenie etykiety, ale znalezienie odpowiedzi, które pozwolą Ci odzyskać równowagę i lepiej zadbać o siebie w codziennym życiu.",
                price: "700",
                Icon: Brain,
                image: adhd_diagnosis,
                mainPageImage: adhdMain,
                slug: "diagnoza-adhd"

        },
        {
                name: "Diagnoza inteligencji",
                path: "/oferta/diagnoza-inteligencji",
                description:
                        "Wiem, jak wiele pytań i rodzicielskiego niepokoju może budzić decyzja o wykonaniu testu inteligencji u dziecka\n\nW mojej pracy do badania najmłodszych podchodzę przede wszystkim z empatią, ciepłem i dużą uważnością na ich granice. Zależy mi na tym, aby Twoje dziecko podczas naszych spotkań czuło się bezpiecznie i swobodnie – dbam o to, by badanie odbywało się w przyjaznej atmosferze i nie przypominało stresującego sprawdzianu. To przestrzeń, w której w spokojnym, dopasowanym do dziecka tempie przyjrzymy się temu, jak poznaje ono świat. Nie oceniam, lecz pomagam zrozumieć unikalny sposób funkcjonowania jego umysłu. \n\nCelem diagnozy nie jest zredukowanie potencjału do jednej liczby, ale odkrycie mocnych stron i zasobów, które pozwolą Wam jako rodzicom jeszcze lepiej wspierać jego harmonijny rozwój na co dzień.",
                price: "800",
                Icon: ClipboardList,
                image: intelligence_test,
                mainPageImage: intelligenceMain,
                slug: "diagnoza-inteligencji"
        },
        {
                name: "Diagnoza integracji sensorycznej",
                description: 
                        "Wiem, jak trudne bywają sytuacje, gdy Twoje dziecko czuje się przytłoczone bodźcami lub reaguje wyjątkowo silnie na otoczenie.D\n\no diagnozy integracji sensorycznej podchodzę z empatią i uważnością na granice małego pacjenta. Zależy mi, aby dziecko czuło się bezpiecznie, dlatego nasze spotkania często przypominają ukierunkowaną zabawę. Nie oceniam zachowania ani metod wychowawczych – w spokojnym tempie pomagam zrozumieć, co komunikuje układ nerwowy dziecka.\n\nCelem diagnozy jest stworzenie profilu sensorycznego, który pomoże Wam odzyskać równowagę i wspierać samoregulację dziecka na co dzień.",
                price: "600",
                path: "/oferta/diagnoza-integracji-sensorycznej",
                Icon: Puzzle,
                image: sensory_integration,
                mainPageImage: sensoryMain,
                slug: "diagnoza-integracji-sensorycznej"
        },
        {
                name: "Trening Umiejętności Społecznych",
                description:
                        "Wiem, jak dużym wyzwaniem dla dziecka bywają trudności rówieśnicze, wycofanie czy radzenie sobie z emocjami w grupie.\n\nDo Treningu Umiejętności Społecznych podchodzę z empatią, dbając o pełne poczucie bezpieczeństwa i akceptacji. W przyjaznej, opartej na zabawie atmosferze pomagam dzieciom trenować rozpoznawanie emocji, stawianie granic i budowanie relacji. Nie oceniam – wspieram w rozwoju.\n\nCelem treningu jest wzmocnienie pewności siebie Twojego dziecka, by łatwiej i radośniej odnajdywało się w codziennym świecie społecznym.",
                price: "200",
                path: "/oferta/trening-umiejetnosci-spolecznych",
                Icon: Handshake,
                image: social_skill_training,
                mainPageImage: socialMain,
                slug: "trening-umiejetnosci-spolecznych"
         },
        {
                name: "Terapia par",
                description:
                        "Wiem, jak bolesne bywa poczucie oddalenia i narastające niezrozumienie w związku. W terapii par zapewniam bezpieczną, pełną empatii i neutralną przestrzeń, w której każda ze stron jest na równi wysłuchana.\n\nNie oceniam i nie szukam winnego – w spokojnym tempie pomagam zrozumieć mechanizmy napędzające Wasze konflikty. \n\nCelem naszych spotkań nie jest orzekanie o racji, lecz odbudowanie zdrowej komunikacji i wsparcie Was w drodze do ponownego odzyskania bliskości na co dzień.",
                price: "300",
                path: "/oferta/terapia-par",
                Icon: Heart,
                image: couple_therapy,
                mainPageImage: coupleMain,
                slug: "terapia-par"
        },
        // {
        //         name: "Mediacje rodzinne",
        //         description: 
        //                 "Wiem, jak trudne i pełne napięcia bywają konflikty rodzinne, w których brakuje już przestrzeni na kompromis.\n\nW procesie mediacji zapewniam bezpieczną, bezstronną i pełną empatii przestrzeń, w której każda ze stron jest na równi wysłuchana. Nie oceniam i nie szukam winnego – pomagam Wam na nowo się usłyszeć.\n\nCelem naszych spotkań nie jest narzucanie rozwiązań, lecz wsparcie Was w konstruktywnej rozmowie, abyście mogli samodzielnie wypracować satysfakcjonujące porozumienie i przywrócić w rodzinie spokój.",
        //         price: "300",
        //         path: "/oferta/mediacje-rodzinne",
        //         Icon: Scale,
        //         image: family_medation,
        //         mainPageImage: familyMain,
        //         slug: "mediacje-rodzinne"
        // },
];