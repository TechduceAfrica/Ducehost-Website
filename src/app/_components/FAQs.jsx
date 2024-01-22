import { Accordion, AccordionItem } from '@szhsin/react-accordion';

export default function FAQs({ faqsContent }) {
  return (
    <div>
        <Accordion>
            {faqsContent.map((faqCopy, index) =>
                (
                    <AccordionItem 
                        header={faqCopy.question} 
                        key={index}
                    >
                        {faqCopy.answer}
                    </AccordionItem>
                )
            )}
        </Accordion>
    </div>
  )
}
