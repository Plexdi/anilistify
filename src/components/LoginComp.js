import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginComp() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add fetch logic here if needed
    console.log('Login:', form);
    navigate('/dashboard'); // Example redirect
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#1a1a2e] text-white">
      <form onSubmit={handleSubmit} className="bg-[#16213e] p-10 rounded-md shadow-md w-full max-w-md space-y-6">
        <h2 className="text-3xl font-bold text-center">Login to Your Account</h2>
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
          Login
        </button>
        <p className="text-center text-sm">
          Don't have an account? <span className="text-[#e94560] cursor-pointer" onClick={() => navigate('/signup')}>Sign Up</span>
        </p>
      </form>
    </div>
  );
}

export default LoginComp;
