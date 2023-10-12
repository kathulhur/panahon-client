import { ComponentPropsWithoutRef } from "react";

export const Card = ({ children }) => {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
            <div className="mx-auto max-w-lg ">{children}</div>
        </div>
    );
};

interface HeadingProps extends ComponentPropsWithoutRef<"div"> {
    title: string;
    description: string;
}

Card.Heading = ({ title, description, ...divProps }: HeadingProps) => {
    return (
        <div {...divProps}>
            <h1 className="text-4xl font-bold leading-6 text-gray-900">
                {title}
            </h1>
            <p className="mt-1 text-sm text-gray-500">{description}</p>
        </div>
    );
};

Card.Content = ({ children }) => {
    return <div className="my-4">{children}</div>;
};
