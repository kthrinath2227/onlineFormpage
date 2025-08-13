
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Phone, Mail, MapPin, Stethoscope, Heart, Shield, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';

function App() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
   fullName: "",
   phoneNumber: "",
   gender: "",
   age: "",
   appointmentDate: '',
   appointmentTime: '',
   appointmentType: '',
   symptoms: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

 const handleSubmit = (e) => {
  e.preventDefault();
  
  if (!formData.fullName || !formData.age || !formData.gender || !formData.phoneNumber) {
    toast({
      title: "Missing Information",
      description: "Please fill in all required fields to book your appointment.",
      variant: "destructive"
    });
    return;
  }

  // Prepare WhatsApp message
  const message = `*New Appointment Request*%0A
*Name:* ${formData.fullName}%0A
*Phone:* ${formData.phoneNumber}%0A
*Gender:* ${formData.gender}%0A
*Age:* ${formData.age}%0A
*Date:* ${formData.appointmentDate}%0A
*Time:* ${formData.appointmentTime}%0A
*Type:* ${formData.appointmentType}%0A
*Symptoms:* ${formData.symptoms}`;

  const whatsappNumber = "919381187905"; // Your WhatsApp number without + sign
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

  // Open WhatsApp
  window.open(whatsappURL, "_blank");

  toast({
    title: "Appointment Details Ready on WhatsApp 📲",
    description: "WhatsApp will open with your appointment details."
  });

  // Reset form
  setFormData({
    fullName: "",
    phoneNumber: "",
    gender: "",
    age: "",
    appointmentDate: '',
    appointmentTime: '',
    appointmentType: '',
    symptoms: '',
  });
};


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      <Helmet>
        <title>Book Appointment - Dr. Triveni BPT Physiotherapist | Professional Healthcare</title>
        <meta name="description" content="Book your physiotherapy appointment with Dr. Triveni, experienced BPT physiotherapist. Professional healthcare services with personalized treatment plans." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        
        {/* Fixed Transparent Header */}
   <motion.header 
  initial={{ y: -50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6 }}
  style={{
    background: "linear-gradient(159deg, rgba(0, 72, 173, 0.7) 0%, rgba(21, 114, 253, 0.7) 100%)"
  }}
  className="fixed top-0 left-0 w-full z-50 backdrop-blur-md text-white py-3 shadow-lg"
>




          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-full pulse-medical">
                  <Stethoscope className="h-8 w-8" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Dr. Triveni</h1>
                  <p className="text-blue-100">BPT - Physiotherapist</p>
                </div>
              </div>
              <div className="hidden md:flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">+91 98765 43210</span>
                </div>
              </div>
            </div>
          </div>
        </motion.header>

        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pt-28 pb-16 relative overflow-hidden"
        >
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h2 
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6"
                >
                  Professional <span className="text-blue-600">Physiotherapy</span> Care
                </motion.h2>
                <motion.p 
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-xl text-gray-600 mb-8"
                >
                  Expert rehabilitation and wellness services with personalized treatment plans for your optimal recovery.
                </motion.p>
                <motion.div 
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                  <div className="flex items-center space-x-3 bg-white p-4 rounded-lg medical-shadow">
                    <Heart className="h-6 w-6 text-red-500" />
                    <span className="font-medium text-gray-700">Expert Care</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white p-4 rounded-lg medical-shadow">
                    <Shield className="h-6 w-6 text-green-500" />
                    <span className="font-medium text-gray-700">Safe Treatment</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white p-4 rounded-lg medical-shadow">
                    <CheckCircle className="h-6 w-6 text-blue-500" />
                    <span className="font-medium text-gray-700">Proven Results</span>
                  </div>
                </motion.div>
              </div>
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative"
              >
                <img  
                  className="w-full h-96 object-cover rounded-2xl medical-shadow" 
                  alt="Professional physiotherapy clinic"
                  src="https://images.unsplash.com/photo-1629909613638-0e4a1fad8f81" 
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl medical-shadow">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <User className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">500+ Patients</p>
                      <p className="text-sm text-gray-600">Successfully Treated</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Appointment Form */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="py-16 bg-white/50"
        >
          <div className="container mx-auto px-4">
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Book Your Appointment
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Schedule your consultation with Dr. Triveni for personalized physiotherapy treatment
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
              <div className="glass-effect rounded-2xl p-8 medical-shadow">
                <form onSubmit={handleSubmit} className="space-y-8">
                 

                 {/* Personal Information */}
<div>
  <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
    <User className="h-5 w-5 mr-2 text-blue-600" />
    Personal Information
  </h3>
  <div className="grid md:grid-cols-2 gap-6">
    {/* Row 1 - Full Name & Phone Number */}
    <div className="space-y-2">
      <Label htmlFor="fullName" className="text-gray-700 font-medium">
        Full Name *
      </Label>
      <Input
        id="fullName"
        name="fullName"
        value={formData.fullName || ''}
        onChange={handleInputChange}
        placeholder="Enter your full name"
        required
      />
    </div>
    <div className="space-y-2">
      <Label htmlFor="phone" className="text-gray-700 font-medium">
        Phone Number *
      </Label>
      <Input
        id="phone"
        name="phoneNumber"
        type="tel"
        value={formData.phoneNumber}
        onChange={handleInputChange}
        placeholder="+91 98765 43210"
        required
      />
    </div>

    {/* Row 2 - Gender & Age */}
    <div className="space-y-2">
      <Label htmlFor="gender" className="text-gray-700 font-medium">
        Gender
      </Label>
      <Select
        id="gender"
        name="gender"
        value={formData.gender}
        onChange={handleInputChange}
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
        <option value="prefer-not-to-say">Prefer not to say</option>
      </Select>
    </div>
    <div className="space-y-2">
      <Label htmlFor="age" className="text-gray-700 font-medium">
        Age
      </Label>
      <Input
        id="age"
        name="age"
        type="number"
        min="1"
        value={formData.age || ''}
        onChange={handleInputChange}
        placeholder="Enter your age"
      />
    </div>
  </div>
</div>

                 

                  {/* Appointment Details */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                      Appointment Details
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="appointmentDate" className="text-gray-700 font-medium">
                          Preferred Date *
                        </Label>
                        <Input
                          id="appointmentDate"
                          name="appointmentDate"
                          type="date"
                          value={formData.appointmentDate}
                          onChange={handleInputChange}
                          min={new Date().toISOString().split('T')[0]}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="appointmentTime" className="text-gray-700 font-medium">
                          Preferred Time *
                        </Label>
                        <Select
                          id="appointmentTime"
                          name="appointmentTime"
                          value={formData.appointmentTime}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select Time</option>
                          <option value="09:00">09:00 AM</option>
                          <option value="09:30">09:30 AM</option>
                          <option value="10:00">10:00 AM</option>
                          <option value="10:30">10:30 AM</option>
                          <option value="11:00">11:00 AM</option>
                          <option value="11:30">11:30 AM</option>
                          <option value="14:00">02:00 PM</option>
                          <option value="14:30">02:30 PM</option>
                          <option value="15:00">03:00 PM</option>
                          <option value="15:30">03:30 PM</option>
                          <option value="16:00">04:00 PM</option>
                          <option value="16:30">04:30 PM</option>
                          <option value="17:00">05:00 PM</option>
                        </Select>
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="appointmentType" className="text-gray-700 font-medium">
                          Appointment Type
                        </Label>
                        <Select
                          id="appointmentType"
                          name="appointmentType"
                          value={formData.appointmentType}
                          onChange={handleInputChange}
                        >
                          <option value="">Select Appointment Type</option>
                          <option value="consultation">Initial Consultation</option>
                          <option value="follow-up">Follow-up Visit</option>
                          <option value="therapy-session">Therapy Session</option>
                          <option value="rehabilitation">Rehabilitation Program</option>
                          <option value="sports-injury">Sports Injury Treatment</option>
                          <option value="pain-management">Pain Management</option>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Medical Information */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                      <Stethoscope className="h-5 w-5 mr-2 text-blue-600" />
                      Medical Information
                    </h3>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="symptoms" className="text-gray-700 font-medium">
                          Current Symptoms or Concerns
                        </Label>
                        <Textarea
                          id="symptoms"
                          name="symptoms"
                          value={formData.symptoms}
                          onChange={handleInputChange}
                          placeholder="Please describe your current symptoms, pain level, or areas of concern..."
                          rows={4}
                        />
                      </div>
                     
                    
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="pt-6"
                  >
                    <Button
  type="submit"
  className="w-full h-14 px-6 text-lg font-semibold medical-gradient hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl rounded-xl"
>
  <Calendar className="h-5 w-5 mr-2" />
  Book Appointment
</Button>
                  </motion.div>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Information */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="py-16 medical-gradient text-white"
        >
          <div className="container mx-auto px-2">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold">Location</h3>
                <p className="text-blue-100">
                  Vijayawada, Andhra Pradesh, India<br />
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold">Working Hours</h3>
                <p className="text-blue-100">
                  Monday - Sunday: 2:00 PM - 9:00 PM<br />
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold">Contact</h3>
                <p className="text-blue-100">
                  Phone: +91 98765 43210<br />
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <Toaster />
      </div>
    </>
  );
}

export default App;
