import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Activity, Check, CornerDownLeft, Play, Shield, Server, Database, Smartphone, Globe } from 'lucide-react';
import { personalInfo, socialLinks } from '../../data/portfolioData';

const COMMANDS = {
  help: `Available commands:
  • whoami    - Profile summary and engineering identity
  • stack     - Core frontend, backend, database and data tools
  • projects  - Key full-stack production systems
  • contact   - Direct channels to connect with Harsh
  • clear     - Clear terminal buffer`,
  whoami: `HARSH DIKSHIT
Full-Stack Software Developer
Specializing in React frontends, Python/FastAPI and Node.js backends,
relational database schemas (MSSQL/MySQL), and data pipelines.`,
  stack: `CORE TECHNICAL STACK:
  • Frontend : React.js, JavaScript (ES6+), Vite, Tailwind CSS, HTML5, CSS3
  • Backend  : Node.js, Express.js, Python, FastAPI, RESTful APIs
  • Database : Microsoft SQL Server (MSSQL), MySQL, MongoDB, SQLAlchemy
  • Mobile   : Flutter (Dart)
  • Data     : Pandas, Web Scraping, Data Normalization, CSV Processing
  • Security : JWT Authentication, RBAC, Axios Interceptors`,
  projects: `CORNERSTONE PRODUCTION PROJECTS:
  1. Veterinary Care & Product Management (React + FastAPI + SQL + JWT)
  2. BizzLink Mobile Business Network (Flutter + Express + MSSQL)
  3. MarketIntel E-Commerce Price Intelligence (Python + Pandas + Scraping)`,
  contact: `CONNECT WITH HARSH:
  • Email    : ${socialLinks.email}
  • GitHub   : ${socialLinks.github}
  • LinkedIn : ${socialLinks.linkedin}`
};

export function HeroConsole() {
  const [activeTab, setActiveTab] = useState('terminal'); // 'terminal' | 'telemetry'
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: `Harsh Dikshit DevEnvironment v2.6.4 (x86_64-linux-gnu)` },
    { type: 'system', text: `Type 'help' or click buttons below to inspect system profile.` },
    { type: 'cmd', text: 'whoami' },
    { type: 'output', text: COMMANDS.whoami }
  ]);
  
  const isInitialMount = useRef(true);
  const terminalContainerRef = useRef(null);

  const executeCommand = (rawCmd) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    const output = COMMANDS[cmd] || `command not found: "${cmd}". Type 'help' for available commands.`;
    
    setHistory(prev => [
      ...prev,
      { type: 'cmd', text: rawCmd },
      { type: 'output', text: output }
    ]);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    }
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (activeTab === 'terminal' && terminalContainerRef.current) {
      terminalContainerRef.current.scrollTop = terminalContainerRef.current.scrollHeight;
    }
  }, [history, activeTab]);

  return (
    <div className="w-full rounded-2xl border border-slate-800 bg-[#0b0e17]/95 shadow-2xl overflow-hidden font-mono text-xs backdrop-blur-xl">
      {/* Console Top Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#090b14] border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <span className="ml-2 text-slate-400 font-medium text-[11px] hidden sm:inline">
            harsh@dikshit-fullstack: ~
          </span>
        </div>

        {/* Tab Toggle */}
        <div className="flex items-center gap-1 bg-slate-900/80 p-0.5 rounded-lg border border-slate-800">
          <button
            type="button"
            onClick={() => setActiveTab('terminal')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
              activeTab === 'terminal' 
                ? 'bg-slate-800 text-cyan-400 shadow-sm' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Terminal className="w-3 h-3" />
            <span>Terminal</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('telemetry')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
              activeTab === 'telemetry' 
                ? 'bg-slate-800 text-emerald-400 shadow-sm' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Activity className="w-3 h-3" />
            <span>Architecture Telemetry</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Terminal View */}
      {activeTab === 'terminal' && (
        <div className="p-4 sm:p-5 flex flex-col h-[340px] sm:h-[370px]">
          {/* Quick command buttons */}
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-800/60 overflow-x-auto text-[11px] text-slate-400 scrollbar-none">
            <span className="text-slate-500 uppercase tracking-wider text-[10px] shrink-0">Quick Run:</span>
            {['whoami', 'stack', 'projects', 'contact', 'clear'].map((cmd) => (
              <button
                key={cmd}
                type="button"
                onClick={() => executeCommand(cmd)}
                className="px-2 py-0.5 rounded bg-slate-800/80 hover:bg-cyan-950/60 hover:text-cyan-300 hover:border-cyan-500/30 border border-slate-700/60 text-slate-300 transition-colors shrink-0"
              >
                ${cmd}
              </button>
            ))}
          </div>

          {/* Terminal History */}
          <div ref={terminalContainerRef} className="flex-1 overflow-y-auto space-y-2.5 pr-2 scroll-smooth">
            {history.map((item, idx) => (
              <div key={idx} className="leading-relaxed">
                {item.type === 'system' && (
                  <p className="text-slate-500 italic">{item.text}</p>
                )}
                {item.type === 'cmd' && (
                  <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                    <span className="text-emerald-400">guest@harsh:~$</span>
                    <span>{item.text}</span>
                  </div>
                )}
                {item.type === 'output' && (
                  <pre className="text-slate-300 whitespace-pre-wrap pl-4 border-l-2 border-slate-800 py-1 font-mono text-[11px] leading-relaxed">
                    {item.text}
                  </pre>
                )}
              </div>
            ))}
          </div>

          {/* Terminal Input Prompt */}
          <div className="mt-3 pt-3 border-t border-slate-800 flex items-center gap-2">
            <span className="text-emerald-400 font-bold shrink-0">guest@harsh:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type 'help', 'stack' or 'projects'..."
              className="flex-1 bg-transparent text-cyan-300 focus:outline-none placeholder:text-slate-600 font-mono text-xs"
              aria-label="Terminal command prompt"
            />
            <button
              type="button"
              onClick={() => executeCommand(inputVal)}
              disabled={!inputVal.trim()}
              className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 disabled:opacity-40 transition-opacity"
              aria-label="Submit command"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Tab 2: System Telemetry View */}
      {activeTab === 'telemetry' && (
        <div className="p-4 sm:p-5 flex flex-col h-[340px] sm:h-[370px] justify-between">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            
            {/* Node 1: Client */}
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/30 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="font-semibold text-slate-200">Presentation Layer</span>
                </div>
                <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Active
                </span>
              </div>
              <p className="text-[11px] text-slate-400">React 19 / Vite / Flutter Client</p>
              <div className="mt-2 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                <span>Latency: 14ms</span>
                <span>Render: 60 FPS</span>
              </div>
            </div>

            {/* Node 2: Gateway */}
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/30 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-semibold text-slate-200">Security & API Gate</span>
                </div>
                <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> 200 OK
                </span>
              </div>
              <p className="text-[11px] text-slate-400">FastAPI & Express REST • JWT / RBAC</p>
              <div className="mt-2 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                <span>Auth: Stateless JWT</span>
                <span>Pydantic: Strict</span>
              </div>
            </div>

            {/* Node 3: Database */}
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/30 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Database className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="font-semibold text-slate-200">Storage & Relational</span>
                </div>
                <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Healthy
                </span>
              </div>
              <p className="text-[11px] text-slate-400">MSSQL • MySQL • MongoDB • SQLAlchemy</p>
              <div className="mt-2 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                <span>Schema: Normalized</span>
                <span>ACID: Enforced</span>
              </div>
            </div>

            {/* Node 4: Data Pipelines */}
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/30 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Server className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-semibold text-slate-200">Data Engineering</span>
                </div>
                <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Ready
                </span>
              </div>
              <p className="text-[11px] text-slate-400">Python • Pandas • Web Scraping • ETL</p>
              <div className="mt-2 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                <span>Deduplication: Active</span>
                <span>Export: CSV/JSON</span>
              </div>
            </div>

          </div>

          {/* Status Bar */}
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 status-pulse"></span>
              All Full-Stack Subsystems Operational
            </span>
            <span className="text-cyan-400 font-mono">Uptime 99.98%</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default HeroConsole;
