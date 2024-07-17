'use client'
import { getGlobalFooter } from './actions'
import { useQuery } from '@tanstack/react-query'
import Heading from '@/_components/typography/heading'
import Link from 'next/link'
import { BatteryCharging } from 'lucide-react'

export default function Footer() {
  const getGlobalFooterResponse = useQuery({
    queryKey: ['globalFooter'],
    queryFn: getGlobalFooter,
  })

  const content = getGlobalFooterResponse?.data?.componentFooter
  const year = `${new Date().getFullYear()}`

  return (
    <footer className="border-t-2 py-10 mt-20 sm:mt-32">
      <div className="grid gap-10">
        <div className="lg:flex justify-between">
          <div className="mb-10 lg:mb-0">
            <Heading
              type="h3"
              className="text-2xl text-center text-font-high lg:text-2xl lg:text-left font-bold mb-4">
              {content?.text}
            </Heading>
            <Heading
              type="h3"
              className="text-xl text-center text-font-low lg:text-2xl lg:text-left font-bold">
              {content?.email}
            </Heading>
          </div>
          <div className="flex flex-col gap-4 text-center cursor-pointer">
            {content?.linkCollection.items.map((link, index) => (
              <Link
                href={link.url}
                className="text-base text-font-low"
                key={index}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-end cursor-pointer">
          <small>
            © Copyright {year} {content?.copyright}
          </small>
          <div className="flex flex-col">
            <div className="flex gap-3 items-end mb-1 justify-end text-font-low">
              <BatteryCharging />
              <small className="text-right font-bold">Powered by</small>
            </div>
            <div className="flex gap-3">
              {content?.poweredBy?.map((item, index) => (
                <small key={index} className="text-font-low">
                  {item}
                </small>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
