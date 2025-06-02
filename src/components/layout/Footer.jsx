import React from 'react';
import { MessageCircle, Facebook, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <section className="relative px-8 py-16 text-center "
       style={{
                fontFamily: 'Georgia, Times, "Times New Roman", serif',
                fontStyle: 'italic'
              }}
    >
      {/* Social Media Icons Header */}


      <div className="max-w-6xl mx-auto p-8 rounded-2xl shadow-lg bg-[#e0f5da7d]/50" >
        {/* Contact Title */}
        <h2 
          className="text-5xl font-serif mb-8 italic"
          style={{ 
            color: '#325655',
            
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
                color: '#325655',
              
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
               color: '#325655',
                
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
                color: '#325655',
                
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
              color: '#325655',
              
            }}
          >
            Office Hours: Monday - Friday 7:00 am - 5:00 pm
          </div>
          <div 
            className="text-xl italic"
            style={{ 
             color: '#325655',
              
            }}
          >
            Saturday 7:00 am - 12:00 m
          </div>
          <div 
            className="text-xl italic"
            style={{ 
             color: '#325655',
             
            }}
          >
            Sunday Closed
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="pt-8">
        <p 
          className="text-lg tracking-wider"
          style={{ 
            color: '#325655',
            
          }}
        >
          All Rights Reserved © dhdiegohernandez.com
        </p>
      </div>
    </section>
  );
}