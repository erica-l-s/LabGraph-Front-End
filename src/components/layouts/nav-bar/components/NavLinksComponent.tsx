import CsvGenerator from "@/components/features/CsvGenerator";
import Link from 'next/link';
import ViewToggleButton from "./ViewToggleButton";
import { useRouter } from "next/router";
import navLinks from "../constants/navLinks";
import handleLogout from "../constants/handleLogout";

interface NavLinksComponentProps {
    jsonData?: Array<Record<string, any>>;
    fileName?: string;
}

const NavLinksComponent: React.FC<NavLinksComponentProps> = ({ jsonData, fileName }) => {
    const router = useRouter();
    const onLogout = () => handleLogout(router);

    return (
        <div className="hidden items-center gap-4 lg:flex xl:gap-6">
            {[...navLinks, { text: 'SAIR', url: '/login', onClick: onLogout }].map((link, index) => (
                <Link
                    key={index}
                    href={link.url}
                    onClick={link.onClick}
                    className="group relative text-sm font-normal text-textPrimary transition-colors hover:text-textPrimary xl:text-base"
                >
                    {link.text}
                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
            ))}
            <div className="rounded-md p-2">
                <CsvGenerator jsonData={jsonData} fileName={fileName} />
            </div>
            <ViewToggleButton />
            
        </div>
    );
};

export default NavLinksComponent;