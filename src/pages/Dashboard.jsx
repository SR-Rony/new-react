// import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Sidebar from "../components/Sightbar";

// const sidebarItems = [
//   "Dashboard",
//   "Contatos",
//   "Chat",
//   "CRM",
//   "Agenda",
//   "Assistentes",
//   "Campanhas",
//   "Configurações",
//   "Log out",
// ];

const crmColumns = [
  {
    title: "Etapa 1",
    cards: [
      { name: "Nome do Contato", phone: "+55 (00) 00000-0000", product: "Nome do produto", value: "0,000.00", date: "1 dia atrás" },
      { name: "Nome do Contato", phone: "+55 (00) 00000-0000", product: "Nome do produto", value: "0,000.00", date: "1 dia atrás" },
    ],
  },
  {
    title: "Etapa 2",
    cards: [
      { name: "Nome do Contato", phone: "+55 (00) 00000-0000", product: "Nome do produto", value: "0,000.00", date: "4 dias atrás" },
      { name: "Nome do Contato", phone: "+55 (00) 00000-0000", product: "Nome do produto", value: "0,000.00", date: "6 dias atrás" },
    ],
  },
  {
    title: "Etapa 3",
    cards: [
      { name: "Nome do Contato", phone: "+55 (00) 00000-0000", product: "Nome do produto", value: "3,000.00", date: "2 dias atrás" },
    ],
  },
  {
    title: "Etapa 4",
    cards: [],
  },
  {
    title: "Etapa 5",
    cards: [],
  },
];

export default function CRMPage() {
  // const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
    <div className='flex justify-between bg-[#1c1c22] text-white w-full px-4 py-2 border-b border-gray-700'>
        <div><h1>Logo</h1></div>
        <div>Icone</div>
    </div>

    <div className="min-h-screen flex bg-[#0e0e12] text-white pt-4">
      
      <Sidebar/>
      {/* Sidebar */}
      {/* <div className={`fixed md:relative z-20 transition-all duration-300 ${sidebarOpen ? "w-64" : "w-0 md:w-20"} bg-[#1c1c22] overflow-hidden`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <span className="text-lg font-bold">Logoipsum</span>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden focus:outline-none"
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <ul className="p-4 space-y-2">
          {sidebarItems.map((item, index) => (
            <li
              key={index}
              className={`p-2 rounded hover:bg-red-800 cursor-pointer ${item === "CRM" ? "bg-gradient-to-r from-red-900 to-transparent" : ""}`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div> */}

      {/* Main Content */}
      {/* <div className={`flex-1 transition-all duration-300 p-4 ${sidebarOpen ? "md:ml-64" : "md:ml-20"}`}>
        <div className="flex items-center justify-between mb-6 sticky top-0 z-10 bg-[#0e0e12] py-2">
          <h1 className="text-2xl font-semibold">CRM</h1>
          <button
            className="md:hidden text-white"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu size={24} />
          </button>
        </div> */}

        {/* CRM Board */}
        <div className="overflow-x-auto">
          <div className="flex gap-4 min-w-[800px] sm:min-w-full">
            {crmColumns.map((col, colIndex) => (
              <div key={colIndex} className="bg-[#1c1c22] rounded-lg w-64 p-4 space-y-4">
                <div className="font-semibold mb-2">{col.title}</div>
                {col.cards.map((card, cardIndex) => (
                  <div
                    key={cardIndex}
                    className="bg-[#2a2a32] p-3 rounded-md text-sm space-y-1 shadow hover:shadow-md transition"
                  >
                    <div className="font-semibold">{card.name}</div>
                    <div className="text-xs text-gray-400">{card.phone}</div>
                    <div className="flex gap-1 mt-1">
                      <span className="bg-gray-600 text-white text-xs px-2 py-0.5 rounded">TAG1</span>
                      <span className="bg-gray-600 text-white text-xs px-2 py-0.5 rounded">TAG2</span>
                    </div>
                    <div className="mt-2">{card.product}</div>
                    <div className="text-sm">💰 {card.value}</div>
                    <div className="text-xs text-gray-500">Criado {card.date}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <footer className="mt-8 text-xs text-gray-500 text-center px-2 sm:px-4">
          2025 Nome da Empresa. <a href="#" className="underline">Política de Privacidade</a> · <a href="#" className="underline">Termos de Uso</a>
        </footer>
      </div>
    </>
  );
}
