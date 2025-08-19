
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
   location: "",
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
*Location:* ${formData.location}%0A
*Date:* ${formData.appointmentDate}%0A
*Time:* ${formData.appointmentTime}%0A
*Type:* ${formData.appointmentType}%0A
*Symptoms:* ${formData.symptoms}`;

  const whatsappNumber = "919392648120";
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
    location: "",
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
                  <span className="text-sm">+91 93926 48120</span>
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
                  src="https://ik.imagekit.io/ThedevsTechnologies/electro-stimulation-in-physical-therapy-to-a-young-woman-photo.jpg?updatedAt=1755582438776" 
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
        placeholder="919392648120"
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
    <div className="space-y-2">
  <Label htmlFor="location" className="text-gray-700 font-medium">
    Location *
  </Label>
  <Select
    id="location"
    name="location"
    value={formData.location}
    onChange={handleInputChange}
    required
  >
    <option value="">Select Your Location</option>
    <option value="Ajit Singh Nagar">Ajit Singh Nagar</option>
    <option value="Arul Nagar">Arul Nagar</option>
    <option value="Ashok Nagar">Ashok Nagar</option>
    <option value="Auto Nagar">Auto Nagar</option>
    <option value="Ayodhya Nagar">Ayodhya Nagar</option>
    <option value="Ayyappa Nagar">Ayyappa Nagar</option>
    <option value="Bandar Road">Bandar Road</option>
    <option value="Bapanayyanagar">Bapanayyanagar</option>
    <option value="Bavapijet">Bavapijet</option>
    <option value="Benz Circle">Benz Circle</option>
    <option value="Bhagat Singh Nagar">Bhagat Singh Nagar</option>
    <option value="Bharathi Nagar">Bharathi Nagar</option>
    <option value="Bhavanipuram">Bhavanipuram</option>
    <option value="Bhimannavaripeta">Bhimannavaripeta</option>
    <option value="Bramandha Reddy Nagar">Bramandha Reddy Nagar</option>
    <option value="Canal Road">Canal Road</option>
    <option value="Chalasani Nagar">Chalasani Nagar</option>
    <option value="Chittinagar">Chittinagar</option>
    <option value="Chowdhary Pet">Chowdhary Pet</option>
    <option value="Christurajupuram">Christurajupuram</option>
    <option value="Currency Nagar">Currency Nagar</option>
    <option value="Devi Nagar">Devi Nagar</option>
    <option value="Durga Agraham">Durga Agraham</option>
    <option value="Enikepadu">Enikepadu</option>
    <option value="Fakirigudem">Fakirigudem</option>
    <option value="Fraserpeta">Fraserpeta</option>
    <option value="Gayatri Nagar">Gayatri Nagar</option>
    <option value="Gollapudi">Gollapudi</option>
    <option value="Governorpeta">Governorpeta</option>
    <option value="Gunadala">Gunadala</option>
    <option value="Hanumanpet">Hanumanpet</option>
    <option value="Jojinagar">Jojinagar</option>
    <option value="Kaleswara Rao Market">Kaleswara Rao Market</option>
    <option value="Kamayyathopu">Kamayyathopu</option>
    <option value="Kanuru">Kanuru</option>
    <option value="Krishnalanka">Krishnalanka</option>
    <option value="Labbipeta">Labbipeta</option>
    <option value="LEPL Icon">LEPL Icon</option>
    <option value="LIC Colony">LIC Colony</option>
    <option value="Lurdhunagar">Lurdhunagar</option>
    <option value="Mallikarjunapeta">Mallikarjunapeta</option>
    <option value="Milk Colony">Milk Colony</option>
    <option value="Moghalrajpuram">Moghalrajpuram</option>
    <option value="Mylavaram Vari Street">Mylavaram Vari Street</option>
    <option value="Nehru Nagar">Nehru Nagar</option>
    <option value="New Rajarajeswaripeta">New Rajarajeswaripeta</option>
    <option value="NH-9">NH-9</option>
    <option value="Nidamanuru">Nidamanuru</option>
    <option value="Patamata">Patamata</option>
    <option value="Vinchipeta">Vinchipeta</option>
    <option value="Yanamalakuduru">Yanamalakuduru</option>
    <option value="Payakapuram">Payakapuram</option>
    <option value="PNT Colony">PNT Colony</option>
    <option value="Poranki">Poranki</option>
    <option value="Ramalingeswara Nagar">Ramalingeswara Nagar</option>
    <option value="Ramarajunagar">Ramarajunagar</option>
    <option value="Ramavarappadu">Ramavarappadu</option>
    <option value="Ranga Nagar">Ranga Nagar</option>
    <option value="Ranigaritota">Ranigaritota</option>
    <option value="RR Nagar">RR Nagar</option>
    <option value="RTC Colony">RTC Colony</option>
    <option value="Sanath Nagar">Sanath Nagar</option>
    <option value="Satyanarayanapuram Main Road">Satyanarayanapuram Main Road</option>
    <option value="Satyanarayana Puram">Satyanarayana Puram</option>
    <option value="Sidhartha Nagar">Sidhartha Nagar</option>
    <option value="Sri Ramachandra Nagar">Sri Ramachandra Nagar</option>
    <option value="Sriram Nagar">Sriram Nagar</option>
    <option value="Stata Bank Colony">Stata Bank Colony</option>
    <option value="Station Road">Station Road</option>
    <option value="Surya Rao Peta">Surya Rao Peta</option>
    <option value="Tadigadapa Main Road">Tadigadapa Main Road</option>
    <option value="Tarapet">Tarapet</option>
    <option value="Tulasi Nagar">Tulasi Nagar</option>
    <option value="Vambay Colony">Vambay Colony</option>
    <option value="Vidhyadharapuram">Vidhyadharapuram</option>
  </Select>
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
        <motion.a
  href="https://wa.me/919392648120"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat on WhatsApp"
  initial={{ scale: 1, y: 20, opacity: 0 }}
  animate={{ scale: 1, y: 0, opacity: 1 }}
  whileHover={{ scale: 1.15, boxShadow: "0 8px 24px rgba(37,211,102,0.25)" }}
  whileTap={{ scale: 0.95 }}
  transition={{
    type: "spring",
    stiffness: 250,
    damping: 18,
    delay: 0.5
  }}
  style={{
    position: "fixed",
    bottom: "28px",
    right: "28px",
    zIndex: 1000,
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    background: "linear-gradient(135deg,#25D366,#128C7E)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer"
  }}
>
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="16" fill="#25D366"/>
    <path
      d="M22.675 19.92c-.375-.188-2.212-1.093-2.553-1.219-.339-.125-.583-.188-.823.188-.238.375-.938 1.218-1.15 1.469-.212.25-.4.282-.749.094-.348-.188-1.469-.541-2.796-1.723-1.033-.925-1.731-2.066-1.935-2.415s-.021-.541.167-.729c.172-.172.384-.446.573-.669.192-.223.256-.375.384-.623.125-.25.062-.469-.031-.657-.094-.188-.823-1.977-1.137-2.734-.302-.729-.609-.615-.823-.625-.214-.011-.469-.014-.719-.014-.25 0-.656.093-1.001.444-.344.349-1.314 1.283-1.314 3.132s1.348 3.627 1.536 3.882c.188.255 2.669 4.086 6.477 4.059 1.183-.008 2.062-.406 2.546-.801.484-.396 1.146-1.099 1.314-1.33.167-.229.167-.437.119-.625zm-6.522-12.671c-4.736 0-8.576 3.84-8.576 8.576 0 1.511.402 2.981 1.172 4.265l-1.09 3.978a.954.954 0 0 0 .295 1.009.947.947 0 0 0 1.011.164l4.149-1.652c1.222.773 2.615 1.184 4.039 1.182 4.737 0 8.577-3.84 8.577-8.576s-3.84-8.576-8.577-8.576zm6.693 14.021c-.396.653-1.917 1.895-2.703 2.017-.73.115-1.982.207-3.023-.854-2.323-2.228-4.037-4.195-4.037-6.387 0-1.303.641-2.643 1.299-3.093.657-.448.987-.589 1.269-.421.28.167 1.078 2.17 1.177 2.389.099.219.165.312.041.489-.138.194-.276.395-.422.605-.147.214-.303.417-.406.541-.104.125-.126.207-.042.37.084.165.373.647.726 1.066.353.422 1.295 1.345 2.019 1.763.278.166.438.172.562.084.123-.088.373-.416.521-.645.147-.229.281-.187.479-.125.199.062 1.736.827 2.011.927.273.101.224.396.129.648z"
      fill="#fff"
    />
  </svg>
</motion.a>

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
                  Phone: +919392648120<br />
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
