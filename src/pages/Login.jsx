import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const loginData = {
      email,
      senha,
    };

    console.log('Login Data:', loginData);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#0e0e12] overflow-hidden">
      {/* Background effect */}
      <div className="absolute w-[700px] h-[700px] bg-red-600 rounded-full blur-[200px] opacity-30 animate-pulse"></div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-sm p-6 space-y-6 bg-[#1c1c22] rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm text-white">Email</label>
            <input
              type="email"
              placeholder="Exemplo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-4 py-2 bg-[#2a2a32] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div>
            <label className="text-sm text-white">Senha</label>
            <input
              type="password"
              placeholder="************"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full mt-1 px-4 py-2 bg-[#2a2a32] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition duration-200 cursor-pointer"
          >
            Entrar
          </button>
        </form>

        <div className="">
          <a href="#" className="text-sm text-gray-400 hover:underline">
            Esqueceu sua senha?
          </a>
        </div>

        {/* <div className="bg-[#1a1a1f] p-4 rounded-md">
          <p className="text-sm text-gray-300 mb-2">Não tem uma conta?</p>
          <button
            className="w-full py-2 bg-red-700 text-white rounded-md hover:bg-red-800 transition duration-200 cursor-pointer"
            onClick={() => alert('Redirecionando para cadastro')}
          >
            Cadastre-se agora
          </button>
        </div> */}
      </div>
      {/* copy */}
      <div className="relative mt-3 z-10 w-full max-w-sm p-6 space-y-6 bg-[#1c1c22] rounded-lg shadow-lg">
        <div className="bg-[#1a1a1f] rounded-md">
          <p className="text-sm text-gray-300 mb-2">Não tem uma conta?</p>
          <button
            className="w-full py-2 bg-red-700 text-white rounded-md hover:bg-red-800 transition duration-200 cursor-pointer"
            onClick={() => alert('Redirecionando para cadastro')}
          >
            Cadastre-se agora
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
