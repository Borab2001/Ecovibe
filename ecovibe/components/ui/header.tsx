"use client";

import HeaderButton from "@/components/header-button";
import { useState } from "react";

const Header = () => {

    const [isActive, setIsActive] = useState(false);

    return (
        <header className="fixed right-4 top-4">
            <HeaderButton isActive={isActive} setIsActive={setIsActive} />
        </header>
    );
}
 
export default Header;