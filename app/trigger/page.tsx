"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { triggerEmailSequence } from "@/lib/actions";

export default function Page() {
    const [minutes, setMinutes] = useState(1);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await triggerEmailSequence(minutes);
            alert("Daily Gen AI Quiz email sequence triggered successfully!");
        } catch (error) {
            console.error("Failed to trigger email sequence:", error);
            alert("Failed to trigger email sequence");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Daily Gen AI Quiz Email Trigger</h1>
            
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="minutes" className="block text-sm font-medium mb-1">
                        Interval between emails (minutes)
                    </label>
                    <input
                        id="minutes"
                        type="number"
                        min="1"
                        value={minutes}
                        onChange={(e) => setMinutes(Number(e.target.value))}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                
                <p className="text-sm text-gray-500">
                    This will send the Daily Gen AI Quiz email to kanishaka@buildfastwithai.com immediately,
                    then wait for the specified interval before sending a second email.
                </p>
                
                <Button type="submit" disabled={loading} className="w-full">
                    {loading ? "Triggering..." : "Trigger Email Sequence"}
                </Button>
            </form>
        </div>
    );
}