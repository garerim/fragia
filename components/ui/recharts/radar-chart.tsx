import React from 'react';
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart as RechartsRadarChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { cn } from '@/lib/utils';

interface RadarChartProps {
  data: any[];
  className?: string;
  dataKey: string;
  nameKey?: string;
  height?: number;
  width?: string | number;
  radarColor?: string;
  fillColor?: string;
  showGrid?: boolean;
}

export function RadarChart({
  data,
  className,
  dataKey,
  nameKey = 'subject',
  height = 300,
  width = '100%',
  radarColor = '#8884d8',
  fillColor = 'rgba(136, 132, 216, 0.6)',
  showGrid = true,
}: RadarChartProps) {
  return (
    <div className={cn('w-full', className)}>
      <ResponsiveContainer width={width} height={height}>
        <RechartsRadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          {showGrid && <PolarGrid />}
          <PolarAngleAxis dataKey={nameKey} />
          <PolarRadiusAxis />
          <Tooltip />
          <Radar
            name={dataKey}
            dataKey={dataKey}
            stroke={radarColor}
            fill={fillColor}
            fillOpacity={0.6}
          />
        </RechartsRadarChart>
      </ResponsiveContainer>
    </div>
  );
} 