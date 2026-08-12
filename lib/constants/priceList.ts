import { PriceListElement } from "../types/PriceListElement";

export const consultations: PriceListElement[] = [
    {
        title: 'Pierwsza konsultacja psychologiczna (50 minut)',
        desc: 'Pierwsza wizyta obejmuje szczegółowy wywiad, omówienie zgłaszanych trudności oraz zaplanowanie dalszego procesu diagnostycznego lub formy wsparcia.',
        price: '250',
    },
    {
        title: 'Kolejna konsultacja psychologiczna (50 minut)',
        price: '200',
    },
    {
        title: 'Konsultacja psychologiczna online (50 minut)',
        price: '250',
    },
    {
        title: 'Konsultacja psychologiczna dla rodziców / konsultacja wychowawcza (50 minut)',
        price: '250',
    },
];

export const diagnoses: PriceListElement[] = [
    {
        title: 'Diagnoza inteligencji Stanford–Binet 5 (SB5)',
        desc: '(wywiad, badanie, analiza wyników oraz pisemna opinia psychologiczna)',
        price: '800',
    },
    {
        title: 'Diagnoza ADHD dzieci i młodzieży',
        desc: '(z wykorzystaniem Conners 3, wywiad, analiza kwestionariuszy, badanie oraz omówienie wyników)',
        price: '700',
    },
    {
        title: 'Diagnoza ADHD osób dorosłych',
        desc: '(z wykorzystaniem DIVA-5, wywiad diagnostyczny, omówienie wyników oraz opinia)',
        price: '700',
    },
    {
        title: 'Opinia psychologiczna',
        price: 'od 250',
    },
    {
        title: 'Zaświadczenie psychologiczne',
        price: '50',
    }
]

export const sensory: PriceListElement[] = [
    {
        title: 'Diagnoza Integracji Sensorycznej',
        desc:'(wywiad, obserwacja kliniczna, badanie oraz omówienie wyników i zalecenia)',
        price: '600',
    }
]