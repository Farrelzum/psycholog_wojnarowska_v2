import { consultations, diagnoses, sensory } from "@/lib/constants/priceList";
import PriceTable from "./_components/PriceTable";
import InfoTab from "./_components/InfoTab";

export default function PriceList() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="
        text-main mb-6
        text-3xl md:text-4xl
        font-serif"
      >
        Cennik
      </h1>
      <div className="flex flex-col justify-center items-center gap-8">
        <PriceTable tableInfo={consultations}/>
        <PriceTable tableInfo={diagnoses} />
        <PriceTable tableInfo={sensory} />
      </div>
      <InfoTab />
    </main>
  );
}