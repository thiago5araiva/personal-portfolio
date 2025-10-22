'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/src/components/ui/button'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/src/components/ui/form'
import { Input } from '@/src/components/ui/input'
import { Search } from 'lucide-react'
import { HTMLAttributes } from 'react'
import { cn } from '../lib/utils'

const FormSchema = z.object({
    search: z.string().min(2, {
        message: 'Username must be at least 2 characters.',
    }),
})

type Props = { className?: string }

export default function SearchHomeComponent({ className }: Props) {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            search: '',
        },
    })

    const onSubmit = (data: z.infer<typeof FormSchema>) => console.log(data)

    return (
        <div className={cn('search__component', className)}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="search"
                        render={({ field }) => (
                            <FormItem className="min-w-64">
                                <FormControl>
                                    <div className="flex items-center space-x-2 border rounded-full h-9 focus-visible:ring-0 px-3">
                                        <Search size={18} />
                                        <Input
                                            {...field}
                                            className="border-none p-0 ml-0 h-6 focus-visible:ring-0"
                                        />
                                    </div>
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </form>
            </Form>
        </div>
    )
}
