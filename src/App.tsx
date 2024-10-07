import React from 'react'
import { Tent, Mountain, Sun, MapPin, Mail } from 'lucide-react'

const activities = [
  { name: 'Camping', icon: Tent },
  { name: 'Hiking', icon: Mountain },
  { name: 'Sightseeing', icon: Sun },
]

function App() {
  return (
    <div className="min-h-screen bg-green-50">
      <header className="bg-green-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">OutdoorAdventures</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#activities" className="hover:underline">Activities</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero" className="py-20 text-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-4">Discover the Great Outdoors</h2>
            <p className="text-xl text-white mb-8">Experience nature's beauty with our guided outdoor activities</p>
            <a href="#activities" className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-300">Explore Activities</a>
          </div>
        </section>

        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
            <p className="text-lg mb-4">
              OutdoorAdventures is dedicated to helping people connect with nature and experience the thrill of outdoor activities. Our expert guides ensure safe and memorable adventures for all skill levels.
            </p>
            <p className="text-lg">
              Whether you're a seasoned outdoor enthusiast or a first-time adventurer, we have something for everyone. Join us and create lasting memories in the great outdoors!
            </p>
          </div>
        </section>

        <section id="activities" className="py-16 bg-green-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Activities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {activities.map((activity) => (
                <div key={activity.name} className="bg-white p-6 rounded-lg shadow-md">
                  <activity.icon className="w-12 h-12 text-green-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{activity.name}</h3>
                  <p>Experience the beauty of nature through our guided {activity.name.toLowerCase()} adventures.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
            <div className="flex flex-col md:flex-row justify-between items-start">
              <div className="mb-8 md:mb-0">
                <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                <p className="flex items-center mb-2"><MapPin className="mr-2" /> 123 Adventure Lane, Outdoor City, OC 12345</p>
                <p className="flex items-center mb-2"><Mail className="mr-2" /> info@outdooradventures.com</p>
              </div>
              <form className="w-full md:w-1/2">
                <input type="text" placeholder="Your Name" className="w-full mb-4 p-2 border rounded" />
                <input type="email" placeholder="Your Email" className="w-full mb-4 p-2 border rounded" />
                <textarea placeholder="Your Message" className="w-full mb-4 p-2 border rounded" rows={4}></textarea>
                <button type="submit" className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-300">Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 OutdoorAdventures. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App