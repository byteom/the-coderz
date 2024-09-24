"use client"

import React, { useEffect } from "react";
import { ReactLenis, useLenis } from "@/app/lib/lenis";

interface LenisProps {
    children: React.ReactNode
}
function SmoothScroll({ children } : LenisProps) {
    const lenis = useLenis(({ scroll }) => {
        // called every scroll
    })

    useEffect(() => {
        document.addEventListener("DOMContentLoaded", () => {
            lenis?.stop();
            lenis?.start();
        })
    }, [lenis]);

    return (
        <ReactLenis
            root
            options={{
                duration: 2,
            }}
        >
            {
                children
            }
        </ReactLenis>
    )
}

export default SmoothScroll;