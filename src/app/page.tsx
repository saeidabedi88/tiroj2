'use client';

import React from 'react';
import { ArrowRight, Shield, Users, Phone, Database, Globe, Lock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
    return (
        <div className="min-h-screen">
            {/* Navigation */}
            <nav className="fixed w-full bg-white z-50 py-4">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <Link href="/" className="flex items-center">
                            <div className="text-2xl font-bold flex items-center">
                                <span className="text-[#1a5fb4]">Tiroj</span>
                                <span className="text-black">Net</span>
                            </div>
                        </Link>
                        <div className="hidden md:flex items-center space-x-8">
                            <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
                            <Link href="/services" className="text-gray-700 hover:text-gray-900">Services</Link>
                            <Link href="/about" className="text-gray-700 hover:text-gray-900">About Us</Link>
                            <Link
                                href="/contact"
                                className="bg-[#2ecc71] text-white px-6 py-2 rounded-full hover:bg-[#27ae60] transition-colors"
                            >
                                Request a Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
                            Simplify Your IT.<br />
                            Empower Your Business.
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Reliable IT, VoIP, Cybersecurity, and Web Services —<br />
                            All in One Place.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link
                                href="/contact"
                                className="bg-[#2ecc71] text-white px-8 py-4 rounded-full hover:bg-[#27ae60] transition-colors"
                            >
                                Request a Quote
                            </Link>
                            <Link
                                href="/services"
                                className="bg-gray-100 text-gray-700 px-8 py-4 rounded-full hover:bg-gray-200 transition-colors"
                            >
                                Explore Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
                        <p className="text-gray-600">Key differentiators that set us apart</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Service Cards */}
                        <div className="p-6 text-center">
                            <div className="w-16 h-16 bg-[#e8f5e9] rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-8 h-8 text-[#2ecc71]" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Managed IT Services</h3>
                        </div>

                        <div className="p-6 text-center">
                            <div className="w-16 h-16 bg-[#e8f5e9] rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Users className="w-8 h-8 text-[#2ecc71]" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Co-Managed IT</h3>
                        </div>

                        <div className="p-6 text-center">
                            <div className="w-16 h-16 bg-[#e8f5e9] rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Phone className="w-8 h-8 text-[#2ecc71]" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Managed Voice (VoIP)</h3>
                        </div>

                        <div className="p-6 text-center">
                            <div className="w-16 h-16 bg-[#e8f5e9] rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Database className="w-8 h-8 text-[#2ecc71]" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Data Backup + Disaster Recovery</h3>
                        </div>

                        <div className="p-6 text-center">
                            <div className="w-16 h-16 bg-[#e8f5e9] rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Lock className="w-8 h-8 text-[#2ecc71]" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Managed Security Services</h3>
                        </div>

                        <div className="p-6 text-center">
                            <div className="w-16 h-16 bg-[#e8f5e9] rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Globe className="w-8 h-8 text-[#2ecc71]" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Website Design + Hosting</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose TirojNet */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose TirojNet</h2>
                        <p className="text-gray-600">Key differentiators that set us apart</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-[#2ecc71] rounded-full flex items-center justify-center mx-auto mb-4">
                                <ArrowRight className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold">Book a Consultation</h3>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-[#2ecc71] rounded-full flex items-center justify-center mx-auto mb-4">
                                <ArrowRight className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold">Get a Plan</h3>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-[#2ecc71] rounded-full flex items-center justify-center mx-auto mb-4">
                                <ArrowRight className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold">Stay Protected</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">How It Works</h2>
                    {/* Add content for How It Works section */}
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-50 py-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-gray-600 mb-4 md:mb-0">
                            © {new Date().getFullYear()} TirojNet. All rights reserved.
                        </div>
                        <div className="flex space-x-6">
                            <Link href="/privacy" className="text-gray-600 hover:text-gray-900">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-gray-600 hover:text-gray-900">
                                Terms of Service
                            </Link>
                            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
} 