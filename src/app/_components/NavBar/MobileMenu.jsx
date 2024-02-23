import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import Link from 'next/link';
import { handleLinkClick } from './Functions';

export default function MobileMenu({ mobileMenu, setIsOpen }) {
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
                                <li className={mMenu.OneClass}>
                                    <Link 
                                        href={mMenu.OneLink} 
                                        onClick={() => handleLinkClick(setIsOpen)}
                                    >
                                        {mMenu.One}
                                    </Link>
                                    <span>
                                        {mMenu.TwoNotification}
                                    </span>
                                </li>
                                <li className={mMenu.OneClass}>
                                    <Link 
                                        href={mMenu.TwoLink} 
                                        onClick={() => handleLinkClick(setIsOpen)}
                                    >
                                        {mMenu.Two}
                                    </Link>
                                    <span>
                                        {mMenu.TwoNotification}
                                    </span>
                                </li>
                                <li className={mMenu.ThreeClass}>
                                    <Link 
                                        href={mMenu.ThreeLink} 
                                        onClick={() => handleLinkClick(setIsOpen)}
                                    >
                                        {mMenu.Three}
                                    </Link>
                                    <span>
                                        {mMenu.ThreeNotification}
                                    </span>
                                </li>
                            </ul>
                            
                        </AccordionItem>
                    )
                )}
            </Accordion>
        </div>
    )
}
