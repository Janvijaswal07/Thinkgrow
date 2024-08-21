import React from 'react';
import s1img1 from '../assets/ourServies/s1img1.png'
import s1img2 from '../assets/ourServies/s1img2.png'
import s1img3 from '../assets/ourServies/s1img3.png'
import s1img4 from '../assets/ourServies/s1img4.png'
import s1img5 from '../assets/ourServies/s1img5.png'
import s1img6 from '../assets/ourServies/s1img6.png'
import s1img7 from '../assets/ourServies/s1img7.png'
import s1img8 from '../assets/ourServies/s1img8.png'
import s2img1 from '../assets/ourServies/s2img1.png'
import s2img2 from '../assets/ourServies/s2img2.png'
import s2imgL from '../assets/ourServies/s2imgL.png'
import courseimg from '../assets/ourServies/pexels-fauxels-3184338 (1).jpg'


const OurServices = () => {
  return (
    <>
      {/* Page Heading Section */}
      <section className="page-heading bg-gradient-to-b from-[#f8206b] to-white  text-white py-20">
        <div className="container mx-auto text-center">
          <h4 className="text-lg uppercase tracking-widest">Empowering Your Future</h4>
          <h1 className="text-5xl font-bold mt-4">Our Educational Services</h1>
        </div>
      </section>

      {/* Services Section */}
      <section className="services py-16 ">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h6 className="text- uppercase font-semibold">Our Services</h6>
            <h4 className="text-3xl font-bold">What We <em className="text-[#f8206b]">Offer</em></h4>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: 'Personalized Tutoring',
                description: 'Tailored one-on-one tutoring sessions to help students excel in their studies.',
                icon:s1img1,
              },
              {
                title: 'Online Courses',
                description: 'A wide range of online courses to enhance your skills and knowledge.',
                icon:s1img2,
              },
              {
                title: 'Exam Preparation',
                description: 'Comprehensive preparation for standardized tests like SAT, ACT, and GRE.',
                icon:s1img3,
              },
              {
                title: 'Career Counseling',
                description: 'Guidan[#f73176]ce to help students choose the right career path based on their strengths and interests.',
                icon:s1img4,
              },
              {
                title: 'Workshops & Seminars',
                description: 'Interactive sessions focused on specific topics to broaden students’ knowledge.',
                icon:s1img5,
              },
              {
                title: 'Study Abroad Programs',
                description: 'Assistance with applications and preparations for studying in top international universities.',
                icon:s1img6,
              },
              {
                title: 'E-Library Access',
                description: 'Unlimited access to a vast collection of educational resources and reference materials.',
                icon:s1img7,
              },
              {
                title: 'Mentorship Programs',
                description: 'Connecting students with industry professionals for mentorship and career advice.',
                icon:s1img8,
              },
            ].map((service, index) => (
              <div key={index}  className="service-item bg-white p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105">
                <div className="icon mb-6">
                  <img src={service.icon} alt={service.title} className="w-16 h-16 mx-auto" />
                </div>
                <h4 className="text-2xl font-bold text-gray-800">{service.title}</h4>
                <p className="text-gray-600 mt-4">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple CTA Section */}
      <section className="simple-cta  bg-gradient-to-b from-red-300 text-white py-20">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 " data-aos="fade-up-right">
            <img src={courseimg} alt="CTA" className="w-full rounded-lg shadow-lg " style={{ borderRadius: '74% 26% 70% 30% / 36% 30% 70% 64%' }}/>
          </div>
          <div  data-aos="fade-left" className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:ml-12 text-center lg:text-left">
            <h6 className="text-white font-bold uppercase">Boost Your Learning Now!</h6>
            <h4 className="text-4xl font-bold mt-4">Get 50% OFF on Select Courses</h4>
            <p className="text-white text-xl mt-4">Enroll today in our top-rated courses and accelerate your learning journey with expert instructors.</p>
            <a href="courses.html" className="mt-8 inline-block  bg-red-300 py-3 px-8 rounded-full font-bold uppercase tracking-widest shadow-lg hover:bg-red-400 hover:text-white transition-colors">View Courses</a>
          </div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="featured-product py-20 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h6 className="text-[#f73176] uppercase font-semibold">Featured Service</h6>
            <h4 className="text-3xl font-bold">Our <em className="text-[#f8206b]">Top Course</em></h4>
          </div>
          <div className="flex flex-wrap justify-center items-center">
            <div className="w-full lg:w-1/4 mb-12 lg:mb-0">
              <div className="space-y-10">
                {[
                  {
                    title: 'Advanced Mathematics',
                    description: 'Master complex mathematical concepts with our in-depth course.',
                    icon:s2img1,
                  },
                  {
                    title: 'Scientific Research Methods',
                    description: 'Develop skills in scientific research and data analysis.',
                    icon:s2img2,
                  },
                ].map((course, index) => (
                  <div key={index} className="info-item flex items-center space-x-4">
                    <div className="icon object-cover object-top">
                      <img src={course.icon} alt={course.title} className="w-48" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800">{course.title}</h4>
                      <p className="text-gray-600 mt-2">{course.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-2/4 flex justify-center">
              <img src={s2imgL} alt="Featured Course" className="w-full rounded-lg" />
            </div>
            <div className="w-full lg:w-1/4 mt-12 lg:mt-0">
              <div className="space-y-10">
                {[
                  {
                    title: 'Creative Writing',
                    description: 'Enhance your writing skills with expert-led workshops.',
                    icon:s1img4
                  },
                  {
                    title: 'Entrepreneurship',
                    description: 'Learn how to build and grow your own business.',
                    icon:s1img6
                  },
                ].map((course, index) => (
                  <div key={index} className="info-item flex items-center space-x-4">
                    <div className="icon object-cover object-top">
                      <img src={course.icon} alt={course.title} className="w-32" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800">{course.title}</h4>
                      <p className="text-gray-600 mt-2">{course.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
