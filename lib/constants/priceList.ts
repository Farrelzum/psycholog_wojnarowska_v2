import { PriceList } from "../types/PriceList";

export const consultations: PriceList = {
    title: 'Konsultacje psychologiczne',
    list: [
        {
            name: 'Pierwsza konsultacja psychologiczna (50\u00A0minut)',
            desc: 'Pierwsza wizyta obejmuje szczegółowy wywiad, omówienie zgłaszanych trudności oraz zaplanowanie dalszego procesu diagnostycznego lub formy wsparcia.',
            price: '250',
        },
        {
            name: 'Kolejna konsultacja psychologiczna (50\u00A0minut)',
            price: '200',
        },
        {
            name: 'Konsultacja psychologiczna online (50\u00A0minut)',
            price: '250',
        },
        {
            name: 'Konsultacja psychologiczna dla rodziców / konsultacja wychowawcza (50 minut)',
            price: '250',
        },
    ],
}

export const diagnoses: PriceList =  {
    title: 'Diagnoza psychologiczna',
    list: [
        {
            name: 'Diagnoza inteligencji Stanford\u00A0\u2011\u00A0Binet\u00A05 (SB5)',
            desc: '(wywiad, badanie, analiza wyników oraz pisemna opinia psychologiczna)',
            price: '800',
        },
        {
            name: 'Diagnoza ADHD dzieci i młodzieży',
            desc: '(z wykorzystaniem Conners 3, wywiad, analiza kwestionariuszy, badanie oraz omówienie wyników)',
            price: '700',
        },
        {
            name: 'Diagnoza ADHD osób dorosłych',
            desc: '(z wykorzystaniem DIVA-5, wywiad diagnostyczny, omówienie wyników oraz opinia)',
            price: '700',
        },
        {
            name: 'Opinia psychologiczna',
            price: 'od 250',
        },
        {
            name: 'Zaświadczenie psychologiczne',
            price: '50',
        }
    ],
}

export const sensory: PriceList = {
    title: 'Integracja sensoryczna',
    list: [
        {
            name: 'Diagnoza Integracji Sensorycznej',
            desc:'(wywiad, obserwacja kliniczna, badanie oraz omówienie wyników i zalecenia)',
            price: '600',
        }
    ],
}