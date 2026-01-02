import type { ReactNode } from "react";

export const  TitleText = ({
    headingLevel,
    children,
    className,
}: {
    headingLevel?: 2 | 3 | 4 | 5 | 6;
    children: ReactNode;
    className?: string;
}) => {

    switch (headingLevel) {
        case 2:
            return <h2 className={className}>{children}</h2>;
        case 3:
            return <h3 className={className}>{children}</h3>;
        case 4:
            return <h4 className={className}>{children}</h4>;
        case 5:
            return <h5 className={className}>{children}</h5>;
        case 6:
            return <h6 className={className}>{children}</h6>;
        default:
            return <div className={className}>{children}</div>;
    }
};
