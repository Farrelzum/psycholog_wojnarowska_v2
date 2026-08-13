import { Clock, CalendarOff, CreditCard } from "lucide-react";

export default function InfoTab() {
    return (
        <article
        className="
          w-full max-w-4xl mt-10"
        >
          <h2 className="
            text-base md:text-lg lg:text-xl text-left
            font-semibold
            pb-4 text-main"
          >
            Informacje organizacyjne
          </h2>
          <ul className="
            flex flex-col justify-center items-start
            gap-2 w-full"
          >
            <li className="
              flex items-start md:items-center gap-6"
            >
              <Clock className="text-main size-8 shrink-0"/>
              <p>
                Wizyty odbywają się wyłącznie po wcześniejszym umówieniu terminu.
              </p>
            </li>
            <li className="
              flex items-start md:items-center gap-6"
            >
              <CalendarOff className="text-main size-8 shrink-0"/>
              <p>
                Proszę o odwołanie wizyty co najmniej 24 godziny przed planowanym terminem. W przypadku późniejszego odwołania lub nieobecności gabinet zastrzega sobie możliwość naliczenia opłaty za umówioną wizytę.
              </p>
            </li>
            <li className="
              flex items-start md:items-center gap-6"
            >
              <CreditCard className="text-main size-8 shrink-0"/>
              <p>Płatność gotówką, BLIKIEM lub przelewem.</p>
            </li>
          </ul>
      </article>
    );
}