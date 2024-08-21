import React, { useState } from 'react';
import gift from '../assets/images/gifts.png'
import maleprofile from '../assets/images/maleprofile.png'
import femaleprofile from '../assets/images/femaleprofile.png'
import creative from '../assets/images/creative.jpg'
import technology from '../assets/images/technology.jpg'
import books from '../assets/images/books.jpg'
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const AboutUS = () => {
  // State to handle the active tab for team members
  const [activeMember, setActiveMember] = useState(0);

  const teamMembers = [
    {
      name: 'Aryan sharma',
      role: 'Creative Director',
      description: 'Aryan sharma leads our creative team with a vision to push the boundaries of design and innovation.',
      image: maleprofile,
      socialLinks: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Simran',
      role: 'Lead Instructor',
      description: 'Simran brings years of experience in graphic design education, helping students achieve their design goals.',
      image: femaleprofile,
      socialLinks: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Abhinav',
      role: 'Design Specialist',
      description: 'Abhinav specializes in visual design and is passionate about mentoring the next generation of designers.',
      image: maleprofile,
      socialLinks: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
      },
    },
  ];

  return (
    <div className="">
      {/* Page Heading */}
      <section className="py-12 text-center bg-gradient-to-b from-[#f8206b] to-white " >
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-white">
            About Us
          </h1>
          <p className="text-lg mb-8 text-white">
            Discover who we are and what drives us to help you master graphic design.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-12" >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md">
          <div className="md:w-1/2 p-6">
            <h2 className="text-5xl  font-bold mb-4 text-gray-800 animate-bounce">
              Our Mission
            </h2>
            <p className="text-gray-700  leading-relaxed">
              At Design Mastery, we are committed to providing the best resources and training for aspiring graphic designers. Our mission is to empower creatives with the skills and knowledge they need to excel in the world of design.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src={gift}
              alt="Mission"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-12 bg-red-300 mt-32">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">
            Meet Our Team
          </h2>
          <div className="flex justify-center flex-wrap gap-8 mb-8" >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`p-4 cursor-pointer ${
                  activeMember === index ? 'bg-white' : 'bg-red-200'
                } rounded-lg shadow-lg transition duration-300`}
                onClick={() => setActiveMember(index)}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <div className="p-6 bg-red-200 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800">
                {teamMembers[activeMember].name}
              </h3>
              <p className="text-gray-600">{teamMembers[activeMember].role}</p>
              <p className="mt-4">{teamMembers[activeMember].description}</p>
              <div className="mt-4 flex justify-center space-x-4">
                <a href={teamMembers[activeMember].socialLinks.facebook} className="text-blue-600 hover:underline ">
                  <div className='inline-block ml-2'><FaFacebookF /></div> Facebook
                </a>
                <a href={teamMembers[activeMember].socialLinks.twitter} className="text-blue-400 hover:underline">
                <div className='inline-block ml-2'><FaXTwitter /></div> Twitter
                </a>
                <a href={teamMembers[activeMember].socialLinks.linkedin} className="text-blue-700 hover:underline">
                <div className='inline-block '>< FaLinkedin /></div>  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional  */}
      <section className="py-24    text-white  bg-gradient-to-b from-red-300 to-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-4" data-aos="fade-right">
            Special Offer!
          </h2>
          <p className="text-xl mb-8" data-aos="fade-left">
            Up to 50% OFF for 1+ courses. Don't miss out on this limited-time offer to enhance your graphic design skills.
          </p>
          <button className="bg-white text-[#f73176] py-4 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 text-lg">
            View Courses
          </button>
        </div>
      </section>


      <section className="py-12  flex justify-center gap-5 flex-wrap">
      <div class="max-w-sm rounded overflow-hidden shadow-lg" data-aos="zoom-out-right">
  <img class="w-full h-96 object-cover" src={creative} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Creative Ideas</div>
    <p class="text-gray-700 text-base">
    Creative graphic design thrives on blending innovation with visual storytelling, using bold colors, unique typography, and dynamic layouts to captivate and communicate effectively."
    </p>
  </div>
  
</div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg" data-aos="zoom-out-down">
  <img class="w-full h-96 object-cover" src={technology} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Technology</div>
    <p class="text-gray-700 text-base">
      
"Technology drives innovation by merging human ingenuity with cutting-edge tools, transforming ideas into reality and pushing the boundaries of what's possible in every field."
    </p>
  </div>
 
</div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg" data-aos="zoom-out-left">
  <img class="w-full h-96 object-cover" src={books} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Ready Targets</div>
    <p class="text-gray-700 text-base">
   
"Ready targets are clear objectives or goals that are within reach, strategically identified for quick action and efficient achievement."
    </p>
  </div>
 
</div>
      </section>

      {/* Contact Call-to-Action */}
      <section className="py-12 mt-20 text-center bg-gradient-to-r from-[#f73176] to-red-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-gray-800 animate-pulse">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg mb-8 text-gray-600 ">
            Join our community and take the first step towards becoming a design expert.
          </p>
          <button className="bg-white text-[#f73176] py-3 px-6 rounded-lg shadow-lg  transition duration-300">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUS;