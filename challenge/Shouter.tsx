import { useState } from "react";

export default function Shouter() {
    const [whisper, setWhisper] = useState("");

    function shout(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const input = form.elements.namedItem('whisper') as HTMLInputElement;
        setWhisper(input.value);
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setWhisper(event.target.value);
    }

    return (
        <form onSubmit={shout}>
            <input 
                name="whisper" 
                aria-label="Whisper" 
                onChange={handleChange} 
                value={whisper}
            />
            <output>{whisper.toUpperCase()}</output>
        </form>
    )
};