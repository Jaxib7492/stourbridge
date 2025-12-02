import React, { useState, useEffect } from 'react';
import { Home as HomeIcon, Ear, MapPin, Phone, Mail, Clock, Upload as UploadIcon, CheckCircle, Users, Star } from 'lucide-react';
import { VideoGallery } from '../components/VideoGallery';
import { VideoUpload } from '../components/VideoUpload';
import { ClinicVideoGallery } from '../components/ClinicVideoGallery';
import { ClinicVideoUpload } from '../components/ClinicVideoUpload';
import { BookingsList } from '../components/BookingsList';
import { Auth } from '../components/Auth';
import { ContactForm } from '../components/ContactForm';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';

export function HomePage() {
  const navigate = useNavigate();
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showClinicUploadModal, setShowClinicUploadModal] = useState(false);
  const [refreshVideos, setRefreshVideos] = useState(0);
  const [refreshClinicVideos, setRefreshClinicVideos] = useState(0);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsAuthenticated(!!session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-800 to-red-900">
          <div className="absolute top-20 left-10 w-2 h-2 bg-red-400 rounded-full opacity-60 animate-float" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-red-400 rounded-full opacity-40 animate-float" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
          <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-red-300 rounded-full opacity-50 animate-float" style={{animationDelay: '2s', animationDuration: '3.5s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-red-300 rounded-full opacity-60 animate-float" style={{animationDelay: '0.5s', animationDuration: '4.5s'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-red-400 rounded-full opacity-40 animate-float" style={{animationDelay: '1.5s', animationDuration: '3.8s'}}></div>

          <div className="absolute inset-0 opacity-30 animate-pulse-slow" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(220, 38, 38, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(185, 28, 28, 0.3) 0%, transparent 50%)'
          }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 drop-shadow-2xl overflow-visible" style={{lineHeight: '1.6'}}>
            <span className="inline-block animate-fade-in-up opacity-0" style={{animationDelay: '0.1s'}}>Professional</span>{' '}
            <span className="inline-block animate-fade-in-up opacity-0" style={{animationDelay: '0.2s'}}>Earwax</span>{' '}
            <span className="inline-block animate-fade-in-up opacity-0" style={{animationDelay: '0.3s'}}>Removal</span>{' '}
            <span className="inline-block animate-fade-in-up opacity-0" style={{animationDelay: '0.4s'}}>&</span>{' '}
            <span className="inline-block animate-fade-in-up opacity-0" style={{animationDelay: '0.5s'}}>Hearing</span>{' '}
            <span className="inline-block animate-fade-in-up opacity-0" style={{animationDelay: '0.6s'}}>Aids</span>{' '}
            <span className="inline-block animate-fade-in-up opacity-0" style={{animationDelay: '0.7s'}}>in</span>{' '}
            <span className="inline-block bg-gradient-to-r from-red-400 via-red-300 to-red-400 bg-clip-text text-transparent animate-fade-in-up opacity-0" style={{animationDelay: '0.8s', paddingBottom: '0.5rem'}}>Stourbridge</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-3xl mx-auto animate-fade-in-up opacity-0" style={{animationDelay: '1s'}}>
            Safe microsuction, advanced private hearing aids, and caring local service.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in-up opacity-0" style={{animationDelay: '1s'}}>
            <button
              onClick={() => navigate('/contact')}
              className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-red-500/50 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden group"
            >
              <span className="relative z-10">Book Earwax Removal</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1"
            >
              Free Ear Check
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1"
            >
              Private Hearing Aids
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6 animate-fade-in-up opacity-0" style={{animationDelay: '1.4s'}}>
            <button
              onClick={() => scrollToSection('home-visits')}
              className="inline-flex items-center space-x-2 bg-white/95 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg hover:shadow-2xl hover:shadow-white/50 transition-all duration-500 hover:scale-110 cursor-pointer"
            >
              <HomeIcon className="w-5 h-5 text-red-600 animate-bounce-slow" />
              <span className="text-sm font-medium text-gray-700">
                Home Visit Service Available
              </span>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up opacity-0" style={{animationDelay: '1.6s'}}>
            <div className="inline-flex items-center space-x-2 bg-white/95 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700">
                Same-week appointments
              </span>
            </div>
            <div className="inline-flex items-center space-x-2 bg-white/95 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700">
                HCPC-registered clinicians
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Earwax Removal Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-3 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-64 h-64 bg-red-900/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-red-800/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full overflow-hidden">
          <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 px-2" style={{lineHeight: '1.3'}}>
              Professional Earwax Removal
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-2">
              Safe, gentle microsuction earwax removal by qualified audiologists — immediate relief, same-week appointments available
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-4 sm:gap-8 mb-12 w-full">
            <div className="space-y-6 lg:col-span-2 animate-on-scroll opacity-0 translate-y-8 w-full min-w-0" style={{animationDelay: '100ms'}}>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-3 sm:p-8 h-full flex flex-col w-full overflow-hidden">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Why Microsuction?</h3>
                <ul className="space-y-4 flex-grow">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div className="min-w-0 flex-1">
                      <p className="text-white font-semibold text-sm sm:text-base">Safe & Comfortable</p>
                      <p className="text-gray-400 text-sm break-words">No water flushed into the ear canal</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div className="min-w-0 flex-1">
                      <p className="text-white font-semibold text-sm sm:text-base">Immediate Results</p>
                      <p className="text-gray-400 text-sm break-words">Feel the difference straight away</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div className="min-w-0 flex-1">
                      <p className="text-white font-semibold text-sm sm:text-base">Safe for Perforations</p>
                      <p className="text-gray-400 text-sm break-words">Suitable even if you have ear problems</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div className="min-w-0 flex-1">
                      <p className="text-white font-semibold text-sm sm:text-base">Expert Care</p>
                      <p className="text-gray-400 text-sm break-words">Performed by HCPC-registered audiologists</p>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-gray-700">
                  <div className="bg-green-900/30 border border-green-700 rounded-lg p-3 sm:p-4 mb-4">
                    <p className="text-green-400 font-semibold text-center text-sm sm:text-base break-words">
                      Free Quick Look Service Available
                    </p>
                    <p className="text-green-300 text-xs sm:text-sm text-center mt-1 break-words">
                      Not sure if you need removal? We offer a complimentary ear check
                    </p>
                  </div>
                  <button
                    onClick={() => navigate('/earwax-removal')}
                    className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Learn More About Earwax Removal
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-6 lg:col-span-3 animate-on-scroll opacity-0 translate-y-8 w-full min-w-0" style={{animationDelay: '200ms'}}>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-3 sm:p-8 h-full flex flex-col w-full overflow-hidden">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">See the Process</h3>
                <div className="relative rounded-lg overflow-hidden w-full flex-grow bg-gray-900 min-h-[250px] sm:min-h-[400px]" style={{aspectRatio: '16/9'}}>
                  <iframe
                    src="https://www.youtube.com/embed/-pqE9yp2GQk?si=O3wGdQeul8P1xUUV&rel=0"
                    className="w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    title="Earwax Removal at Stourebridge"
                  />
                </div>
                <div className="mt-4 sm:mt-6 text-center px-2">
                  <p className="text-white font-semibold text-base sm:text-lg break-words">Professional Microsuction</p>
                  <p className="text-gray-400 text-sm sm:text-base break-words">Watch how our gentle earwax removal procedure works</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Private Hearing Aids Section */}
      <section id="hearing-aids" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-red-900/20 to-red-800/20 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4" style={{lineHeight: '1.3'}}>
              Private Hearing Aids Tailored to You
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              We offer discreet, high-performance hearing aids from leading brands. Every fitting is personalised with expert aftercare.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button
                onClick={() => navigate('/contact')}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1"
              >
                Book a Free Hearing Test
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1"
              >
                Book a Free Hearing Aids Demonstration
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 animate-on-scroll opacity-0 translate-y-8" style={{animationDelay: '200ms'}}>
            <div className="relative rounded-xl overflow-hidden shadow-lg aspect-square bg-gray-800 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <img
                src="/1.jpeg"
                alt="Hearing care service"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg aspect-square bg-gray-800 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <img
                src="/2.jpeg"
                alt="Patient care at clinic"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg aspect-square bg-gray-800 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <img
                src="/image copy copy copy copy copy.png"
                alt="Clinic interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg aspect-square bg-gray-800 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <img
                src="/image copy copy.png"
                alt="Hearing care equipment"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Stourbridge Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-red-900/20 to-red-800/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4" style={{lineHeight: '1.3'}}>
              Why Choose Stourbridge Hearing Centre?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all duration-500 hover:-translate-y-3 group animate-on-scroll opacity-0 translate-y-8">
              <div className="bg-red-900/30 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Users className="w-8 h-8 text-red-500 group-hover:animate-pulse" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Experienced Audiologists in Stourbridge</h3>
              <p className="text-gray-300 leading-relaxed">
                Our qualified audiologists are experts in earwax removal, microsuction, and private hearing aids. With years of clinical experience, we ensure every patient receives safe, comfortable, and effective treatment.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all duration-500 hover:-translate-y-3 group animate-on-scroll opacity-0 translate-y-8" style={{animationDelay: '150ms'}}>
              <div className="bg-red-900/30 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <MapPin className="w-8 h-8 text-red-500 group-hover:animate-pulse" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Independent Hearing Care Near You</h3>
              <p className="text-gray-300 leading-relaxed">
                As a local, independent hearing centre in Stourbridge, we provide honest advice and ongoing support — without pressure or sales targets. You'll always see the same trusted audiologist at every visit.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all duration-500 hover:-translate-y-3 group animate-on-scroll opacity-0 translate-y-8" style={{animationDelay: '300ms'}}>
              <div className="bg-red-900/30 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Star className="w-8 h-8 text-red-500 group-hover:animate-pulse" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Hundreds of Happy Patients</h3>
              <p className="text-gray-300 leading-relaxed">
                We're proud to have helped hundreds of patients improve their hearing health. Read our Google reviews to see why so many people choose Stourbridge Hearing Centre for expert, caring service.
              </p>
            </div>
          </div>


          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 text-center animate-on-scroll opacity-0 translate-y-8" style={{animationDelay: '600ms'}}>
            <p className="text-gray-300 text-lg mb-6 flex items-center justify-center gap-2">
              <Ear className="w-6 h-6 text-red-500" />
              <span>Join hundreds of patients who trust us for safe, comfortable earwax removal.</span>
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 inline-flex items-center gap-2"
            >
              Book Your Appointment
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Inside the Clinic Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-80 h-80 bg-gradient-to-br from-red-900/20 to-red-800/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex-1"></div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white flex-1" style={{lineHeight: '1.3'}}>
                Inside the Clinic
              </h2>
              <div className="flex-1 flex justify-end">
                {isAuthenticated && (
                  <button
                    onClick={() => setShowClinicUploadModal(true)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 text-sm"
                  >
                    <UploadIcon className="w-4 h-4" />
                    Upload Video
                  </button>
                )}
              </div>
            </div>
            <p className="text-base sm:text-lg text-gray-300">
              A quick look around Stourbridge Hearing Centre.
            </p>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-8" style={{animationDelay: '200ms'}}>
            <ClinicVideoGallery
              key={refreshClinicVideos}
              onUploadClick={() => {
                if (isAuthenticated) {
                  setShowClinicUploadModal(true);
                } else {
                  setShowAuthModal(true);
                }
              }}
              isAuthenticated={isAuthenticated}
            />
          </div>
        </div>
      </section>

      {/* Admin Bookings Section */}
      {isAuthenticated && (
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black">
          <div className="max-w-7xl mx-auto">
            <BookingsList />
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-gradient-to-br from-red-900/20 to-red-800/20 rounded-full blur-3xl"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4" style={{lineHeight: '1.3'}}>
              Get in Touch
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
              Book your appointment or contact us for any questions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6 animate-on-scroll opacity-0 translate-y-8">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-red-500 transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-900/30 p-3 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Address</h3>
                    <p className="text-gray-300 leading-relaxed">
                      59 High St,<br />
                      Stourbridge<br />
                      DY8 1DE
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-red-500 transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-900/30 p-3 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-red-500 group-hover:animate-bounce-slow" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Phone</h3>
                    <a href="tel:01384476306" className="text-gray-300 hover:text-red-400 transition-colors font-medium text-lg">
                      01384 476 306
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-red-500 transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-900/30 p-3 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Email</h3>
                    <a href="mailto:stourbridgehearingcentre@gmail.com" className="text-gray-300 hover:text-red-400 transition-colors font-medium">
                      stourbridgehearingcentre@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-red-500 transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-900/30 p-3 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-6 h-6 text-red-500" />
                  </div>
                  <div className="w-full">
                    <h3 className="font-bold text-white mb-3">Opening Hours:</h3>
                    <div className="text-gray-300 space-y-1">
                      <p><span className="font-semibold text-white">Monday to Saturday:</span> 9:30 AM – 5:00 PM</p>
                      <p><span className="font-semibold text-white">Sunday:</span> Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll opacity-0 translate-y-8" style={{animationDelay: '200ms'}}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative animate-fade-in-up">
            <button
              onClick={() => setShowAuthModal(false)}
              className="absolute -top-4 -right-4 bg-white text-gray-600 hover:text-gray-900 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Auth
              onAuthComplete={() => {
                setShowAuthModal(false);
                setIsAuthenticated(true);
              }}
            />
          </div>
        </div>
      )}

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative max-w-lg w-full animate-fade-in-up">
            <button
              onClick={() => setShowUploadModal(false)}
              className="absolute -top-4 -right-4 bg-white text-gray-600 hover:text-gray-900 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <VideoUpload
              onUploadComplete={() => {
                setShowUploadModal(false);
                setRefreshVideos(prev => prev + 1);
              }}
            />
          </div>
        </div>
      )}

      {/* Clinic Video Upload Modal */}
      {showClinicUploadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative max-w-lg w-full animate-fade-in-up">
            <button
              onClick={() => setShowClinicUploadModal(false)}
              className="absolute -top-4 -right-4 bg-white text-gray-600 hover:text-gray-900 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <ClinicVideoUpload
              onUploadComplete={() => {
                setShowClinicUploadModal(false);
                setRefreshClinicVideos(prev => prev + 1);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
