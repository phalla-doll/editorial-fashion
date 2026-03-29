"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Logo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="90" height="90" stroke="currentColor" strokeWidth="3"/>
    <rect x="20" y="20" width="60" height="60" stroke="currentColor" strokeWidth="3"/>
    <path d="M20 50H80" stroke="currentColor" strokeWidth="3"/>
    <path d="M50 20V80" stroke="currentColor" strokeWidth="3"/>
    <circle cx="50" cy="50" r="12" stroke="currentColor" strokeWidth="3" fill="currentColor" fillOpacity="0.1"/>
  </svg>
);

const products = [
  { id: 1, name: "LIGHT SPRING TRENCH POPPY", price: "1 080 EUR", image: "https://picsum.photos/seed/fashion1/600/800?grayscale", category: "Ready to wear" },
  { id: 2, name: "MERINO TURTLENECK BLACK", price: "510 EUR", image: "https://picsum.photos/seed/fashion2/600/800?grayscale", category: "Ready to wear" },
  { id: 3, name: "STRIPED MINI SKIRT ICE/WHITE", price: "550 EUR", image: "https://picsum.photos/seed/fashion3/600/800?grayscale", category: "Ready to wear" },
  { id: 4, name: "CREW CAPE KNIT DARK GREY", price: "910 EUR", image: "https://picsum.photos/seed/fashion4/600/800?grayscale", category: "Ready to wear" },
  { id: 5, name: "BROAD PEACOAT BLACK", price: "1 460 EUR", image: "https://picsum.photos/seed/fashion5/600/800?grayscale", category: "Ready to wear" },
  { id: 6, name: "OVERSIZED STRIPED SHIRT BLUE", price: "670 EUR", image: "https://picsum.photos/seed/fashion6/600/800?grayscale", category: "Ready to wear" },
  { id: 7, name: "FUNNEL ALPACA-BLEND KNIT BLACK", price: "600 EUR", image: "https://picsum.photos/seed/fashion7/600/800?grayscale", category: "Ready to wear" },
  { id: 8, name: "CINCHED POCKET JACKET BLACK", price: "680 EUR", image: "https://picsum.photos/seed/fashion8/600/800?grayscale", category: "Ready to wear" },
  { id: 9, name: "LIGHT SPRING TRENCH POPPY", price: "1 080 EUR", image: "https://picsum.photos/seed/fashion9/600/800?grayscale", category: "Ready to wear" },
  { id: 10, name: "WIDE FLANNEL TROUSERS NAVY PETITE", price: "450 EUR", image: "https://picsum.photos/seed/fashion10/600/800?grayscale", category: "Ready to wear" },
  { id: 11, name: "SHORT FLUID JERSEY SKIRT BLACK", price: "350 EUR", image: "https://picsum.photos/seed/fashion11/600/800?grayscale", category: "Ready to wear" },
  { id: 12, name: "SLOUCH WAIST WOOL DRESS POPPY", price: "710 EUR", image: "https://picsum.photos/seed/fashion12/600/800?grayscale", category: "Ready to wear" },
  { id: 17, name: "LEATHER TOTE BAG", price: "850 EUR", image: "https://picsum.photos/seed/bag1/600/800?grayscale", category: "Bags" },
  { id: 18, name: "SILK SCARF", price: "250 EUR", image: "https://picsum.photos/seed/acc1/600/800?grayscale", category: "Accessories" },
  { id: 19, name: "POINTY TOE PUMPS", price: "550 EUR", image: "https://picsum.photos/seed/shoes1/600/800?grayscale", category: "Shoes" },
  { id: 20, name: "GOLD HOOP EARRINGS", price: "320 EUR", image: "https://picsum.photos/seed/jewel1/600/800?grayscale", category: "Jewelry" },
  { id: 21, name: "SIGNATURE COAT", price: "1 200 EUR", image: "https://picsum.photos/seed/sig1/600/800?grayscale", category: "Signature Pieces" },
  { id: 22, name: "GARDEROB ESSENTIAL TEE", price: "150 EUR", image: "https://picsum.photos/seed/gard1/600/800?grayscale", category: "Garderob" },
];

const categories = [
  "Ready to wear",
  "Accessories",
  "Garderob",
  "Bags",
  "Shoes",
  "Jewelry",
  "Signature Pieces"
];

const newArrivals = [
  { id: 13, name: "CORD OVERSHIRT JACKET BLACK", price: "720 EUR", image: "https://picsum.photos/seed/fashion13/600/800?grayscale" },
  { id: 14, name: "PETAL SKIRT BLACK", price: "910 EUR", image: "https://picsum.photos/seed/fashion14/600/800?grayscale" },
  { id: 15, name: "CINCHED PUFFER JACKET BLACK", price: "1 820 EUR", image: "https://picsum.photos/seed/fashion15/600/800?grayscale" },
  { id: 16, name: "SLOUCH WAIST WOOL DRESS POPPY", price: "710 EUR", image: "https://picsum.photos/seed/fashion16/600/800?grayscale" },
];

export default function Page() {
  const [activeCategory, setActiveCategory] = useState("Ready to wear");

  const filteredProducts = products.filter(product => product.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 sticky top-0 bg-[#f4f4f4]/90 backdrop-blur-md z-50">
        <nav className="hidden md:flex gap-16 text-[10px] font-bold tracking-[0.15em] uppercase">
          <Link href="#" className="hover:opacity-60 transition-opacity">About</Link>
          <Link href="#" className="hover:opacity-60 transition-opacity">Campaign</Link>
        </nav>
        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <Logo className="w-12 h-12" />
        </Link>
        <nav className="hidden md:flex gap-16 text-[10px] font-bold tracking-[0.15em] uppercase">
          <Link href="#" className="hover:opacity-60 transition-opacity">Shop</Link>
          <Link href="#" className="hover:opacity-60 transition-opacity">Contact</Link>
        </nav>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-24 pb-20 overflow-hidden flex flex-col items-center text-center">
          {/* Background massive text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center pointer-events-none opacity-[0.03] select-none">
            <h1 className="font-anton text-[28vw] leading-none whitespace-nowrap text-black">THE STUDIO</h1>
          </div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="flex items-center gap-4 mb-6">
               <div className="flex gap-[3px]">
                 <div className="w-[3px] h-[14px] bg-black"></div>
                 <div className="w-[3px] h-[14px] bg-black"></div>
                 <div className="w-[3px] h-[14px] bg-black"></div>
                 <div className="w-[3px] h-[14px] bg-black"></div>
               </div>
            </div>
            <h2 className="font-anton text-6xl md:text-8xl lg:text-[110px] uppercase tracking-tight mb-10">Our Collection</h2>
            <p className="max-w-[400px] text-[9px] font-bold tracking-[0.15em] uppercase leading-[1.8] text-center">
              ---<br/>
              Each collection is developed as part of a wider system. Garments are designed to coexist—supporting modern life through form, material, and balance.
            </p>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="px-4 md:px-8 mb-12">
          <div className="border-y border-black/10 py-5 flex flex-col lg:flex-row justify-between items-center gap-6 text-[9px] font-bold tracking-[0.15em] uppercase">
            <div className="w-full lg:w-auto text-left">Collection</div>
            <div className="flex flex-wrap justify-center lg:justify-end gap-6 md:gap-10 w-full lg:w-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`uppercase transition-colors ${
                    activeCategory === category
                      ? "font-bold text-black"
                      : "text-black/40 hover:text-black"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="px-4 md:px-8 mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-16">
            {filteredProducts.map((product) => (
              <Link href="#" key={product.id} className="group block">
                <div className="relative aspect-[3/4] mb-5 bg-[#e5e5e5] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="flex justify-between items-start text-[9px] font-bold tracking-[0.15em] uppercase">
                  <h3 className="pr-4 leading-[1.4] max-w-[75%]">{product.name}</h3>
                  <span className="whitespace-nowrap">{product.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Pagination */}
        <section className="flex justify-center mb-32 text-[10px] font-bold tracking-[0.15em]">
          <div className="flex gap-3">
            <span className="w-8 h-8 flex items-center justify-center bg-black text-white">1</span>
            <Link href="#" className="w-8 h-8 flex items-center justify-center hover:bg-black/5 transition-colors">2</Link>
            <Link href="#" className="w-8 h-8 flex items-center justify-center hover:bg-black/5 transition-colors">3</Link>
            <Link href="#" className="w-8 h-8 flex items-center justify-center hover:bg-black/5 transition-colors">4</Link>
            <Link href="#" className="w-8 h-8 flex items-center justify-center hover:bg-black/5 transition-colors">5</Link>
          </div>
        </section>

        {/* Middle Banner */}
        <section className="relative w-full h-[85vh] min-h-[700px] bg-[#111] text-white flex items-center justify-center overflow-hidden mb-32">
          <div className="absolute inset-0 opacity-50">
            <Image
              src="https://picsum.photos/seed/storefront/1920/1080?grayscale"
              alt="Storefront"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Timeline markers */}
          <div className="absolute top-1/2 left-8 -translate-y-1/2 hidden lg:flex items-center gap-3 text-[9px] font-bold tracking-[0.15em] uppercase z-20">
             <div className="flex gap-[3px]">
               <div className="w-[3px] h-[14px] bg-white"></div>
               <div className="w-[3px] h-[14px] bg-white"></div>
               <div className="w-[3px] h-[14px] bg-white"></div>
             </div>
             2014 - THE BEGINNING
          </div>
          <div className="absolute top-12 left-1/2 -translate-x-1/2 flex items-center gap-3 text-[9px] font-bold tracking-[0.15em] uppercase z-20">
             <div className="flex gap-[3px]">
               <div className="w-[3px] h-[14px] bg-white"></div>
               <div className="w-[3px] h-[14px] bg-white"></div>
               <div className="w-[3px] h-[14px] bg-white"></div>
             </div>
             2016 - THE UNIFORM EMERGES
          </div>
          <div className="absolute top-1/2 right-8 -translate-y-1/2 hidden lg:flex items-center gap-3 text-[9px] font-bold tracking-[0.15em] uppercase z-20">
             2018 - THE CODE
             <div className="flex gap-[3px]">
               <div className="w-[3px] h-[14px] bg-white"></div>
               <div className="w-[3px] h-[14px] bg-white"></div>
               <div className="w-[3px] h-[14px] bg-white"></div>
             </div>
          </div>

          <div className="relative z-10 bg-[#111]/90 p-4 md:p-6 max-w-xl text-center border-[12px] border-white/10 mx-4">
             <div className="relative w-full aspect-[4/3] mb-8 border border-white/20">
                <Image
                  src="https://picsum.photos/seed/interior/800/600?grayscale"
                  alt="Store Interior"
                  fill
                  className="object-cover p-2"
                />
             </div>
             <p className="text-[9px] font-bold tracking-[0.15em] uppercase leading-[1.8] px-4 pb-4">
               TOTEME IS AN INDEPENDENT HOUSE OF REFINED ESSENTIALS.<br/>
               DESIGNED THROUGH REDUCTION, DEFINED BY PROPORTION,<br/>
               MATERIAL INTEGRITY, AND TIMELESS FORM. A PERMANENT<br/>
               WARDROBE—MADE TO RETURN.
             </p>
          </div>
        </section>

        {/* Designed With Intention */}
        <section className="px-4 md:px-8 mb-32 flex flex-col items-center text-center">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-10">
            <h2 className="font-anton text-5xl md:text-7xl lg:text-[90px] uppercase tracking-tight">DESIGNED</h2>
            <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden grayscale">
              <Image src="https://picsum.photos/seed/texture1/200/200" alt="Texture" fill className="object-cover" />
            </div>
            <h2 className="font-anton text-5xl md:text-7xl lg:text-[90px] uppercase tracking-tight">WITH</h2>
            <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden grayscale">
              <Image src="https://picsum.photos/seed/texture2/200/200" alt="Texture" fill className="object-cover" />
            </div>
            <h2 className="font-anton text-5xl md:text-7xl lg:text-[90px] uppercase tracking-tight">INTENTION</h2>
          </div>
          <p className="max-w-[500px] text-[9px] font-bold tracking-[0.15em] uppercase leading-[1.8]">
            EACH COLLECTION IS DEVELOPED AS PART OF A WIDER WARDROBE.<br/>
            EVERY SILHOUETTE, FABRIC, AND TONE IS CONSIDERED IN RELATION<br/>
            TO THE WHOLE—ALLOWING PIECES TO COEXIST SEAMLESSLY<br/>
            ACROSS SEASONS.
          </p>
        </section>

        {/* New Arrivals */}
        <section className="px-4 md:px-8 mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="font-anton text-5xl md:text-7xl lg:text-[80px] uppercase tracking-tight leading-none">NEW ARRIVALS</h2>
            <p className="max-w-[350px] text-[9px] font-bold tracking-[0.15em] uppercase leading-[1.8] text-left md:text-right">
              ---<br/>
              DISCOVER READY TO WEAR, SHOES, BAGS, ACCESSORIES AND JEWELRY FROM THE PRE SPRING 26 COLLECTION.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-16">
            {newArrivals.map((product) => (
              <Link href="#" key={product.id} className="group block">
                <div className="relative aspect-[3/4] mb-5 bg-[#e5e5e5] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="flex justify-between items-start text-[9px] font-bold tracking-[0.15em] uppercase">
                  <h3 className="pr-4 leading-[1.4] max-w-[75%]">{product.name}</h3>
                  <span className="whitespace-nowrap">{product.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#111] text-white pt-24 pb-12 px-4 md:px-8 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-32">
          <div className="lg:col-span-1">
            <h4 className="text-[10px] font-bold tracking-[0.15em] uppercase mb-6">JOIN OUR NEWSLETTER</h4>
            <p className="text-[9px] text-white/50 tracking-[0.15em] uppercase mb-8 leading-[1.8]">
              FOR QUIET UPDATES ON NEW ARRIVALS,<br/>
              EDITORIAL STORIES, AND SEASONAL HIGHLIGHTS.
            </p>
            <form className="flex border-b border-white/20 pb-3">
              <input 
                type="email" 
                placeholder="SIGN UP WITH YOUR EMAIL" 
                className="bg-transparent text-[9px] tracking-[0.15em] uppercase w-full outline-none placeholder:text-white/30"
              />
              <button type="submit" className="text-[9px] font-bold tracking-[0.15em] uppercase hover:text-white/70 transition-colors ml-4">
                SUBSCRIBE
              </button>
            </form>
          </div>
          
          <div className="lg:col-start-3">
            <h4 className="text-[10px] font-bold tracking-[0.15em] uppercase mb-8">CUSTOMER CARE</h4>
            <ul className="flex flex-col gap-5 text-[9px] text-white/50 tracking-[0.15em] uppercase">
              <li><Link href="#" className="hover:text-white transition-colors">SHIPPING & RETURNS</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">ORDER TRACKING</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">SIZE GUIDE</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">ABOUT US</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-[0.15em] uppercase mb-8">SHOP</h4>
            <ul className="flex flex-col gap-5 text-[9px] text-white/50 tracking-[0.15em] uppercase">
              <li><Link href="#" className="hover:text-white transition-colors">NEW ARRIVALS</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">BEST SELLERS</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">ALL COLLECTIONS</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-[0.15em] uppercase mb-8">CONTACT</h4>
            <ul className="flex flex-col gap-5 text-[9px] text-white/50 tracking-[0.15em] uppercase">
              <li><Link href="#" className="hover:text-white transition-colors">EMAIL US</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">STORE LOCATIONS</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">CLIENT SERVICES</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">SOCIAL MEDIAS</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-end justify-between gap-8 relative">
          <h1 className="font-anton text-[22vw] leading-[0.75] tracking-tighter text-white m-0 p-0 -ml-[1vw]">TOTEME</h1>
          <div className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 shrink-0 mb-4 md:mb-0">
            <Logo className="w-full h-full text-white" />
          </div>
        </div>
      </footer>
    </div>
  );
}
