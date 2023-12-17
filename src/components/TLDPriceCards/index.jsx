import { TLD } from '@/copyContents/PricePlan'
import PriceCard from './PriceCard'


export default function TLDPriceCards() {
    return (
        <>
            <PriceCard
                tldPriceCards={TLD}
            />
        </>
    )
}
