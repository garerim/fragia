import React from 'react';
import {
  Area,
  AreaChart as RechartsAreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { cn } from '@/lib/utils';

interface AreaChartProps {
  data: any[];
  className?: string;
  areaColor?: string;
  xAxisDataKey: string;
  yAxisDataKey: string;
  height?: number;
  width?: string | number;
  strokeColor?: string;
  fillColor?: string;
  showGrid?: boolean;
}

export function AreaChart({
  data,
  className,
  xAxisDataKey,
  yAxisDataKey,
  height = 300,
  width = '100%',
  strokeColor = '#8884d8',
  fillColor = 'rgba(136, 132, 216, 0.3)',
  showGrid = true,
}: AreaChartProps) {
  return (
    <div className={cn('w-full', className)}>
      <ResponsiveContainer width={width} height={height}>
        <RechartsAreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          {showGrid && <CartesianGrid strokeDasharray="3 3" />}
          <XAxis dataKey={xAxisDataKey} />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey={yAxisDataKey}
            stroke={strokeColor}
            fill={fillColor}
          />
        </RechartsAreaChart>
      </ResponsiveContainer>
    </div>
  );
} 