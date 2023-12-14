import { Accordion, AccordionItem } from '@szhsin/react-accordion';

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
                                    {mMenu.One}
                                </li>
                                <li>
                                    {mMenu.Two}
                                </li>
                                <li>
                                    {mMenu.Three}
                                </li>
                            </ul>
                            
                        </AccordionItem>
                    )
                )}
            </Accordion>
        </div>
    )
}
