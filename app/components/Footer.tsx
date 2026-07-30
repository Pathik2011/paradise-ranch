export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-14 px-6">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <p className="font-bold text-stone-100 text-lg mb-3">Paradise Ranch</p>
          <p className="text-sm leading-relaxed mb-4">
            Authentic horseback riding experiences along the banks of Wheeler Lake in Hillsboro, Alabama.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-amber-400 transition" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" className="hover:text-amber-400 transition" aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a href="#" className="hover:text-amber-400 transition" aria-label="Yelp">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97-.246c-.224-.028-.4.173-.354.393l.615 3.049c.045.22.27.338.478.252l1.97-.808c.208-.085.29-.334.182-.537l-.92-1.703zm-3.29 4.39l-2.358 1.948c-.175.145-.196.41-.044.582l2.123 2.45c.152.175.416.188.584.028l1.95-1.83c.168-.16.152-.436-.034-.576l-2.315-1.602c-.186-.14-.44-.128-.586.001zm-4.17 1.115l-1.078 2.82c-.09.235.047.495.293.538l3.07.517c.246.042.47-.15.488-.402l.203-2.995c.018-.252-.177-.47-.43-.472l-2.068-.016c-.253-.002-.48.192-.478.01zm-.878-3.826l-2.907-.734c-.238-.06-.476.115-.497.36l-.203 3.086c-.02.245.177.46.43.472l2.98.136c.253.012.472-.19.48-.443l.084-2.977c.008-.253-.19-.468-.367-.9zm3.826-3.29l-1.83-1.95c-.16-.168-.436-.152-.576.034l-1.602 2.315c-.14.186-.128.44.001.586l1.948 2.358c.145.175.41.196.582.044l2.45-2.123c.175-.152.188-.416.028-.584l-1.001-1.68z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <p className="font-semibold text-stone-100 mb-4">Quick Links</p>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-amber-400 transition">About Us</a></li>
            <li><a href="#services" className="hover:text-amber-400 transition">Rides & Pricing</a></li>
            <li><a href="#horses" className="hover:text-amber-400 transition">Meet the Horses</a></li>
            <li><a href="#gallery" className="hover:text-amber-400 transition">Gallery</a></li>
            <li><a href="#faq" className="hover:text-amber-400 transition">FAQ</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="font-semibold text-stone-100 mb-4">Contact</p>
          <ul className="space-y-2 text-sm">
            <li>12359 Co Rd 400</li>
            <li>Hillsboro, AL 35643</li>
            <li className="pt-1"><a href="tel:7273140201" className="hover:text-amber-400 transition">(727) 314-0201</a></li>
            <li>Daily: 8:00 AM – 8:00 PM</li>
          </ul>
        </div>

        {/* Hours & Badge */}
        <div>
          <p className="font-semibold text-stone-100 mb-4">Visit Us</p>
          <ul className="space-y-2 text-sm mb-4">
            <li className="flex justify-between"><span>Mon – Sun</span><span>8AM – 8PM</span></li>
          </ul>
          <div className="inline-flex items-center gap-2 bg-amber-600/20 text-amber-400 text-xs font-bold px-3 py-1.5 rounded-full border border-amber-600/30">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
            Open Year Round
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-stone-800 text-center text-xs text-stone-600">
        © 2026 Paradise Ranch Wheeler Lake LLC. All rights reserved.
      </div>
    </footer>
  )
}