import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import FaqAnswer from './FaqAnswer';

export default function FAQs({ faqsContent }) {
  return (
    <div className="fade__in">
        <Accordion>
            {faqsContent.map((faqCopy, index) =>
                (
                    <AccordionItem 
                        header={faqCopy.question} 
                        key={index}
                    >
                        <FaqAnswer 
                            answer={faqCopy.answer}
                        />
                    </AccordionItem>
                )
            )}
        </Accordion>
    </div>
  )
}
