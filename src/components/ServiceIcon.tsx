import { Wind, Droplets, Building2, Flame, Hammer } from 'lucide-react';

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  Wind, Droplets, Building2, Flame, Hammer,
};

export default function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = icons[name] || Wind;
  return <Icon className={className} />;
}
