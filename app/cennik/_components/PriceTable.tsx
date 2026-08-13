import { PriceList } from "@/lib/types/PriceList";

interface Props {
    tableInfo: PriceList;
    className?: string;
}


export default function PriceTable({ tableInfo, className = '' }: Props) {
    return (
        <article 
            className={`
                w-full max-w-4xl
                rounded-lg overflow-hidden shadow-sm
                ${className}`
            }
            >
            <table className="w-full border-collapse">
                <thead className="bg-main text-center">
                <tr>
                    <th 
                    colSpan={2}
                    className="
                        text-base md:text-lg lg:text-xl text-center
                        py-4 px-4 md:px-6 text-ivory"
                    >
                    {tableInfo.title}
                    </th>
                </tr>
                </thead>
                <tbody className="bg-ivory">
                {tableInfo.list.map((el) => {
                    return (
                    <tr key={el.name} className="border-b border-gray-200 last:border-0">
                        <td className="py-4 px-4 md:px-6">
                        <h3 className="text-black text-lg">
                            {el.name}
                        </h3>
                        {el.desc && (
                            <p className="text-sm text-gray-600 mt-1">
                            {el.desc}
                            </p>
                        )}
                        </td>
                        <td 
                            className="
                                py-4 px-4 md:px-6 whitespace-nowrap
                                text-right font-medium text-black"
                        >
                        {`${el.price} zł`}
                        </td>
                        
                    </tr>
                    );
                })}
                </tbody>
            </table>
        </article>
    );
}