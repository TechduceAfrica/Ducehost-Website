'use client'
import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

const SmoothScroll = ({ children }) => {
    useEffect(() => {
        const scroll = new LocomotiveScroll({
        
        });

        return () => {
        scroll.destroy();
        };
    }, []);

    return  <div data-scroll-container>
                {children}
            </div>;
};

export default SmoothScroll;
