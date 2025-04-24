import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignupComp() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add fetch logic here if needed
    console.log('Signup:', form);
    navigate('/dashboard'); // Example redirect
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#1a1a2e] text-white">
      <form onSubmit={handleSubmit} className="bg-[#16213e] p-10 rounded-md shadow-md w-full max-w-md space-y-6">
        <h2 className="text-3xl font-bold text-center">Create Your Account</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="w-full p-3 rounded-md bg-[#0f3460] border-none focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 rounded-md bg-[#0f3460] border-none focus:outline-none"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-3 rounded-md bg-[#0f3460] border-none focus:outline-none"
        />
        <button type="submit" className="w-full p-3 bg-[#e94560] rounded-md hover:bg-[#ff6b81] transition-colors">
          Sign Up
        </button>
        <p className="text-center text-sm">
          Already have an account? <span className="text-[#e94560] cursor-pointer" onClick={() => navigate('/login')}>Login</span>
        </p>
      </form>
    </div>
  );
}

export default SignupComp;
