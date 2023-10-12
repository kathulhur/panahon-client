import Image from "next/image";

export const Footer = () => {
    return (
        <div className="p-4 bg-gray-300 grid grid-cols-2">
            <a href="https://github.com/kathulhur/panahon-client">
                <Image
                    src={"/images/github.svg"}
                    alt="github icon"
                    width={32}
                    height={32}
                />
            </a>
            <div className="text-right">
                <p className="text-sm font-semibold">
                    © 2023 Joseph Crisostomo. All rights reserved.
                </p>
                <a
                    href="https://josephcrisostomo.vercel.app"
                    className="text-sm font-semibold flex justify-end items-center cursor-pointer underline mt-2"
                >
                    About the developer <ArrowTopRightOnSquare />
                </a>
            </div>
        </div>
    );
};

const ArrowTopRightOnSquare = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
        </svg>
    );
};
