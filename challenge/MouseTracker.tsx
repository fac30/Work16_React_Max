import { useState, useEffect } from "react";

export default function MouseTracker() {
    const [mouseXY, setMouseXY] = useState({x:0, y:0});

    useEffect(() => {
        function updateXY(event: MouseEvent) {
            setMouseXY({x: event.clientX, y: event.clientY});
        }
        window.addEventListener("mousemove", updateXY);

        return () => {
            window.removeEventListener("mousemove", updateXY);
        };
    }, []);

    return (
        <output>{mouseXY.x},{mouseXY.y}</output>
    )
};