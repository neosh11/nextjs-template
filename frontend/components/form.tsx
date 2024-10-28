"use client";

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";

export function SearchForm() {
    const form = useForm()
    return <Form {...form}>
        <FormField
            control={form.control}
            name="..."
            render={() => (
                <FormItem>
                    <FormLabel />
                    <FormControl>
                        { /* Your form field */}
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                </FormItem>
            )}
        />
    </Form >
}