import { redirect } from 'next/navigation'

export function GET() {
    redirect(
        'https://wa.me/5562993248451?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20consulta%20sobre%20per%C3%ADcia%20digital.'
    )
}
