import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import Link from 'next/link';

export default function MobileMenu({ mobileMenu }) {
    return (
        <div>
            <Accordion>
                {mobileMenu.map((mMenu, index) =>
                    (
                        <AccordionItem 
                            header={mMenu.mainMenu} 
                            key={index}
                        >
                            <ul className="list">
                                <li>
                                    <Link href={mMenu.OneLink}>
                                        {mMenu.One}
                                    </Link>
                                </li>
                                <li>
                                    <Link href={mMenu.TwoLink}>
                                        {mMenu.Two}
                                    </Link>
                                </li>
                                <li>
                                    <Link href={mMenu.ThreeLink}>
                                        {mMenu.Three}
                                    </Link>
                                </li>
                            </ul>
                            
                        </AccordionItem>
                    )
                )}
            </Accordion>
        </div>
    )
}
