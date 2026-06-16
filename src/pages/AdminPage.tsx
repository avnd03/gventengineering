import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard, FolderOpen, Wrench, Users, Mail,
  Settings, LogIn, LogOut, Eye, Trash2, CheckCircle,
  Plus, Edit, X, ChevronRight, Bell, Search, BarChart3,
  TrendingUp, Clock
} from 'lucide-react';

interface Inquiry {
  id: string; name: string; email: string; subject: string; message: string; date: string; read: boolean;
}

const initialInquiries: Inquiry[] = [
  { id: '1', name: 'John Tan', email: 'john@company.com', subject: 'ACMV Consultation', message: 'We need ACMV solutions for our new office building.', date: '2024-01-15', read: false },
  { id: '2', name: 'Sarah Lee', email: 'sarah@corp.sg', subject: 'Fire Protection Quote', message: 'Looking for fire protection system installation for our warehouse.', date: '2024-01-14', read: false },
  { id: '3', name: 'Michael Chen', email: 'michael@enterprise.com', subject: 'Structural Engineering', message: 'Need structural assessment for building renovation project.', date: '2024-01-13', read: true },
  { id: '4', name: 'Lisa Wong', email: 'lisa@build.sg', subject: 'Plumbing Services', message: 'Require plumbing maintenance contract for commercial building.', date: '2024-01-12', read: true },
];

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [inquiries, setInquiries] = useState<Inquiry[]>(initialInquiries);
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginForm.username === 'admin' && loginForm.password === 'admin123') {
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Invalid credentials. Use admin / admin123');
    }
  };

  const markAsRead = (id: string) => {
    setInquiries((prev) => prev.map((inq) => inq.id === id ? { ...inq, read: true } : inq));
  };

  const deleteInquiry = (id: string) => {
    setInquiries((prev) => prev.filter((inq) => inq.id !== id));
    if (selectedInquiry?.id === id) setSelectedInquiry(null);
  };

  const unreadCount = inquiries.filter((i) => !i.read).length;

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary via-primary-dark to-primary flex items-center justify-center p-6 pt-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10 md:p-12">
            <div className="text-center mb-10">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-5">
                <span className="text-white font-bold text-2xl font-[Poppins]">G</span>
              </div>
              <h1 className="text-2xl font-bold font-[Poppins] text-primary dark:text-white">Admin Panel</h1>
              <p className="text-secondary dark:text-gray-400 text-sm mt-2">Sign in to manage your website</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Username</label>
                <input
                  type="text"
                  value={loginForm.username}
                  onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent/50 text-base"
                  placeholder="Enter username"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
                <input
                  type="password"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent/50 text-base"
                  placeholder="Enter password"
                />
              </div>
              {loginError && (
                <p className="text-sm text-red-500 bg-red-50 dark:bg-red-900/20 rounded-lg p-4">{loginError}</p>
              )}
              <button
                type="submit"
                className="w-full py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl transition-all hover:shadow-lg flex items-center justify-center gap-2 text-base"
              >
                <LogIn className="w-5 h-5" />
                Sign In
              </button>
            </form>

            <p className="text-center text-xs text-gray-400 mt-8">
              Demo credentials: admin / admin123
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
    { id: 'projects', label: 'Projects', icon: <FolderOpen className="w-5 h-5" /> },
    { id: 'services', label: 'Services', icon: <Wrench className="w-5 h-5" /> },
    { id: 'clients', label: 'Client Logos', icon: <Users className="w-5 h-5" /> },
    { id: 'inquiries', label: 'Inquiries', icon: <Mail className="w-5 h-5" />, badge: unreadCount },
    { id: 'settings', label: 'Settings', icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24">
      <div className="flex">
        {/* Sidebar */}
        <aside className={`fixed left-0 top-24 bottom-0 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 z-30 ${sidebarOpen ? 'w-64' : 'w-20'}`}>
          <div className="flex flex-col h-full">
            <div className="p-5 border-b border-gray-100 dark:border-gray-700">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="w-11 h-11 bg-accent rounded-xl flex items-center justify-center text-white font-bold shrink-0">
                  G
                </div>
                {sidebarOpen && (
                  <div className="text-left">
                    <p className="text-sm font-bold text-primary dark:text-white">GVENT Admin</p>
                    <p className="text-xs text-gray-400 mt-0.5">Management Panel</p>
                  </div>
                )}
              </button>
            </div>

            <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-sm font-medium transition-all ${
                    activeTab === item.id
                      ? 'bg-accent/10 text-accent'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  {item.icon}
                  {sidebarOpen && <span>{item.label}</span>}
                  {item.badge && item.badge > 0 && (
                    <span className={`${sidebarOpen ? 'ml-auto' : 'absolute -top-1 -right-1'} w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}
            </nav>

            <div className="p-4 border-t border-gray-100 dark:border-gray-700">
              <button
                onClick={() => setIsLoggedIn(false)}
                className="w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                {sidebarOpen && <span>Sign Out</span>}
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
          {/* Top Bar */}
          <div className="sticky top-24 z-20 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-8 py-5">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-bold font-[Poppins] text-primary dark:text-white capitalize">
                  {activeTab}
                </h1>
                <p className="text-sm text-gray-400">Welcome back, Admin</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative hidden md:block">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm dark:text-white focus:outline-none focus:ring-2 focus:ring-accent/50 w-64"
                  />
                </div>
                <button className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <Bell className="w-5 h-5 text-gray-500" />
                  {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">
                      {unreadCount}
                    </span>
                  )}
                </button>
                <div className="w-9 h-9 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                  A
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <AnimatePresence mode="wait">
              {activeTab === 'dashboard' && (
                <motion.div
                  key="dashboard"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mb-10">
                    {[
                      { label: 'Total Projects', value: '7', icon: <FolderOpen className="w-6 h-6" />, color: 'bg-blue-500', change: '+12%' },
                      { label: 'Active Clients', value: '7', icon: <Users className="w-6 h-6" />, color: 'bg-green-500', change: '+8%' },
                      { label: 'Contact Inquiries', value: String(inquiries.length), icon: <Mail className="w-6 h-6" />, color: 'bg-purple-500', change: '+23%' },
                      { label: 'Services', value: '5', icon: <Wrench className="w-6 h-6" />, color: 'bg-orange-500', change: '0%' },
                    ].map((stat, i) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center text-white`}>
                            {stat.icon}
                          </div>
                          <span className="flex items-center gap-1 text-xs font-semibold text-green-500">
                            <TrendingUp className="w-3 h-3" />
                            {stat.change}
                          </span>
                        </div>
                        <h3 className="text-3xl font-bold font-[Poppins] text-primary dark:text-white">{stat.value}</h3>
                        <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Recent Activity */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold font-[Poppins] text-primary dark:text-white">Recent Inquiries</h3>
                        <button onClick={() => setActiveTab('inquiries')} className="text-sm text-accent hover:text-accent-dark flex items-center gap-1">
                          View All <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="space-y-4">
                        {inquiries.slice(0, 4).map((inq) => (
                          <div key={inq.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${inq.read ? 'bg-gray-400' : 'bg-accent'}`}>
                              {inq.name.charAt(0)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-primary dark:text-white truncate">{inq.name}</p>
                              <p className="text-xs text-gray-400 truncate">{inq.subject}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              {!inq.read && <span className="w-2 h-2 bg-accent rounded-full" />}
                              <span className="text-xs text-gray-400">{inq.date}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                      <h3 className="text-lg font-bold font-[Poppins] text-primary dark:text-white mb-6">Quick Stats</h3>
                      <div className="space-y-6">
                        {[
                          { label: 'Website Visits', value: '2,847', icon: <BarChart3 className="w-5 h-5" />, trend: '+15%' },
                          { label: 'Form Submissions', value: '34', icon: <Mail className="w-5 h-5" />, trend: '+8%' },
                          { label: 'Avg. Response Time', value: '2.4h', icon: <Clock className="w-5 h-5" />, trend: '-12%' },
                        ].map((item) => (
                          <div key={item.label} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                            <div className="flex items-center gap-3">
                              <div className="text-accent">{item.icon}</div>
                              <div>
                                <p className="text-sm font-medium text-primary dark:text-white">{item.label}</p>
                                <p className="text-xs text-gray-400">This month</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-lg font-bold text-primary dark:text-white">{item.value}</p>
                              <p className="text-xs text-green-500">{item.trend}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'inquiries' && (
                <motion.div
                  key="inquiries"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Inquiry List */}
                    <div className="lg:col-span-1 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
                      <div className="p-4 border-b border-gray-100 dark:border-gray-700">
                        <h3 className="font-bold text-primary dark:text-white">
                          Inquiries ({inquiries.length})
                        </h3>
                      </div>
                      <div className="divide-y divide-gray-100 dark:divide-gray-700 max-h-[600px] overflow-y-auto">
                        {inquiries.map((inq) => (
                          <button
                            key={inq.id}
                            onClick={() => { setSelectedInquiry(inq); markAsRead(inq.id); }}
                            className={`w-full text-left p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                              selectedInquiry?.id === inq.id ? 'bg-accent/5 border-l-4 border-accent' : ''
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 ${inq.read ? 'bg-gray-400' : 'bg-accent'}`}>
                                {inq.name.charAt(0)}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <p className={`text-sm truncate ${inq.read ? 'text-gray-600 dark:text-gray-400' : 'font-bold text-primary dark:text-white'}`}>
                                    {inq.name}
                                  </p>
                                  {!inq.read && <span className="w-2 h-2 bg-accent rounded-full shrink-0" />}
                                </div>
                                <p className="text-xs text-gray-500 truncate">{inq.subject}</p>
                                <p className="text-xs text-gray-400 mt-1">{inq.date}</p>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Inquiry Detail */}
                    <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
                      {selectedInquiry ? (
                        <div>
                          <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
                            <div>
                              <h3 className="text-lg font-bold text-primary dark:text-white">{selectedInquiry.subject}</h3>
                              <p className="text-sm text-gray-400">From: {selectedInquiry.name} ({selectedInquiry.email})</p>
                            </div>
                            <div className="flex items-center gap-2">
                              {!selectedInquiry.read && (
                                <button
                                  onClick={() => markAsRead(selectedInquiry.id)}
                                  className="p-2 text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg transition-colors"
                                  title="Mark as read"
                                >
                                  <CheckCircle className="w-5 h-5" />
                                </button>
                              )}
                              <button
                                onClick={() => deleteInquiry(selectedInquiry.id)}
                                className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                                title="Delete"
                              >
                                <Trash2 className="w-5 h-5" />
                              </button>
                            </div>
                          </div>
                          <div className="p-6">
                            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{selectedInquiry.message}</p>
                            </div>
                            <div className="mt-6 flex gap-4 text-sm text-gray-400">
                              <span>Date: {selectedInquiry.date}</span>
                              <span>Status: {selectedInquiry.read ? '✓ Read' : '• Unread'}</span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-96 text-gray-400">
                          <div className="text-center">
                            <Mail className="w-16 h-16 mx-auto mb-4 opacity-30" />
                            <p className="text-lg">Select an inquiry to view details</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'projects' && (
                <motion.div
                  key="projects"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
                    <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
                      <h3 className="text-lg font-bold text-primary dark:text-white">Projects Management</h3>
                      <button className="px-4 py-2 bg-accent text-white text-sm font-semibold rounded-lg flex items-center gap-2 hover:bg-accent-dark transition-colors">
                        <Plus className="w-4 h-4" />
                        Add Project
                      </button>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50 dark:bg-gray-700">
                          <tr>
                            <th className="text-left p-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Project</th>
                            <th className="text-left p-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Category</th>
                            <th className="text-left p-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Client</th>
                            <th className="text-left p-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Year</th>
                            <th className="text-left p-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                          {[
                            { name: 'Jewel Changi Airport', category: 'ACMV System', client: 'Changi Airport Group', year: '2019' },
                            { name: 'Katong Park MRT Station', category: 'ACMV System', client: 'LTA', year: '2024' },
                            { name: 'National Cancer Centre', category: 'Plumbing', client: 'MOH', year: '2022' },
                            { name: 'Keppel Tower', category: 'Structural', client: 'Keppel Corp', year: '2021' },
                            { name: 'Yishun Community Hospital', category: 'ACMV System', client: 'AHS', year: '2020' },
                          ].map((proj, i) => (
                            <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                              <td className="p-4 text-sm font-medium text-primary dark:text-white">{proj.name}</td>
                              <td className="p-4"><span className="px-2.5 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">{proj.category}</span></td>
                              <td className="p-4 text-sm text-gray-500">{proj.client}</td>
                              <td className="p-4 text-sm text-gray-500">{proj.year}</td>
                              <td className="p-4">
                                <div className="flex items-center gap-2">
                                  <button className="p-1.5 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"><Eye className="w-4 h-4" /></button>
                                  <button className="p-1.5 text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-900/20 rounded-lg transition-colors"><Edit className="w-4 h-4" /></button>
                                  <button className="p-1.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"><Trash2 className="w-4 h-4" /></button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'services' && (
                <motion.div
                  key="services"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
                    <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
                      <h3 className="text-lg font-bold text-primary dark:text-white">Services Management</h3>
                      <button className="px-4 py-2 bg-accent text-white text-sm font-semibold rounded-lg flex items-center gap-2 hover:bg-accent-dark transition-colors">
                        <Plus className="w-4 h-4" />
                        Add Service
                      </button>
                    </div>
                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {['ACMV System & Maintenance', 'Plumbing & Sanitary', 'Structural Design & Engineering', 'Fire Protection System', 'Addition & Alteration (A&A)'].map((name, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                              <Wrench className="w-5 h-5" />
                            </div>
                            <span className="font-medium text-primary dark:text-white text-sm">{name}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <button className="p-1.5 text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-900/20 rounded-lg transition-colors"><Edit className="w-4 h-4" /></button>
                            <button className="p-1.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"><Trash2 className="w-4 h-4" /></button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'clients' && (
                <motion.div
                  key="clients"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
                    <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
                      <h3 className="text-lg font-bold text-primary dark:text-white">Client Logos Management</h3>
                      <button className="px-4 py-2 bg-accent text-white text-sm font-semibold rounded-lg flex items-center gap-2 hover:bg-accent-dark transition-colors">
                        <Plus className="w-4 h-4" />
                        Add Client
                      </button>
                    </div>
                    <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                      {['Asahi', 'Seatrium', 'Kurihara', 'Omnicrest', 'Kinden', 'Keppel', 'Johnson Controls'].map((name, i) => (
                        <div key={i} className="relative group bg-gray-50 dark:bg-gray-700 rounded-xl p-6 flex flex-col items-center justify-center">
                          <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center text-accent font-bold text-xl mb-2">
                            {name.charAt(0)}
                          </div>
                          <span className="text-sm font-medium text-primary dark:text-white">{name}</span>
                          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                            <button className="p-1 text-amber-500 bg-white dark:bg-gray-600 rounded shadow-sm"><Edit className="w-3 h-3" /></button>
                            <button className="p-1 text-red-500 bg-white dark:bg-gray-600 rounded shadow-sm"><X className="w-3 h-3" /></button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'settings' && (
                <motion.div
                  key="settings"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-6">
                    <h3 className="text-lg font-bold text-primary dark:text-white mb-6">Company Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {[
                        { label: 'Company Name', value: 'GVENT Engineering Pte Ltd' },
                        { label: 'Phone', value: '+65 6123 4567' },
                        { label: 'Email', value: 'info@gvent.com.sg' },
                        { label: 'Website', value: 'www.gvent.com.sg' },
                      ].map((field) => (
                        <div key={field.label}>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">{field.label}</label>
                          <input
                            type="text"
                            defaultValue={field.value}
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                          />
                        </div>
                      ))}
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Registered Address</label>
                        <input
                          type="text"
                          defaultValue="10 Anson Road, #12-06 International Plaza, Singapore 079903"
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                        />
                      </div>
                    </div>
                    <button className="mt-6 px-6 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent-dark transition-colors">
                      Save Changes
                    </button>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-6">
                    <h3 className="text-lg font-bold text-primary dark:text-white mb-6">Social Media Links</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      {[
                        { label: 'Facebook', value: 'https://facebook.com/gventengineering' },
                        { label: 'LinkedIn', value: 'https://linkedin.com/company/gventengineering' },
                        { label: 'Instagram', value: 'https://instagram.com/gventengineering' },
                      ].map((field) => (
                        <div key={field.label}>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">{field.label}</label>
                          <input
                            type="text"
                            defaultValue={field.value}
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                          />
                        </div>
                      ))}
                    </div>
                    <button className="mt-6 px-6 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent-dark transition-colors">
                      Save Changes
                    </button>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-6">
                    <h3 className="text-lg font-bold text-primary dark:text-white mb-6">SEO Settings</h3>
                    <div className="space-y-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Meta Title</label>
                        <input
                          type="text"
                          defaultValue="GVENT Engineering | Engineering Solutions That Drive Innovation"
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Meta Description</label>
                        <textarea
                          rows={3}
                          defaultValue="Trusted ACMV, Fire Protection, Plumbing and Structural Engineering Services for Commercial and Industrial Projects in Singapore."
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 dark:text-white text-sm resize-none focus:outline-none focus:ring-2 focus:ring-accent/50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Keywords</label>
                        <input
                          type="text"
                          defaultValue="engineering, ACMV, fire protection, plumbing, structural, Singapore"
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                        />
                      </div>
                    </div>
                    <button className="mt-6 px-6 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent-dark transition-colors">
                      Save Changes
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}
