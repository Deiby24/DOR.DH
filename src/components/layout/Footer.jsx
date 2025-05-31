import React from 'react';
import { MessageCircle, Facebook, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <section className="relative px-8 py-16 text-center ">
      {/* Social Media Icons Header */}


      <div className="max-w-6xl mx-auto p-8 rounded-2xl shadow-lg" style={{ backgroundColor: 'rgba(228, 247, 225, 0.4)' }}>
        {/* Contact Title */}
        <h2 
          className="text-5xl font-serif mb-8 italic"
          style={{ 
            color: '#4a6741',
            fontFamily: 'Georgia, serif'
          }}
        >
          Contact us:
        </h2>
        
        {/* Contact Information */}
        <div className="space-y-4 mb-12">
          {/* Location */}
          <div>
            <p 
              className="text-xl italic"
              style={{ 
                color: '#4a6741',
                fontFamily: 'Georgia, serif'
              }}
            >
              Location: Cl.7 Sur #42-70, Of 1211 - The Forum - Poblado
            </p>
          </div>
          
          {/* Phone Numbers */}
          <div>
            <p 
              className="text-xl italic"
              style={{ 
                color: '#4a6741',
                fontFamily: 'Georgia, serif'
              }}
            >
              Phones: (+604) 4486893 - (+604) 3229015 - (+57) 311 7970832
            </p>
          </div>
          
          {/* Email */}
          <div>
            <p 
              className="text-xl italic"
              style={{ 
                color: '#4a6741',
                fontFamily: 'Georgia, serif'
              }}
            >
              Mail: info@drdiegohernandez.com.co
            </p>
          </div>
        </div>
        
        {/* Office Hours */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 mb-8">
          <div 
            className="text-xl italic"
            style={{ 
              color: '#4a6741',
              fontFamily: 'Georgia, serif'
            }}
          >
            Office Hours: Monday - Friday 7:00 am - 5:00 pm
          </div>
          <div 
            className="text-xl italic"
            style={{ 
              color: '#4a6741',
              fontFamily: 'Georgia, serif'
            }}
          >
            Saturday 7:00 am - 12:00 m
          </div>
          <div 
            className="text-xl italic"
            style={{ 
              color: '#4a6741',
              fontFamily: 'Georgia, serif'
            }}
          >
            Sunday Closed
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="pt-8">
        <p 
          className="text-sm tracking-wider"
          style={{ 
            color: '#4a6741',
            fontFamily: 'Georgia, serif'
          }}
        >
          All Rights Reserved © dhdiegohernandez.com
        </p>
      </div>
    </section>
  );
}