import { Steps } from "../types/Steps";
import contact from '@/images/mainPage/contact.webp';
import diagnosis from '@/images/mainPage/diagnosis.webp';
import plan from '@/images/mainPage/plan.webp';
import session from '@/images/mainPage/session.webp';


export const steps: Steps[] = [
    {
        title: 'Pierwszy kontakt',
        step: 1,
        image: contact,
    },
    {
        title: 'Diagnoza',
        step: 2,
        image: diagnosis,
    },
    {
        title: 'Indiwidualny plan\u00A0terapii',
        step: 3,
        image: plan,
    },
    {
        title: 'Sesje terapeutyczne',
        step: 4,
        image: session,
    }
]