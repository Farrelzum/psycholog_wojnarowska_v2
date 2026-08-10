import kids_and_teens from '@/images/aboutMe/kids_and_teens.svg';
import adults from '@/images/aboutMe/adults.svg';
import family from '@/images/aboutMe/family.svg';
import { Specs } from '../types/Specs';

export const description = [
    'Jestem psychologiem dzieci, młodzieży i osób dorosłych. W swojej pracy wspieram osoby doświadczające trudności emocjonalnych, kryzysów życiowych oraz wyzwań rozwojowych, łącząc rzetelną diagnozę psychologiczną z indywidualnym podejściem do każdego pacjenta.',
    'Na co dzień pracuję jako psycholog w Poradni Psychologiczno-Pedagogicznej, gdzie prowadzę diagnozę psychologiczną dzieci i młodzieży, sporządzam opinie psychologiczne oraz wspieram dzieci, młodzież i ich rodziny w pokonywaniu trudności rozwojowych, edukacyjnych i emocjonalnych. Doświadczenie zawodowe zdobywałam również jako psycholog w szkole ponadpodstawowej oraz w Ośrodku Szkolenia i Wychowania OHP, pracując z młodzieżą zmagającą się z trudnościami emocjonalnymi, wychowawczymi i społecznymi.',
    'Ukończyłam studia magisterskie z psychologii o specjalności psychologia kliniczna dzieci i młodzieży na Uniwersytecie SWPS w Poznaniu oraz studia magisterskie z pedagogiki w zakresie edukacji elementarnej z diagnozą i terapią pedagogiczną. Jestem absolwentką studiów podyplomowych z Integracji Sensorycznej oraz Mediacji, a obecnie poszerzam swoje kompetencje na studiach podyplomowych z psychotraumatologii.',
    'Specjalizuję się w diagnozie psychologicznej dzieci i młodzieży. Posiadam kwalifikacje terapeuty Integracji Sensorycznej oraz kompetencje w zakresie terapii ręki. Prowadzę diagnozę psychologiczną z wykorzystaniem wystandaryzowanych narzędzi diagnostycznych, w tym Stanford–Binet 5 (SB5), Conners 3 oraz DIVA-5. Jestem również trenerem Treningu Umiejętności Społecznych (TUS), mediatorem sądowym oraz członkiem Polskiego Towarzystwa Terapii Skoncentrowanej na Rozwiązaniach.',
    'W pracy wykorzystuję przede wszystkim założenia Terapii Skoncentrowanej na Rozwiązaniach (TSR), a także elementy terapii akceptacji i zaangażowania (ACT). Szczególną wagę przywiązuję do budowania relacji opartej na zaufaniu, poczuciu bezpieczeństwa i wzajemnym szacunku. Regularnie uczestniczę w szkoleniach i doskonalę swoje kompetencje, aby oferować pomoc zgodną z aktualną wiedzą naukową i standardami pracy psychologa.',
]

export const specialization: Specs[] = [
    {
        title: 'Dzieci i młodzież',
        image: kids_and_teens,
        specialties: [
            'diagnoza psychologiczna',
            'ADHD i inne trudności neurorozwojowe',
            'zaburzenia lękowe',
            'zaburzenia nastroju, w tym depresja',
            'zaburzenia obsesyjno-kompulsyjne (OCD)',
            'trudności w regulacji emocji i zachowania',
            'trudności adaptacyjne oraz szkolne',
            'niska samoocena',
            'trudności w relacjach rówieśniczych',
            'kryzysy rozwojowe',
            'wsparcie po doświadczeniach traumatycznych',
            'wsparcie w przeżywaniu żałoby i straty',
            'konsultacje psychologiczne dla rodziców',
            'ocena funkcjonowania sensorycznego',
            'terapia ręki i wspieranie rozwoju funkcji grafomotorycznych',
            'Trening Umiejętności Społecznych (TUS)',
        ],
    },
    {
        title: 'Osoby dorosłe',
        image: adults,
        specialties: [
            'konsultacje psychologiczne',
            'zaburzenia lękowe',
            'zaburzenia nastroju, w tym depresja',
            'zaburzenia obsesyjno-kompulsyjne (OCD)',
            'ADHD osób dorosłych',
            'przewlekły stres i wypalenie',
            'kryzysy życiowe',
            'trudności w relacjach interpersonalnych',
            'wsparcie po doświadczeniach traumatycznych',
            'wsparcie w przeżywaniu żałoby i straty',
        ],
    },
    {
        title: 'Rodzice i rodziny',
        image: family,
        specialties: [
            'konsultacje psychologiczne',
            'wsparcie w trudnościach wychowawczych',
            'psychoedukacja',
            'rozwijanie kompetencji rodzicielskich',
            'konsultacje rodzinne',
            'mediacje rodzinne',
        ],
    }
]