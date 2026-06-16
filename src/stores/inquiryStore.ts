/**
 * Simple in-memory inquiry store.
 * In production, this would be backed by a database via API calls.
 * For now, it syncs across components using a pub/sub pattern.
 */

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  page: string;
  service: string;
  date: string;
  read: boolean;
}

type Listener = () => void;

const listeners: Listener[] = [];

let inquiries: Inquiry[] = [
  {
    id: '1',
    name: 'John Tan',
    email: 'john@company.com',
    phone: '+65 9123 4567',
    subject: 'ACMV Consultation',
    message:
      'We need ACMV solutions for our new office building in Jurong East. The building is 12 stories and we need a full design-build package.',
    page: 'Contact Page',
    service: '',
    date: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(),
    read: false,
  },
  {
    id: '2',
    name: 'Sarah Lee',
    email: 'sarah@corp.sg',
    phone: '+65 8765 4321',
    subject: 'Fire Protection Quote',
    message:
      'Looking for fire protection system installation for our 5,000 sqm warehouse in Tuas. Need compliance with SCDF regulations.',
    page: 'Service Detail',
    service: 'Fire Protection System',
    date: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    read: false,
  },
  {
    id: '3',
    name: 'Michael Chen',
    email: 'michael@enterprise.com',
    phone: '',
    subject: 'Structural Engineering',
    message:
      'Need structural assessment for building renovation project at Marina Bay area.',
    page: 'Home Page',
    service: '',
    date: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
    read: true,
  },
  {
    id: '4',
    name: 'Lisa Wong',
    email: 'lisa@build.sg',
    phone: '+65 9876 5432',
    subject: 'Plumbing Services',
    message:
      'Require plumbing maintenance contract for our commercial building at Raffles Place. 30 floors.',
    page: 'Contact Page',
    service: '',
    date: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(),
    read: true,
  },
];

function notify() {
  listeners.forEach((l) => l());
}

export const inquiryStore = {
  getAll(): Inquiry[] {
    return [...inquiries];
  },

  getUnreadCount(): number {
    return inquiries.filter((i) => !i.read).length;
  },

  add(data: {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
    page?: string;
    service?: string;
  }) {
    const newInquiry: Inquiry = {
      id: String(Date.now()),
      name: data.name,
      email: data.email,
      phone: data.phone || '',
      subject: data.subject,
      message: data.message,
      page: data.page || '',
      service: data.service || '',
      date: new Date().toISOString(),
      read: false,
    };
    inquiries = [newInquiry, ...inquiries];
    notify();
    return newInquiry;
  },

  markAsRead(id: string) {
    inquiries = inquiries.map((inq) =>
      inq.id === id ? { ...inq, read: true } : inq
    );
    notify();
  },

  delete(id: string) {
    inquiries = inquiries.filter((inq) => inq.id !== id);
    notify();
  },

  subscribe(listener: Listener) {
    listeners.push(listener);
    return () => {
      const idx = listeners.indexOf(listener);
      if (idx > -1) listeners.splice(idx, 1);
    };
  },
};
