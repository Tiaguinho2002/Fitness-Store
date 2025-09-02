import React from 'react';

interface ContentProps {
    children?: React.ReactNode;
}

function Content({ children }: ContentProps) {
    return (
        <main className='Content'>
            {children} 
        </main>
    );
}

export default Content;