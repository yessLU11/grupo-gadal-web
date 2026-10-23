import { Tractor, Truck } from "lucide-react";

interface MiniVehiculosAnimadosProps {
  className?: string;
}

export function MiniVehiculosAnimados({
  className = "",
}: MiniVehiculosAnimadosProps) {
  return (
    <div
      className={`mini-vehicles-track ${className}`}
      aria-hidden="true"
    >
      <Tractor className="animate-tractor" />
      <Truck className="animate-tractor animate-tractor-delayed" />
    </div>
  );
}
