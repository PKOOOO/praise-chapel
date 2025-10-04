"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all elements with scroll-animate class
    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Praise Chapel Logo"
                width={400}
                height={120}
                className="h-20 w-auto"
                priority
              />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Services</a>
              <a href="#branches" className="text-gray-700 hover:text-primary transition-colors">Branches</a>
              <a href="#gallery" className="text-gray-700 hover:text-primary transition-colors">Gallery</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
                <a
                  href="#home"
                  className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-100 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-100 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#services"
                  className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-100 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </a>
                <a
                  href="#branches"
                  className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-100 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Branches
                </a>
                <a
                  href="#gallery"
                  className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-100 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Gallery
                </a>
                <a
                  href="#contact"
                  className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-100 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-primary to-red-600 text-white section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Image
              src="/cross.png"
              alt="Cross"
              width={120}
              height={120}
              className="mx-auto h-24 w-auto"
              priority
            />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">Jesus loves you</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Let everything that has breath praise the Lord
          </p>
          <p className="text-lg mb-8">Psalms 150:6</p>
          <button className="btn-secondary text-lg px-8 py-4">Join Us Today</button>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Welcome</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>
          <div className="max-w-4xl mx-auto text-center scroll-animate fade-up delay-200">
            <p className="text-lg text-gray-700 leading-relaxed">
              Welcome, and thank you for visiting Praise Chapel. We hope that our website highlights the wide variety of worship, fellowship and service opportunities available. Please feel free to read more about our church on this site, or come in for a visit. We would love to greet you and share with you our love for Jesus Christ and for you, our neighbor.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center scroll-animate fade-left hover-lift">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-lg text-gray-700">
                To raise up passionate worshippers who excellently and faithfully love God
              </p>
            </div>
            <div className="text-center scroll-animate fade-right hover-lift delay-200">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <div className="w-16 h-1 bg-secondary mx-auto mb-6"></div>
              <p className="text-lg text-gray-700">
                To be a Church that passionately and excellently love God and people
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our History</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>
          <div className="max-w-4xl mx-auto scroll-animate slide-up delay-200">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The Praise Chapel was laid in the heart of Bishop. Tee Nalo and his wife Pst. Liz towards the end of 2007, while serving as the associate pastor at the Mombasa Pentecostal Church. Bishop. Tee officially resigned from Mombasa Pentecostal Church to pursue the dream of starting Praise Chapel.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The Praise Chapel inaugural service was held at the Star of the Sea Hall on the 16th of December 2007 with just over 100 people in attendance. The official launch was on the 17th of February 2008 at the Mombasa Women's Hall with well over 700 people gracing the occasion.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The function was graced by the Calvary Temple of Embakasi Nairobi Pastor Tengu Yoka, the Chairman of the Mombasa Pastor's Fellowship and the chairman of Kenya Christian Leader's fellowship. God has been very faithful and gracious to us.
            </p>
          </div>
        </div>
      </section>

      {/* Presiding Bishop Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Presiding Bishop</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>
          <div className="max-w-4xl mx-auto scroll-animate scale-in delay-200">
            <div className="bg-white p-8 rounded-lg shadow-lg hover-lift">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Bishop Tee Nalo was born on May 7th 1966 to Rev. and Mrs. Otieno. He grew up in Mombasa Kenya, where he got his formal education. Upon completion of high school, he worked with British American Insurance Company for a short stint. The call of the Lord to full time ministry was heavy upon his heart in 1989 and in September of that year he joined Pan African Christian University and graduated with a B.A. in Bible and Theology.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Bishop Tee is married to Liz Abigael Akoth and they have three children, John Nalo, Tim Nalo and Amor Nalo. Before founding Praise Chapel, Bishop Tee served with Dove Christian Fellowship Nairobi, as a Youth Pastor for two and a half years. He moved on to Mombasa Pentecostal Church where he served for twelve years in various capacities. By the time he left MPC he was the Associate Pastor and pastor in charge of Missions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Praise Chapel Leadership</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              A ministry Coordinating Team consisting of the presiding pastor/bishop and not more than seven (7) brethren referred to as the Ministry Coordinating Team forms the leadership of Praise Chapel. In addition a team of elders will help the presiding pastor bishop in spiritual matters.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center scroll-animate zoom-in hover-lift">
              <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                  alt="Bishop Tee Nalo"
                  width={150}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Bishop Tee Nalo</h3>
              <p className="text-primary font-semibold">Presiding Bishop, Praise Chapel</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center scroll-animate zoom-in delay-100 hover-lift">
              <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                  alt="Manazes Alwenya"
                  width={150}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Manazes Alwenya</h3>
              <p className="text-primary font-semibold">The Managing Director, Alwenya & Co. Advocates</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center scroll-animate zoom-in delay-200 hover-lift">
              <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
                  alt="Dr. Fredrick Mwazuna"
                  width={150}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Fredrick Mwazuna</h3>
              <p className="text-primary font-semibold">The Managing Director, Savannah Medical Clinic</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center scroll-animate zoom-in delay-300 hover-lift">
              <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
                  alt="Hon. Sammy Ruwa"
                  width={150}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Hon. Sammy Ruwa</h3>
              <p className="text-primary font-semibold">Speaker, Kwale County</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center scroll-animate zoom-in delay-400 hover-lift">
              <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face"
                  alt="Aphaxard M. Kirimi"
                  width={150}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Aphaxard M. Kirimi</h3>
              <p className="text-primary font-semibold">Internal Auditor, Kenya Ports Authority</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statement of Fundamental Beliefs Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Statement of Fundamental Beliefs</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We believe that the Bible is God's final revelation and constitutes our all sufficient rule of faith and practice. This church shall accept, stand by, act upon and adhere to the fundamental beliefs as outlined below.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg scroll-animate rotate-in hover-lift">
              <h3 className="text-xl font-bold text-primary mb-4">THE CHURCH</h3>
              <p className="text-gray-700">
                We believe that the church consists of all persons who have been regenerated by the Holy Spirit and made new creatures in Christ Jesus.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg scroll-animate rotate-in delay-100 hover-lift">
              <h3 className="text-xl font-bold text-primary mb-4">THE SAVIOUR</h3>
              <p className="text-gray-700">
                We believe that all have sinned and come short of the glory of God and that through the death and risen power of Christ all who believe in him can be saved from the penalty and power of sin.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg scroll-animate rotate-in delay-200 hover-lift">
              <h3 className="text-xl font-bold text-primary mb-4">THE TRINITY</h3>
              <p className="text-gray-700">
                We believe that the Godhead eternally exists in three persons, Father, Son and Holy Ghost, and that these three are one God.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg scroll-animate rotate-in delay-300 hover-lift">
              <h3 className="text-xl font-bold text-primary mb-4">THE BIBLE</h3>
              <p className="text-gray-700">
                We believe that the Bible is the inspired Word of God and that none may add there to or take there from except at their peril.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg scroll-animate rotate-in delay-400 hover-lift">
              <h3 className="text-xl font-bold text-primary mb-4">THE BAPTISER</h3>
              <p className="text-gray-700">
                We believe that our Lord Jesus Christ is the Baptizer in the Holy Spirit, and that this baptism followed with the initial sign of speaking in other tongues is promised to every believer.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg scroll-animate rotate-in delay-500 hover-lift">
              <h3 className="text-xl font-bold text-primary mb-4">THE COMING KING</h3>
              <p className="text-gray-700">
                We believe in the personal and pre millennial return of our Lord Jesus Christ to receive unto Himself the Church, and afterwards to set up His throne as King.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg scroll-animate bounce-in delay-600 hover-lift md:col-span-2 lg:col-span-3">
              <h3 className="text-xl font-bold text-primary mb-4">THE HEALER</h3>
              <p className="text-gray-700">
                We believe that our Lord Jesus Christ is the healer of the body and that all who walk in obedience to his will can claim divine healing for their bodies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Services</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-gray-700">Services are held in the main Church</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg scroll-animate fade-left hover-lift">
              <h3 className="text-2xl font-bold text-primary mb-6">Sunday Services</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Sunrise service at 7:00 AM
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Mid-morning service at 9:00 AM
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Sunday school at 9:00 AM
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Teens class at 9:00 AM
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Youth special moment after the second service
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg scroll-animate fade-right delay-200 hover-lift">
              <h3 className="text-2xl font-bold text-primary mb-6">Weekday Services</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  <strong>Monday-Friday:</strong> Morning glory 6:30 AM - 7:30 AM
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  <strong>Tuesday:</strong> School of Ministry at 5:30 PM
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  <strong>Wednesday:</strong> Turning point service at 5:30 PM
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-primary text-white p-8 rounded-lg scroll-animate slide-up delay-400">
            <h3 className="text-2xl font-bold mb-6">Tuesday School of Ministry Offerings</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Man of Honour
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Woman of Peace
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Fascinating Womanhood
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  How to study the Bible
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Making prayer an adventure
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Get IT right (Young adults class)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section id="branches" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Praise Chapel Branches</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-primary mb-4">SIAYA COUNTY BRANCHES</h3>
              <p className="text-gray-700 mb-4">
                Siaya County houses two branches of Praise Chapel, Sigomere Praise Chapel which is the mother church, and Mbosie Praise Chapel.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Leadership:</strong> Bishop John Nalo assisted by Pastor Nicholas (Sigomere) and Pastor Charles (Mbosie)
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-primary mb-4">BUSIA COUNTY BRANCH</h3>
              <p className="text-gray-700 mb-4">
                Busia County currently hosts Busia Praise Chapel located at Ojami area near the Kenya/Uganda border.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Started:</strong> November 2004<br/>
                <strong>Leadership:</strong> Pastor Julius Omondi
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-primary mb-4">KAKAMEGA COUNTY BRANCH</h3>
              <p className="text-gray-700 mb-4">
                Kakamega County hosts Umala Praise Chapel located near the Kakamega and Siaya border.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Started:</strong> 2012<br/>
                <strong>Leadership:</strong> Pastor Fred
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-primary mb-4">KWALE COUNTY BRANCH</h3>
              <p className="text-gray-700 mb-4">
                Praise Chapel Mission Centre Kwale is located in Kinango area called Doti. The centre is in a very difficult area dominated by Muslims.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Started:</strong> 2014<br/>
                <strong>Leadership:</strong> Pastor Naftali
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-primary mb-4">TAITA TAVETA COUNTY BRANCH</h3>
              <p className="text-gray-700 mb-4">
                Taita Taveta hosts Praise Chapel Voi located in Voi town near the Law courts.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Started:</strong> 2015<br/>
                <strong>Leadership:</strong> Pastor Kasuku
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-gray-700">Moments of worship, fellowship, and community at Praise Chapel</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop"
                alt="Church worship service"
                width={500}
                height={400}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">Worship Service</span>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a78e?w=500&h=400&fit=crop"
                alt="Church community"
                width={500}
                height={400}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">Community Fellowship</span>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1544376664-80b17f09d399?w=500&h=400&fit=crop"
                alt="Church building"
                width={500}
                height={400}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">Our Church</span>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <Image
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=400&fit=crop"
                alt="Youth ministry"
                width={500}
                height={400}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">Youth Ministry</span>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <Image
                src="https://images.unsplash.com/photo-1515378791036-0648a814c963?w=500&h=400&fit=crop"
                alt="Prayer meeting"
                width={500}
                height={400}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">Prayer Meeting</span>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <Image
                src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=500&h=400&fit=crop"
                alt="Bible study"
                width={500}
                height={400}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">Bible Study</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-gray-700">We would love to hear from you</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-700">info@praisechapelkenya.org</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-700">+254 715 567000</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-700">Mathenge Road opposite Aga Khan Hospital</p>
                    <p className="text-gray-700">P.O BOX 98856-80100, Mombasa, Kenya</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Subscribe for Updates</h3>
              <p className="text-gray-700 mb-6">
                We invite you to join our mailing list and receive emails we send out with news, or special Mass schedules
              </p>
              <form className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Image
                src="/logo.png"
                alt="Praise Chapel Logo"
                width={350}
                height={105}
                className="h-20 w-auto"
              />
            </div>
            <p className="text-lg mb-4">Let everything that has breath praise the lord</p>
            <p className="text-sm mb-8">Psalms 150:6</p>
            
            {/* Social Media Icons */}
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                </svg>
              </a>
            </div>
            
            <div className="border-t border-gray-700 pt-6">
              <p className="text-sm text-gray-400">© 2025 by Praise Chapel Kenya</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}