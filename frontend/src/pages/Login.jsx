import React from 'react'
import { useState } from 'react';
import {Lock , Mail} from 'lucide-react'
const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
      });
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
      };
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: type === 'checkbox' ? checked : value
        }));
      };
    
      return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gray-900">
          <div className="w-full max-w-md p-8">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-100 font-serif">
              EDC Portal 
            </h1>
            
            <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-center text-gray-100 mb-6">Login</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Email</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="block w-full pl-10 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
    
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Password</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="block w-full pl-10 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="Enter your password"
                      />
                    </div>
                  </div>
    
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                        className="h-4 w-4 text-indigo-500 bg-gray-700 border-gray-600 rounded focus:ring-indigo-500"
                      />
                      <label className="ml-2 text-sm text-gray-300">Remember me</label>
                    </div>
                    <button type="button" className="text-sm text-indigo-400 hover:text-indigo-300">
                      Forgot password?
                    </button>
                  </div>
    
                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Login