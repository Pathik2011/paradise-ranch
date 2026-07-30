import ScrollReveal from './ScrollReveal'

export default function Founder() {
    return (
        <section id="founder" className="py-20 px-6 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <ScrollReveal>
                    <div
                        className="rounded-2xl overflow-hidden shadow-2xl h-96 bg-cover bg-center"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1508217126498-e0e23c0e80ce?w=800&q=80')" }}
                    />
                </ScrollReveal>
                <ScrollReveal delay={2}>
                    <div>
                        <p className="text-amber-700 font-semibold tracking-widest uppercase text-sm mb-3">A Message from Our Founder</p>
                        <h2 className="text-4xl font-bold text-stone-800 mb-6">Welcome to Paradise Ranch</h2>
                        <p className="text-stone-600 leading-relaxed mb-4">
                            Hi, I am the owner of Paradise Ranch. I started this place to share my love of horses with families across North Alabama. Growing up around Wheeler Lake, I always dreamed of creating a space where both beginners and experienced riders could connect with these incredible animals.
                        </p>
                        <p className="text-stone-600 leading-relaxed mb-4">
                            Every horse here is part of our family. We hand-raise them with patience and care, so when you ride with us, you are not just a customer — you are our guest.
                        </p>
                        <p className="text-stone-600 leading-relaxed mb-6">
                            Whether it is your first time in the saddle or your hundredth, we promise you a safe, peaceful, and unforgettable experience along the banks of Wheeler Lake.
                        </p>
                        <p className="text-amber-700 font-semibold">— Owner, Paradise Ranch Wheeler Lake LLC</p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}