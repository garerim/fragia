import React from 'react';
import {
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { cn } from '@/lib/utils';

interface BarChartProps {
  data: any[];
  className?: string;
  xAxisDataKey: string;
  yAxisDataKey: string;
  height?: number;
  width?: string | number;
  barColor?: string;
  showGrid?: boolean;
}

export function BarChart({
  data,
  className,
  xAxisDataKey,
  yAxisDataKey,
  height = 300,
  width = '100%',
  barColor = '#8884d8',
  showGrid = true,
}: BarChartProps) {
  return (
    <div className={cn('w-full', className)}>
      <ResponsiveContainer width={width} height={height}>
        <RechartsBarChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          {showGrid && <CartesianGrid strokeDasharray="3 3" />}
          <XAxis dataKey={xAxisDataKey} />
          <YAxis />
          <Tooltip />
          <Bar dataKey={yAxisDataKey} fill={barColor} radius={[4, 4, 0, 0]} />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
} 