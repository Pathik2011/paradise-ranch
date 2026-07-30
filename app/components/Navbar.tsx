'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar({ forceSolid = false }: { forceSolid?: boolean }) {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    const isSolid = forceSolid || scrolled;

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const links = [
        { label: 'Home', href: '#' },
        { label: 'About', href: '#about' },
        { label: 'Rides', href: '#services' },
        { label: 'Horses', href: '#horses' },
        { label: 'Gallery', href: '#gallery' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Contact', href: '#contact' },
    ]

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isSolid ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                <a
                    href="#"
                    className={`text-xl font-bold tracking-tight transition ${isSolid ? 'text-stone-800' : 'text-white'
                        }`}
                >
                    Paradise Ranch
                </a>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className={`text-sm font-medium transition hover:text-amber-600 ${isSolid ? 'text-stone-600' : 'text-white/90'
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                    <Link
                        href="/book"
                        className="bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold px-5 py-2 rounded-full transition"
                    >
                        Book Now
                    </Link>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <div className={`space-y-1.5 ${isSolid ? 'text-stone-800' : 'text-white'}`}>
                        <span className={`block w-6 h-0.5 transition ${isSolid ? 'bg-stone-800' : 'bg-white'}`} />
                        <span className={`block w-6 h-0.5 transition ${isSolid ? 'bg-stone-800' : 'bg-white'}`} />
                        <span className={`block w-6 h-0.5 transition ${isSolid ? 'bg-stone-800' : 'bg-white'}`} />
                    </div>
                </button>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="md:hidden bg-white border-t border-stone-100 shadow-lg">
                    <div className="px-6 py-4 space-y-3">
                        {links.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="block text-stone-700 font-medium hover:text-amber-600 transition"
                            >
                                {link.label}
                            </a>
                        ))}
                        <Link
                            href="/book"
                            onClick={() => setMobileOpen(false)}
                            className="block w-full bg-amber-600 text-white text-center font-semibold px-5 py-2 rounded-full"
                        >
                            Book Now
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}