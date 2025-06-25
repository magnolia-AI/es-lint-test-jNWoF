'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Link from 'next/link'
import { Menu } from 'lucide-react'

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[240px] sm:w-[300px]">
        <nav className="flex flex-col gap-4 mt-8">
          <Link
            href="/"
            className="px-2 py-1 text-foreground hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="px-2 py-1 text-foreground hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            Shop
          </Link>
          <Link
            href="/contact"
            className="px-2 py-1 text-foreground hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
} 


