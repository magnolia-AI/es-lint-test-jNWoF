'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

export default function ShopPage() {
  const breadProducts = [
    {
      name: "Sourdough Loaf",
      description: "Artisan sourdough, slow-fermented for a rich, tangy flavor and chewy crust.",
      image: "https://images.unsplash.com/photo-1596543138378-d5a22b070490?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Rye Bread",
      description: "Dense and hearty rye bread, perfect for sandwiches or with a smear of butter.",
      image: "https://images.unsplash.com/photo-1587314168485-32d608bd07dc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Baguette",
      description: "Classic French baguette with a crisp crust and soft, airy interior.",
      image: "https://images.unsplash.com/photo-1533810148782-b7e163c46114?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Whole Wheat",
      description: "Nutritious and wholesome whole wheat bread, baked fresh daily.",
      image: "https://images.unsplash.com/photo-1628243644026-64547900b957?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="min-h-full">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517433453-6253498872b0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white p-4">
          <h1 className="text-4xl font-bold tracking-tight lg:text-6xl drop-shadow-lg">
            Our Artisan Breads
          </h1>
          <p className="mt-4 text-lg max-w-[600px] mx-auto drop-shadow-md">
            Discover our full selection of freshly baked, handcrafted breads.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Explore Our Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {breadProducts.map((product, index) => (
            <Card key={index} className="flex flex-col">
              <div className="relative w-full h-48">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button className="w-full">Add to Cart</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Taste the Difference?</h2>
          <p className="text-lg max-w-[800px] mx-auto text-muted-foreground mb-10">
            Each loaf is baked with dedication and the finest ingredients. Order now and experience true artisan quality.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">
              Contact Us
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

