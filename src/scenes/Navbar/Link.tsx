import { CurrentPage } from "@/shared/types";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll"

interface Props {
    page: string;
    currentPage: CurrentPage;
    setCurrentPage: (value: CurrentPage) => void;
}
const Link: React.FC<Props> = ({ page, currentPage, setCurrentPage }) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, '') as CurrentPage
    return (
        <AnchorLink
            className={`${currentPage === lowerCasePage ? 'text-primary-500' : ''} transition-colors duration-500 hover:text-primary-300`}
            href={`#${lowerCasePage}`}
            onClick={() => setCurrentPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}
export default Link